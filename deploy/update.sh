#!/usr/bin/env bash
# =====================================================================================================
#  gbsqchp.com – deploy the latest code from GitHub.
#     sudo bash /var/www/gbsqchp/deploy/update.sh            pull, install, build, restart
#     sudo bash /var/www/gbsqchp/deploy/update.sh --seed     …and re-run the content seed
#  Before deploy/setup-ci.sh has been run, the site is offline while it builds (2–5 minutes). Afterwards this
#  simply runs /usr/local/sbin/gbsqchp-deploy (zero-downtime releases). .env and media are never touched.
# =====================================================================================================
set -Eeuo pipefail

APP_DIR="/var/www/gbsqchp"; APP_USER="gbsqchp"; APP_HOME="/var/lib/gbsqchp"
NODE_DIR="/opt/gbsqchp-node"; SERVICE="gbsqchp"; BRANCH="${BRANCH:-main}"
SEED=0; [[ "${1:-}" == "--seed" ]] && SEED=1

c_info=$'\e[36m'; c_ok=$'\e[32m'; c_err=$'\e[31m'; c_off=$'\e[0m'
step() { printf '\n%s==> %s%s\n' "$c_info" "$*" "$c_off"; }
ok()   { printf '%s    ✓ %s%s\n' "$c_ok" "$*" "$c_off"; }
die()  { printf '\n%sERROR: %s%s\n' "$c_err" "$*" "$c_off" >&2; exit 1; }
trap 'die "update stopped at line $LINENO ($BASH_COMMAND). If the site is down, fix the cause and run update.sh again."' ERR
as_app() { sudo -u "$APP_USER" -H env PATH="$NODE_DIR/bin:/usr/local/bin:/usr/bin:/bin" HOME="$APP_HOME" "$@"; }

[[ $EUID -eq 0 ]] || die "run with sudo:  sudo bash $0"

# Once automatic deploys are set up (deploy/setup-ci.sh), all deploys go through the release deployer:
# build next to the live site, switch in seconds, roll back on failure.
if [[ -x /usr/local/sbin/gbsqchp-deploy ]]; then
  exec /usr/local/sbin/gbsqchp-deploy "$@"
fi
[[ -d "$APP_DIR/.git" && -x "$NODE_DIR/bin/node" ]] || die "not installed yet – run deploy/setup-server.sh first"

step "Pulling ${BRANCH}"
BEFORE="$(as_app git -C "$APP_DIR" rev-parse --short HEAD)"
as_app git -C "$APP_DIR" fetch --quiet origin "$BRANCH"
as_app git -C "$APP_DIR" reset --quiet --hard "origin/$BRANCH"
ok "${BEFORE} → $(as_app git -C "$APP_DIR" log -1 --format='%h %s')"

step "Installing dependencies"
as_app bash -c "cd '$APP_DIR' && npm ci --no-audit --no-fund --loglevel=error"
ok "done"

MEM_MB=$(awk '/MemTotal/{print int($2/1024)}' /proc/meminfo); SWAP_MB=$(awk '/SwapTotal/{print int($2/1024)}' /proc/meminfo)
HEAP_MB=$(( MEM_MB + SWAP_MB - 768 )); (( HEAP_MB > 4096 )) && HEAP_MB=4096; (( HEAP_MB < 1536 )) && HEAP_MB=1536

step "Building (site offline until restart)"
systemctl stop "$SERVICE"
as_app bash -c "cd '$APP_DIR' && NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS='--no-deprecation --max-old-space-size=${HEAP_MB}' node node_modules/next/dist/bin/next build" \
  | grep -vE '^\s*$' | tail -n 25
[[ -f "$APP_DIR/.next/BUILD_ID" ]] || die "build failed – see above"
ok "build $(cat "$APP_DIR/.next/BUILD_ID")"

if [[ $SEED == 1 ]]; then
  step "Seeding content"
  as_app bash -c "cd '$APP_DIR' && NODE_OPTIONS=--no-deprecation node node_modules/payload/bin.js run src/seed/index.ts" | tail -n 15
fi

step "Restarting"
systemctl start "$SERVICE"
PORT="$(grep -E '^PORT=' "$APP_DIR/.env" | tail -1 | cut -d= -f2 | tr -d '[:space:]')"
code=000
for _ in $(seq 1 45); do
  code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "http://127.0.0.1:${PORT}/" || true)"
  [[ "$code" == 200 ]] && break; sleep 2
done
[[ "$code" == 200 ]] || { journalctl -u "$SERVICE" -n 30 --no-pager; die "site not answering (HTTP ${code}) – log above"; }
ok "live again – http://127.0.0.1:${PORT}/ → 200"
