#!/usr/bin/env bash
# =====================================================================================================
#  gbsqchp.com – turn on HTTPS with a free Let's Encrypt certificate (auto-renews).
#  Run after gbsqchp.com (and www) point at this server:   sudo bash /var/www/gbsqchp/deploy/enable-https.sh
#  Safe to run again: it keeps a valid certificate and adds www when that starts pointing here.
# =====================================================================================================
set -Eeuo pipefail

DOMAIN="gbsqchp.com"
WWW_DOMAIN="www.gbsqchp.com"
CERT_EMAIL="customerservice@gbsqchp.com"
FROM_SETUP=0; [[ "${1:-}" == "--from-setup" ]] && FROM_SETUP=1

c_ok=$'\e[32m'; c_warn=$'\e[33m'; c_err=$'\e[31m'; c_off=$'\e[0m'
ok()   { printf '%s    ✓ %s%s\n' "$c_ok" "$*" "$c_off"; }
warn() { printf '%s    ! %s%s\n' "$c_warn" "$*" "$c_off"; }
die()  { printf '%sERROR: %s%s\n' "$c_err" "$*" "$c_off" >&2; exit 1; }

[[ $EUID -eq 0 ]] || die "run with sudo:  sudo bash $0"

if [[ -f "/etc/nginx/sites-available/${DOMAIN}.conf" || -f "/etc/nginx/conf.d/${DOMAIN}.conf" ]]; then WEB=nginx
elif [[ -f "/etc/apache2/sites-available/${DOMAIN}.conf" ]]; then WEB=apache
else die "no nginx or Apache site for ${DOMAIN} found – run deploy/setup-server.sh first"; fi

PUBLIC_IP="$(curl -4 -fsS --max-time 8 https://api.ipify.org 2>/dev/null || curl -4 -fsS --max-time 8 https://ifconfig.me 2>/dev/null || hostname -I 2>/dev/null | awk '{print $1}' || true)"
[[ -n "$PUBLIC_IP" ]] || die "could not work out this server's public IP"

# Ask Google's public DNS (not this server's cache) where each name points.
resolves_here() {
  local ips
  ips="$(curl -fsS --max-time 8 "https://dns.google/resolve?name=$1&type=A" 2>/dev/null | grep -oE '"data": ?"[0-9.]+"' | grep -oE '[0-9.]+' || true)"
  [[ -z "$ips" ]] && ips="$(getent ahostsv4 "$1" 2>/dev/null | awk '{print $1}' | sort -u || true)"
  grep -qx "$PUBLIC_IP" <<<"$ips"
}

DOMAINS=()
resolves_here "$DOMAIN" && DOMAINS+=("$DOMAIN")
resolves_here "$WWW_DOMAIN" && DOMAINS+=("$WWW_DOMAIN")

if [[ " ${DOMAINS[*]-} " != *" ${DOMAIN} "* ]]; then
  warn "${DOMAIN} does not point at this server (${PUBLIC_IP}) yet, so a certificate cannot be issued."
  warn "At GoDaddy set:  A  @ → ${PUBLIC_IP}   and   CNAME  www → ${DOMAIN}"
  warn "then run:  sudo bash /var/www/gbsqchp/deploy/enable-https.sh"
  [[ $FROM_SETUP == 1 ]] && exit 0 || exit 1
fi
[[ " ${DOMAINS[*]} " == *" ${WWW_DOMAIN} "* ]] || warn "${WWW_DOMAIN} does not point here yet – the certificate covers ${DOMAIN} only; run this script again once www is set."

PKGS=(certbot)
[[ $WEB == nginx ]] && PKGS+=(python3-certbot-nginx) || PKGS+=(python3-certbot-apache)
NEED=(); for p in "${PKGS[@]}"; do dpkg -s "$p" >/dev/null 2>&1 || NEED+=("$p"); done
if ((${#NEED[@]})); then
  apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get install -y -qq "${NEED[@]}" >/dev/null
  ok "installed ${NEED[*]}"
fi

ARGS=(--non-interactive --agree-tos -m "$CERT_EMAIL" --redirect --keep-until-expiring --expand)
for d in "${DOMAINS[@]}"; do ARGS+=(-d "$d"); done
certbot "--${WEB}" "${ARGS[@]}"

code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 15 "https://${DOMAIN}/" || true)"
if [[ "$code" == 200 ]]; then ok "https://${DOMAIN}/ is live (HTTP 200); http:// now redirects to https://; renewal is automatic"
else warn "certificate installed, but https://${DOMAIN}/ answered ${code} from this server – check: sudo systemctl status gbsqchp"; fi
