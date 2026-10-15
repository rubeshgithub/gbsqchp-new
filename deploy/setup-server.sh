#!/usr/bin/env bash
# =====================================================================================================
#  gbsqchp.com – one-command server setup (Ubuntu / Debian)
#
#  Run on the server, as a user with sudo:
#     curl -fsSL https://raw.githubusercontent.com/rubeshgithub/gbsqchp-new/main/deploy/setup-server.sh -o setup-gbsqchp.sh
#     sudo bash setup-gbsqchp.sh
#
#  What it does (safe to run again – every step checks what is already there):
#    1. Installs git/curl if missing and a private Node.js 22 in /opt/gbsqchp-node
#       (your other sites keep whatever Node version they use now).
#    2. Creates a system user "gbsqchp" and the app folder /var/www/gbsqchp, and clones the GitHub repo.
#    3. Creates /var/www/gbsqchp/.env (asks for the MongoDB Atlas connection string once).
#    4. Checks the server can reach the database, installs dependencies and builds the site.
#    5. Runs it as a systemd service "gbsqchp" on 127.0.0.1:<free port>, restarting on failure and on reboot.
#    6. Adds a gbsqchp.com site to nginx (or Apache if that is what serves port 80) without touching other sites.
#    7. Turns on HTTPS (Let's Encrypt) if gbsqchp.com already points at this server; otherwise tells you
#       to run deploy/enable-https.sh after the DNS change.
#
#  Options (environment variables):  DATABASE_URL=...  (skip the prompt)   SKIP_SEED=1   BRANCH=main   REPO_URL=...
# =====================================================================================================
set -Eeuo pipefail

DOMAIN="gbsqchp.com"
WWW_DOMAIN="www.gbsqchp.com"
REPO_URL="${REPO_URL:-https://github.com/rubeshgithub/gbsqchp-new.git}"
BRANCH="${BRANCH:-main}"
APP_DIR="/var/www/gbsqchp"
APP_USER="gbsqchp"
APP_HOME="/var/lib/gbsqchp"
NODE_DIR="/opt/gbsqchp-node"
NODE_MAJOR="22"
SERVICE="gbsqchp"
CONTACT_TO="customerservice@gbsqchp.com"

c_info=$'\e[36m'; c_ok=$'\e[32m'; c_warn=$'\e[33m'; c_err=$'\e[31m'; c_off=$'\e[0m'
step() { printf '\n%s==> %s%s\n' "$c_info" "$*" "$c_off"; }
ok()   { printf '%s    ✓ %s%s\n' "$c_ok" "$*" "$c_off"; }
warn() { printf '%s    ! %s%s\n' "$c_warn" "$*" "$c_off"; }
die()  { printf '\n%sERROR: %s%s\n' "$c_err" "$*" "$c_off" >&2; exit 1; }
trap 'die "setup stopped at line $LINENO (command: $BASH_COMMAND). Nothing else was changed after this point; fix the cause and run the script again."' ERR

as_app() { sudo -u "$APP_USER" -H env PATH="$NODE_DIR/bin:/usr/local/bin:/usr/bin:/bin" HOME="$APP_HOME" "$@"; }

# -----------------------------------------------------------------------------------------------------
step "Checking the server"
[[ $EUID -eq 0 ]] || die "run this with sudo:  sudo bash $0"
command -v apt-get >/dev/null || die "this script supports Ubuntu/Debian (apt). Tell Claude which OS the server runs: $(. /etc/os-release 2>/dev/null; echo "${PRETTY_NAME:-unknown}")"
. /etc/os-release
ok "${PRETTY_NAME}, $(uname -m), $(nproc) CPU, $(awk '/MemTotal/{printf "%.1f GB RAM", $2/1048576}' /proc/meminfo)"

PUBLIC_IP="$(curl -4 -fsS --max-time 8 https://api.ipify.org 2>/dev/null || curl -4 -fsS --max-time 8 https://ifconfig.me 2>/dev/null || hostname -I | awk '{print $1}')"
ok "public IPv4: ${PUBLIC_IP}"

if [[ -L "$APP_DIR" && -x /usr/local/sbin/gbsqchp-deploy ]]; then
  ok "already installed with release folders and automatic deploys"
  echo "    Deploy the latest code:   sudo gbsqchp-deploy"
  echo "    Re-check HTTPS:           sudo bash ${APP_DIR}/deploy/enable-https.sh"
  exit 0
fi

# -----------------------------------------------------------------------------------------------------
step "Installing base packages (only what is missing)"
NEED=()
for p in git curl ca-certificates xz-utils openssl; do dpkg -s "$p" >/dev/null 2>&1 || NEED+=("$p"); done
command -v ss >/dev/null || NEED+=(iproute2)
if ((${#NEED[@]})); then
  apt-get update -qq
  DEBIAN_FRONTEND=noninteractive apt-get install -y -qq "${NEED[@]}" >/dev/null
  ok "installed: ${NEED[*]}"
else
  ok "git, curl, openssl already present"
fi

# -----------------------------------------------------------------------------------------------------
step "Private Node.js ${NODE_MAJOR} for this site (${NODE_DIR})"
case "$(uname -m)" in
  x86_64) NODE_ARCH="linux-x64" ;;
  aarch64|arm64) NODE_ARCH="linux-arm64" ;;
  *) die "unsupported CPU architecture $(uname -m)" ;;
esac
CURRENT_NODE=""
[[ -x "$NODE_DIR/bin/node" ]] && CURRENT_NODE="$("$NODE_DIR/bin/node" -v)"
if [[ "$CURRENT_NODE" == v${NODE_MAJOR}.* ]]; then
  ok "already installed: node ${CURRENT_NODE}"
else
  TMP="$(mktemp -d)"
  BASE="https://nodejs.org/dist/latest-v${NODE_MAJOR}.x"
  curl -fsSL "$BASE/SHASUMS256.txt" -o "$TMP/SHASUMS256.txt"
  TARBALL="$(grep -oE "node-v[0-9.]+-${NODE_ARCH}\.tar\.xz" "$TMP/SHASUMS256.txt" | head -1)"
  [[ -n "$TARBALL" ]] || die "could not find a Node ${NODE_MAJOR} download for ${NODE_ARCH}"
  curl -fsSL "$BASE/$TARBALL" -o "$TMP/$TARBALL"
  (cd "$TMP" && grep " ${TARBALL}\$" SHASUMS256.txt | sha256sum -c --status) || die "Node download failed its checksum"
  rm -rf "$NODE_DIR" && mkdir -p "$NODE_DIR"
  tar -xJf "$TMP/$TARBALL" -C "$NODE_DIR" --strip-components=1
  rm -rf "$TMP"
  ok "installed node $("$NODE_DIR/bin/node" -v) (checksum verified)"
fi

# -----------------------------------------------------------------------------------------------------
step "App user and folder"
if id "$APP_USER" >/dev/null 2>&1; then
  ok "user ${APP_USER} exists"
else
  useradd --system --create-home --home-dir "$APP_HOME" --shell /usr/sbin/nologin "$APP_USER"
  ok "created system user ${APP_USER}"
fi
mkdir -p "$APP_HOME" && chown "$APP_USER:$APP_USER" "$APP_HOME"

if [[ -d "$APP_DIR/.git" ]]; then
  chown -R "$APP_USER:$APP_USER" "$APP_DIR"
  as_app git -C "$APP_DIR" fetch --quiet origin "$BRANCH"
  as_app git -C "$APP_DIR" reset --quiet --hard "origin/$BRANCH"
  ok "updated ${APP_DIR} to $(as_app git -C "$APP_DIR" log -1 --format='%h %s')"
else
  if [[ -e "$APP_DIR" ]] && [[ -n "$(ls -A "$APP_DIR" 2>/dev/null)" ]]; then
    die "${APP_DIR} already exists and is not this site's git checkout. Move it away (e.g. sudo mv ${APP_DIR} ${APP_DIR}.old) and run again."
  fi
  mkdir -p "$APP_DIR" && chown "$APP_USER:$APP_USER" "$APP_DIR"
  as_app git clone --quiet --branch "$BRANCH" "$REPO_URL" "$APP_DIR"
  ok "cloned ${REPO_URL} → ${APP_DIR} ($(as_app git -C "$APP_DIR" log -1 --format='%h'))"
fi
mkdir -p "$APP_DIR/media" && chown "$APP_USER:$APP_USER" "$APP_DIR/media"

# -----------------------------------------------------------------------------------------------------
step "Port for the app"
ENV_FILE="$APP_DIR/.env"
port_in_use() { ss -ltnH "( sport = :$1 )" 2>/dev/null | grep -q .; }
PORT=""
[[ -f "$ENV_FILE" ]] && PORT="$(grep -E '^PORT=' "$ENV_FILE" | tail -1 | cut -d= -f2 | tr -d '[:space:]' || true)"
if [[ -z "$PORT" ]]; then
  PORT=3100
  while port_in_use "$PORT"; do PORT=$((PORT + 1)); done
fi
ok "the site will listen on 127.0.0.1:${PORT} (only nginx/Apache can reach it)"

# -----------------------------------------------------------------------------------------------------
step "Environment file (${ENV_FILE})"
FIRST_INSTALL=0
if [[ -f "$ENV_FILE" ]]; then
  ok "keeping the existing .env"
  grep -qE '^PORT=' "$ENV_FILE" || echo "PORT=${PORT}" >>"$ENV_FILE"
else
  FIRST_INSTALL=1
  DB_URL="${DATABASE_URL:-}"
  if [[ -z "$DB_URL" ]]; then
    echo "    Paste the MongoDB Atlas connection string – the same DATABASE_URL as in the .env on your PC."
    echo "    (typing is hidden; press Enter when done)"
    read -rs -p "    DATABASE_URL: " DB_URL </dev/tty
    echo
  fi
  [[ "$DB_URL" == mongodb* ]] || die "that does not look like a MongoDB connection string (it should start with mongodb+srv:// or mongodb://)"
  SECRET="$(openssl rand -hex 32)"
  umask 077
  cat >"$ENV_FILE" <<EOF
# Created by deploy/setup-server.sh on $(date -u +%Y-%m-%d). Never commit this file.
DATABASE_URL=${DB_URL}
PAYLOAD_SECRET=${SECRET}
NEXT_PUBLIC_SERVER_URL=https://${DOMAIN}
PORT=${PORT}

# ---- Contact form email via Amazon SES (ca-west-1). Fill in SMTP_USER / SMTP_PASS, then: sudo systemctl restart ${SERVICE}
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=${CONTACT_TO}
SMTP_FROM_NAME=Primary Source Verification Guide
CONTACT_TO_EMAIL=${CONTACT_TO}
EOF
  umask 022
  ok "created .env (new PAYLOAD_SECRET generated; SMTP left blank for now)"
fi
chown "$APP_USER:$APP_USER" "$ENV_FILE" && chmod 600 "$ENV_FILE"

# -----------------------------------------------------------------------------------------------------
step "Memory for the build"
MEM_MB=$(awk '/MemTotal/{print int($2/1024)}' /proc/meminfo)
SWAP_MB=$(awk '/SwapTotal/{print int($2/1024)}' /proc/meminfo)
if (( MEM_MB < 3500 && SWAP_MB < 1024 )); then
  if [[ ! -f /swapfile ]]; then
    fallocate -l 2G /swapfile 2>/dev/null || dd if=/dev/zero of=/swapfile bs=1M count=2048 status=none
    chmod 600 /swapfile && mkswap /swapfile >/dev/null
    grep -q '^/swapfile ' /etc/fstab || echo '/swapfile none swap sw 0 0' >>/etc/fstab
  fi
  swapon /swapfile 2>/dev/null || true
  SWAP_MB=$(awk '/SwapTotal/{print int($2/1024)}' /proc/meminfo)
  ok "added a 2 GB swap file (the server has ${MEM_MB} MB RAM; building the site needs more)"
fi
HEAP_MB=$(( MEM_MB + SWAP_MB - 768 ))
(( HEAP_MB > 4096 )) && HEAP_MB=4096
(( HEAP_MB < 1536 )) && HEAP_MB=1536
ok "build heap ${HEAP_MB} MB (RAM ${MEM_MB} MB, swap ${SWAP_MB} MB)"

# -----------------------------------------------------------------------------------------------------
step "Installing dependencies (npm ci – takes a few minutes)"
as_app bash -c "cd '$APP_DIR' && npm ci --no-audit --no-fund --loglevel=error"
ok "dependencies installed"

# -----------------------------------------------------------------------------------------------------
step "Checking the database connection"
DB_CHECK='
const fs = require("fs");
const line = fs.readFileSync(".env", "utf8").split(/\r?\n/).find((l) => l.startsWith("DATABASE_URL="));
const url = line ? line.slice("DATABASE_URL=".length).trim().replace(/^["\x27]|["\x27]$/g, "") : "";
const { MongoClient } = require("mongodb");
const client = new MongoClient(url, { serverSelectionTimeoutMS: 15000 });
client.connect()
  .then(() => client.db().command({ ping: 1 }))
  .then(() => Promise.all([client.db().collection("pages").countDocuments(), client.db().collection("users").countDocuments()]))
  .then(([p, u]) => { console.log("pages=" + p + " users=" + u); return client.close(); })
  .catch((e) => { console.error(e.message); process.exit(1); });
'
if ! DB_OUT="$(as_app bash -c "cd '$APP_DIR' && node -e '$DB_CHECK'" 2>&1)"; then
  printf '%s\n' "$DB_OUT" | sed 's/^/    /'
  die "the server cannot reach MongoDB. In MongoDB Atlas → Security → Network Access, add this server's IP ${PUBLIC_IP} (or check the connection string in ${ENV_FILE}), then run this script again."
fi
PAGE_COUNT="$(grep -oE 'pages=[0-9]+' <<<"$DB_OUT" | cut -d= -f2 || true)"
USER_COUNT="$(grep -oE 'users=[0-9]+' <<<"$DB_OUT" | cut -d= -f2 || true)"
ok "connected to MongoDB (${PAGE_COUNT:-0} guide pages in the database)"

# -----------------------------------------------------------------------------------------------------
step "Building the site (next build – 2 to 6 minutes)"
systemctl stop "$SERVICE" 2>/dev/null || true
as_app bash -c "cd '$APP_DIR' && NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS='--no-deprecation --max-old-space-size=${HEAP_MB}' node node_modules/next/dist/bin/next build" \
  | grep -vE '^\s*$' | tail -n 25
[[ -f "$APP_DIR/.next/BUILD_ID" ]] || die "the build did not finish – see the output above"
ok "build $(cat "$APP_DIR/.next/BUILD_ID")"

# -----------------------------------------------------------------------------------------------------
if [[ ( "$FIRST_INSTALL" == 1 || "${PAGE_COUNT:-0}" == 0 ) && "${SKIP_SEED:-0}" != 1 ]]; then
  step "Loading the guide content into the database (seed – safe to repeat)"
  as_app bash -c "cd '$APP_DIR' && NODE_OPTIONS=--no-deprecation node node_modules/payload/bin.js run src/seed/index.ts" | sed 's/^/    /' | tail -n 15
  ok "content seeded"
fi

# -----------------------------------------------------------------------------------------------------
step "systemd service '${SERVICE}'"
cat >/etc/systemd/system/${SERVICE}.service <<EOF
[Unit]
Description=gbsqchp.com – Primary Source Verification Guide (Next.js + Payload CMS)
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=${APP_USER}
Group=${APP_USER}
WorkingDirectory=${APP_DIR}
Environment=NODE_ENV=production
Environment=NEXT_TELEMETRY_DISABLED=1
Environment=NODE_OPTIONS=--no-deprecation
Environment=PATH=${NODE_DIR}/bin:/usr/local/bin:/usr/bin:/bin
ExecStart=${NODE_DIR}/bin/node ${APP_DIR}/node_modules/next/dist/bin/next start -H 127.0.0.1 -p ${PORT}
Restart=always
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
systemctl enable --quiet "$SERVICE"
systemctl restart "$SERVICE"

HTTP_CODE=000
for _ in $(seq 1 45); do
  HTTP_CODE="$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "http://127.0.0.1:${PORT}/" || true)"
  [[ "$HTTP_CODE" == 200 ]] && break
  sleep 2
done
if [[ "$HTTP_CODE" != 200 ]]; then
  journalctl -u "$SERVICE" -n 30 --no-pager | sed 's/^/    /'
  die "the site did not answer on port ${PORT} (last HTTP status ${HTTP_CODE}). The log is above."
fi
ok "site is running: http://127.0.0.1:${PORT}/ → 200"

# -----------------------------------------------------------------------------------------------------
step "Web server for ${DOMAIN}"
WEB=""
LISTENER="$(ss -ltnpH '( sport = :80 )' 2>/dev/null | grep -oE 'users:\(\("[^"]+' | head -1 | sed 's/users:(("//' || true)"
case "$LISTENER" in
  nginx*) WEB=nginx ;;
  apache2*|httpd*) WEB=apache ;;
  "")
    if command -v nginx >/dev/null; then WEB=nginx
    elif command -v apache2 >/dev/null; then WEB=apache
    else
      apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get install -y -qq nginx >/dev/null
      WEB=nginx; ok "installed nginx"
    fi ;;
  *) WEB=other ;;
esac

IPV6_LISTEN=""
if command -v python3 >/dev/null; then
  python3 -c 'import socket; socket.socket(socket.AF_INET6).close()' 2>/dev/null && IPV6_LISTEN="    listen [::]:80;"
elif [[ -f /proc/net/if_inet6 ]]; then
  IPV6_LISTEN="    listen [::]:80;"
fi

if [[ "$WEB" == nginx ]]; then
  if [[ -d /etc/nginx/sites-available ]]; then
    NGX_FILE="/etc/nginx/sites-available/${DOMAIN}.conf"; NGX_LINK="/etc/nginx/sites-enabled/${DOMAIN}.conf"
  else
    NGX_FILE="/etc/nginx/conf.d/${DOMAIN}.conf"; NGX_LINK=""
  fi
  OTHER="$(grep -rlE "server_name[^;]*\b${DOMAIN//./\\.}\b" /etc/nginx 2>/dev/null | grep -v "${DOMAIN}.conf" || true)"
  [[ -n "$OTHER" ]] && warn "another nginx file also mentions ${DOMAIN}: ${OTHER} – remove that server block if the site shows the wrong content"

  if [[ -f "$NGX_FILE" ]] && grep -q 'managed by Certbot' "$NGX_FILE"; then
    sed -i -E "s#proxy_pass http://127\.0\.0\.1:[0-9]+;#proxy_pass http://127.0.0.1:${PORT};#" "$NGX_FILE"
    ok "kept the existing HTTPS config, updated the app port"
  else
    [[ -f "$NGX_FILE" ]] && cp "$NGX_FILE" "${NGX_FILE}.bak"
    cat >"$NGX_FILE" <<EOF
# gbsqchp.com – written by ${APP_DIR}/deploy/setup-server.sh
server {
    listen 80;
${IPV6_LISTEN}
    server_name ${DOMAIN} ${WWW_DOMAIN};

    client_max_body_size 25m;

    location / {
        proxy_pass http://127.0.0.1:${PORT};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_read_timeout 120s;
    }
}
EOF
    [[ -n "$NGX_LINK" ]] && ln -sf "$NGX_FILE" "$NGX_LINK"
  fi
  if nginx -t >/dev/null 2>&1; then
    systemctl reload nginx 2>/dev/null || systemctl restart nginx
    ok "nginx site ${NGX_FILE} active"
  else
    nginx -t 2>&1 | sed 's/^/    /' || true
    if [[ -f "${NGX_FILE}.bak" ]]; then mv "${NGX_FILE}.bak" "$NGX_FILE"; else rm -f "$NGX_FILE" "$NGX_LINK"; fi
    die "nginx rejected the configuration (details above); the change was rolled back and your other sites are untouched"
  fi
elif [[ "$WEB" == apache ]]; then
  a2enmod -q proxy proxy_http headers >/dev/null
  AP_FILE="/etc/apache2/sites-available/${DOMAIN}.conf"
  if [[ -f "$AP_FILE" ]] && grep -q 'RewriteRule.*https' "$AP_FILE"; then
    sed -i -E "s#http://127\.0\.0\.1:[0-9]+/#http://127.0.0.1:${PORT}/#g" "$AP_FILE" /etc/apache2/sites-available/${DOMAIN}-le-ssl.conf 2>/dev/null || true
  else
    cat >"$AP_FILE" <<EOF
# gbsqchp.com – written by ${APP_DIR}/deploy/setup-server.sh
<VirtualHost *:80>
    ServerName ${DOMAIN}
    ServerAlias ${WWW_DOMAIN}
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:${PORT}/
    ProxyPassReverse / http://127.0.0.1:${PORT}/
    RequestHeader set X-Forwarded-Proto expr=%{REQUEST_SCHEME}
    LimitRequestBody 26214400
</VirtualHost>
EOF
  fi
  a2ensite -q "${DOMAIN}.conf" >/dev/null
  apache2ctl configtest >/dev/null 2>&1 || { apache2ctl configtest || true; a2dissite -q "${DOMAIN}.conf" || true; die "Apache rejected the configuration; the site was disabled again"; }
  systemctl reload apache2
  ok "Apache site ${AP_FILE} active"
else
  warn "port 80 is served by '${LISTENER}', which this script does not configure."
  warn "Point ${DOMAIN} and ${WWW_DOMAIN} at http://127.0.0.1:${PORT} in that tool (reverse proxy), then run deploy/enable-https.sh if it does not handle certificates itself."
fi

if command -v ufw >/dev/null && ufw status 2>/dev/null | grep -q 'Status: active'; then
  ufw allow 80/tcp >/dev/null && ufw allow 443/tcp >/dev/null
  ok "firewall (ufw): ports 80 and 443 open"
fi

# -----------------------------------------------------------------------------------------------------
step "HTTPS"
if [[ "$WEB" == nginx || "$WEB" == apache ]]; then
  bash "$APP_DIR/deploy/enable-https.sh" --from-setup || true
fi

# -----------------------------------------------------------------------------------------------------
[[ "${USER_COUNT:-1}" == 0 ]] && warn "No admin user yet – open https://${DOMAIN}/admin NOW and create yours (until then, anyone could)."
printf '\n%s================  gbsqchp.com is installed  ================%s\n' "$c_ok" "$c_off"
cat <<EOF
  App folder      ${APP_DIR}   (settings: ${ENV_FILE})
  Service         sudo systemctl status ${SERVICE}   ·   logs: sudo journalctl -u ${SERVICE} -f
  Internal URL    http://127.0.0.1:${PORT}
  Server IP       ${PUBLIC_IP}
  Update later    sudo bash ${APP_DIR}/deploy/update.sh
  Auto-deploy     sudo bash ${APP_DIR}/deploy/setup-ci.sh   (deploys from GitHub on every push to main)
  Admin           https://${DOMAIN}/admin  (same users as on your PC – it is the same database)

  DNS at GoDaddy for ${DOMAIN}:   A  @    → ${PUBLIC_IP}
                                  CNAME www → ${DOMAIN}
EOF
