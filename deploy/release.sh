#!/usr/bin/env bash
# =====================================================================================================
#  gbsqchp.com – zero-downtime release deploy.
#  Installed as /usr/local/sbin/gbsqchp-deploy by deploy/setup-ci.sh (a root-owned copy, so a push to GitHub
#  can never change what runs as root). GitHub Actions calls it through the restricted deploy key; you can
#  also run it by hand:
#       sudo gbsqchp-deploy                   deploy the latest main
#       sudo gbsqchp-deploy --ref <commit>    deploy one exact commit
#       sudo gbsqchp-deploy --seed            …and re-run the content seed (overwrites edits to seeded pages)
#       sudo gbsqchp-deploy --rollback        switch back to the previous release
#
#  Layout:   /var/www/gbsqchp            → symlink to the live release
#            /var/www/gbsqchp-releases/  one folder per deploy (last 3 kept)
#            /var/www/gbsqchp-shared/    .env and media/, linked into every release
#  The new release is installed and built while the old one keeps serving; only the final restart
#  (a few seconds) touches the live site. If the new release fails its health check, the old one is restored.
# =====================================================================================================
set -Eeuo pipefail

REPO_URL="${REPO_URL:-https://github.com/rubeshgithub/gbsqchp-new.git}"
BRANCH="${BRANCH:-main}"
LINK="/var/www/gbsqchp"
RELEASES="/var/www/gbsqchp-releases"
SHARED="/var/www/gbsqchp-shared"
APP_USER="gbsqchp"
APP_HOME="/var/lib/gbsqchp"
NODE_DIR="/opt/gbsqchp-node"
SERVICE="gbsqchp"
KEEP=3

c_info=$'\e[36m'; c_ok=$'\e[32m'; c_warn=$'\e[33m'; c_err=$'\e[31m'; c_off=$'\e[0m'
step() { printf '\n%s==> %s%s\n' "$c_info" "$*" "$c_off"; }
ok()   { printf '%s    ✓ %s%s\n' "$c_ok" "$*" "$c_off"; }
warn() { printf '%s    ! %s%s\n' "$c_warn" "$*" "$c_off"; }
die()  { printf '\n%sERROR: %s%s\n' "$c_err" "$*" "$c_off" >&2; exit 1; }
as_app() { sudo -u "$APP_USER" -H env PATH="$NODE_DIR/bin:/usr/local/bin:/usr/bin:/bin" HOME="$APP_HOME" "$@"; }

NEW=""
on_error() {
  local line=$1 cmd=$2
  (( BASH_SUBSHELL > 0 )) && exit 1   # failure inside a pipeline: let the main shell report it once
  local live; live="$(readlink -f "$LINK" 2>/dev/null || true)"
  if [[ -n "$NEW" && "$live" != "$NEW" ]]; then
    rm -rf "$NEW"
    printf '\n%sERROR: deploy stopped at line %s (%s). The live site was not changed.%s\n' "$c_err" "$line" "$cmd" "$c_off" >&2
  else
    printf '\n%sERROR: deploy stopped at line %s (%s). Live release: %s – check https://gbsqchp.com and run: sudo gbsqchp-deploy --rollback%s\n' "$c_err" "$line" "$cmd" "$(basename "$live")" "$c_off" >&2
  fi
  exit 1
}
trap 'on_error $LINENO "$BASH_COMMAND"' ERR

REF=""; SEED=0; ROLLBACK=0
while (($#)); do
  case "$1" in
    --seed) SEED=1 ;;
    --rollback) ROLLBACK=1 ;;
    --ref) REF="${2:-}"; shift ;;
    -h|--help) sed -n '2,20p' "$0"; exit 0 ;;
    *) die "unknown option: $1" ;;
  esac
  shift
done
[[ -z "$REF" || "$REF" =~ ^[0-9a-f]{7,40}$ ]] || die "--ref must be a commit SHA"
[[ $EUID -eq 0 ]] || die "run with sudo"
[[ -x "$NODE_DIR/bin/node" ]] || die "site not installed yet – run deploy/setup-server.sh first"

exec 9>/run/gbsqchp-deploy.lock
flock -w 900 9 || die "another deploy has been running for 15 minutes – check: ps aux | grep gbsqchp-deploy"

env_port() { grep -E '^PORT=' "$SHARED/.env" | tail -1 | cut -d= -f2 | tr -d '[:space:]'; }
healthy() {
  local port code=000
  port="$(env_port)"
  for _ in $(seq 1 45); do
    code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "http://127.0.0.1:${port}/" || true)"
    [[ "$code" == 200 ]] && return 0
    sleep 2
  done
  echo "    last HTTP status: ${code}"
  return 1
}
switch_to() {
  ln -sfn "$1" "${LINK}.next"
  mv -Tf "${LINK}.next" "$LINK"
  # The service must never inherit the deploy lock or this session's input (keeps CI's SSH session from hanging).
  systemctl restart "$SERVICE" 9>&- </dev/null
}

# ---------------------------------------------------------------------------------------------------
# One-time move from the original in-place install to the release layout.
if [[ -d "$LINK" && ! -L "$LINK" ]]; then
  step "One-time switch to release folders"
  [[ -d "$LINK/.git" ]] || die "$LINK is not this site's checkout"
  mkdir -p "$SHARED" "$RELEASES"
  if [[ -f "$LINK/.env" && ! -L "$LINK/.env" ]]; then mv "$LINK/.env" "$SHARED/.env"; fi
  if [[ -d "$LINK/media" && ! -L "$LINK/media" ]]; then mv "$LINK/media" "$SHARED/media"; fi
  mkdir -p "$SHARED/media"
  INITIAL="$RELEASES/00000000000000-initial-$(as_app git -C "$LINK" rev-parse --short HEAD)"   # sorts as the oldest release
  mv "$LINK" "$INITIAL"
  ln -sfn "$SHARED/.env" "$INITIAL/.env"
  ln -sfn "$SHARED/media" "$INITIAL/media"
  ln -s "$INITIAL" "$LINK"
  chown "$APP_USER:$APP_USER" "$SHARED" "$SHARED/media" "$RELEASES"
  chown -h "$APP_USER:$APP_USER" "$INITIAL/.env" "$INITIAL/media"
  chmod 600 "$SHARED/.env"
  ok "live code moved to ${INITIAL}; .env and media now in ${SHARED} (the site kept running)"
fi
[[ -L "$LINK" ]] || die "$LINK should be a symlink to a release"
[[ -f "$SHARED/.env" ]] || die "missing $SHARED/.env"
CURRENT="$(readlink -f "$LINK")"

# ---------------------------------------------------------------------------------------------------
if [[ $ROLLBACK == 1 ]]; then
  step "Rolling back"
  # Release folders are named <UTC timestamp>-<sha>, so name order is deploy order.
  PREV="$(find "$RELEASES" -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | sort -r | grep -vx "$(basename "$CURRENT")" | head -1 || true)"
  [[ -n "$PREV" ]] && PREV="$RELEASES/$PREV"
  [[ -n "$PREV" && -f "$PREV/.next/BUILD_ID" ]] || die "no earlier release to roll back to"
  switch_to "$PREV"
  healthy || die "the previous release did not start either – check: sudo journalctl -u ${SERVICE} -n 50"
  ok "now serving $(basename "$PREV") (was $(basename "$CURRENT"))"
  exit 0
fi

# ---------------------------------------------------------------------------------------------------
step "Preparing a new release"
FREE_MB=$(df -Pm "$RELEASES" | awk 'NR==2{print $4}')
(( FREE_MB > 3000 )) || die "only ${FREE_MB} MB free on disk – free some space first"
NEW="$RELEASES/$(date -u +%Y%m%d%H%M%S)"
as_app git clone --quiet --branch "$BRANCH" "$REPO_URL" "$NEW"
if [[ -n "$REF" ]]; then
  as_app git -C "$NEW" cat-file -e "${REF}^{commit}" 2>/dev/null || as_app git -C "$NEW" fetch --quiet origin "$REF"
  as_app git -C "$NEW" checkout --quiet --detach "$REF"
fi
SHA="$(as_app git -C "$NEW" rev-parse --short HEAD)"
mv "$NEW" "$NEW-$SHA"; NEW="$NEW-$SHA"
ln -s "$SHARED/.env" "$NEW/.env"
ln -s "$SHARED/media" "$NEW/media"
chown -h "$APP_USER:$APP_USER" "$NEW/.env" "$NEW/media"
ok "$(as_app git -C "$NEW" log -1 --format='%h %s')"

step "Installing dependencies"
as_app bash -c "cd '$NEW' && npm ci --no-audit --no-fund --loglevel=error"
ok "done"

step "Building (the live site keeps running)"
MEM_MB=$(awk '/MemTotal/{print int($2/1024)}' /proc/meminfo); SWAP_MB=$(awk '/SwapTotal/{print int($2/1024)}' /proc/meminfo)
HEAP_MB=$(( MEM_MB + SWAP_MB - 768 )); (( HEAP_MB > 4096 )) && HEAP_MB=4096; (( HEAP_MB < 1536 )) && HEAP_MB=1536
as_app bash -c "cd '$NEW' && NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS='--no-deprecation --max-old-space-size=${HEAP_MB}' node node_modules/next/dist/bin/next build" \
  | grep -vE '^\s*$' | tail -n 25
[[ -f "$NEW/.next/BUILD_ID" ]] || die "the build did not finish – see above"
ok "build $(cat "$NEW/.next/BUILD_ID")"

if [[ $SEED == 1 ]]; then
  step "Seeding content"
  as_app bash -c "cd '$NEW' && NODE_OPTIONS=--no-deprecation node node_modules/payload/bin.js run src/seed/index.ts" | tail -n 15
fi

step "Switching the live site to ${SHA}"
switch_to "$NEW"
if healthy; then
  ok "live: $(basename "$NEW") answers HTTP 200"
else
  journalctl -u "$SERVICE" -n 30 --no-pager | sed 's/^/    /' || true
  warn "the new release did not start – restoring $(basename "$CURRENT")"
  switch_to "$CURRENT"
  healthy && warn "rolled back; the site is serving the previous release" || warn "the previous release is not answering either – check the log above"
  NEW_FAILED="$NEW"; NEW=""
  rm -rf "$NEW_FAILED"
  die "deploy of ${SHA} failed its health check and was rolled back"
fi
NEW=""

step "Cleaning up old releases (keeping ${KEEP})"
LIVE="$(readlink -f "$LINK")"
find "$RELEASES" -mindepth 1 -maxdepth 1 -type d -printf '%f\n' | sort -r | tail -n +$((KEEP + 1)) |
  while read -r name; do
    old="$RELEASES/$name"
    [[ "$old" == "$LIVE" || "$old" == "$CURRENT" ]] && continue
    rm -rf "$old" && echo "    removed $(basename "$old")"
  done
ok "deployed ${SHA}"
