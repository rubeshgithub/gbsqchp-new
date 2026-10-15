#!/usr/bin/env bash
# =====================================================================================================
#  gbsqchp.com – one-time setup for automatic deploys from GitHub Actions.
#     sudo bash /var/www/gbsqchp/deploy/setup-ci.sh             first time, and to update the deploy tools
#     sudo bash /var/www/gbsqchp/deploy/setup-ci.sh --new-key   replace the deploy key (e.g. if it leaked)
#
#  It installs:
#    /usr/local/sbin/gbsqchp-deploy       the release deployer (root-owned copy of deploy/release.sh)
#    /usr/local/sbin/gbsqchp-deploy-ssh   the only command the deploy key may run (copy of deploy/deploy-ssh.sh)
#    user "gbsqchp-ci"                    SSH-only account for GitHub Actions, no password, no shell access
#    /etc/sudoers.d/gbsqchp-ci            lets that account run gbsqchp-deploy and nothing else
#  then makes a deploy key, runs the first release deploy (switching to zero-downtime release folders),
#  and prints what to add on GitHub. It never changes your SSH server settings or firewall.
# =====================================================================================================
set -Eeuo pipefail

CI_USER="gbsqchp-ci"
KEY_FILE="/root/gbsqchp-ci-deploy-key"
SRC_DIR="$(cd "$(dirname "$(readlink -f "$0")")" && pwd)"
NEW_KEY=0; [[ "${1:-}" == "--new-key" ]] && NEW_KEY=1

c_info=$'\e[36m'; c_ok=$'\e[32m'; c_warn=$'\e[33m'; c_err=$'\e[31m'; c_bold=$'\e[1m'; c_off=$'\e[0m'
step() { printf '\n%s==> %s%s\n' "$c_info" "$*" "$c_off"; }
ok()   { printf '%s    ✓ %s%s\n' "$c_ok" "$*" "$c_off"; }
warn() { printf '%s    ! %s%s\n' "$c_warn" "$*" "$c_off"; }
die()  { printf '\n%sERROR: %s%s\n' "$c_err" "$*" "$c_off" >&2; exit 1; }
trap 'die "stopped at line $LINENO ($BASH_COMMAND)"' ERR

[[ $EUID -eq 0 ]] || die "run with sudo:  sudo bash $0"
[[ -f "$SRC_DIR/release.sh" && -f "$SRC_DIR/deploy-ssh.sh" ]] || die "run this from the site's deploy/ folder"
[[ -f /etc/systemd/system/gbsqchp.service ]] || die "the site is not installed yet – run deploy/setup-server.sh first"

# -----------------------------------------------------------------------------------------------------
step "Installing the deploy tools"
install -m 755 -o root -g root "$SRC_DIR/release.sh" /usr/local/sbin/gbsqchp-deploy
install -m 755 -o root -g root "$SRC_DIR/deploy-ssh.sh" /usr/local/sbin/gbsqchp-deploy-ssh
ok "/usr/local/sbin/gbsqchp-deploy and gbsqchp-deploy-ssh"
ok "manual deploys from now on:  sudo gbsqchp-deploy   (rollback: sudo gbsqchp-deploy --rollback)"

# -----------------------------------------------------------------------------------------------------
step "Deploy account '${CI_USER}'"
if id "$CI_USER" >/dev/null 2>&1; then
  ok "exists"
else
  useradd --create-home --shell /bin/sh --comment "GitHub Actions deploys for gbsqchp.com" "$CI_USER"
  ok "created"
fi
usermod -p '*' "$CI_USER"   # no password login possible; key login still allowed
CI_HOME="$(getent passwd "$CI_USER" | cut -d: -f6)"
install -d -m 700 -o "$CI_USER" -g "$CI_USER" "$CI_HOME/.ssh"
AUTH="$CI_HOME/.ssh/authorized_keys"

SUDOERS=/etc/sudoers.d/gbsqchp-ci
TMP_SUDO="$(mktemp)"
cat >"$TMP_SUDO" <<EOF
# Written by deploy/setup-ci.sh – the GitHub Actions account may run the site deployer, nothing else.
Defaults:${CI_USER} !requiretty
${CI_USER} ALL=(root) NOPASSWD: /usr/local/sbin/gbsqchp-deploy --ref *
EOF
visudo -cqf "$TMP_SUDO" || die "sudoers check failed"
install -m 440 -o root -g root "$TMP_SUDO" "$SUDOERS"; rm -f "$TMP_SUDO"
ok "sudo rule ${SUDOERS}"

# -----------------------------------------------------------------------------------------------------
step "Deploy key"
if [[ $NEW_KEY == 0 && -s "$AUTH" ]] && grep -q 'gbsqchp-deploy-ssh' "$AUTH"; then
  ok "key already installed (run with --new-key to replace it)"
  KEY_CREATED=0
else
  rm -f "$KEY_FILE" "$KEY_FILE.pub"
  ssh-keygen -q -t ed25519 -N "" -C "github-actions-deploy@gbsqchp.com" -f "$KEY_FILE"
  chmod 600 "$KEY_FILE"
  printf 'restrict,command="/usr/local/sbin/gbsqchp-deploy-ssh" %s\n' "$(cat "$KEY_FILE.pub")" >"$AUTH"
  chown "$CI_USER:$CI_USER" "$AUTH"; chmod 600 "$AUTH"
  rm -f "$KEY_FILE.pub"
  ok "new key installed; private half saved to ${KEY_FILE} (root only) for you to copy into GitHub"
  KEY_CREATED=1
fi

# -----------------------------------------------------------------------------------------------------
step "Checking SSH access for GitHub"
SSHD="$(sshd -T 2>/dev/null || true)"
SSH_PORT="$(awk '$1=="port"{print $2; exit}' <<<"$SSHD")"; SSH_PORT="${SSH_PORT:-22}"
ok "SSH port ${SSH_PORT}"
ALLOW_USERS="$(awk '$1=="allowusers"{ $1=""; print }' <<<"$SSHD" | xargs || true)"
ALLOW_GROUPS="$(awk '$1=="allowgroups"{ $1=""; print }' <<<"$SSHD" | xargs || true)"
if [[ -n "$ALLOW_USERS" ]] && ! grep -qw "$CI_USER" <<<"$ALLOW_USERS"; then
  warn "sshd only allows these users: ${ALLOW_USERS}. Add ${CI_USER} to AllowUsers in /etc/ssh/sshd_config, then: sudo systemctl reload ssh"
fi
[[ -n "$ALLOW_GROUPS" ]] && warn "sshd has AllowGroups (${ALLOW_GROUPS}) – make sure ${CI_USER} is in one of them"
if command -v ufw >/dev/null && ufw status 2>/dev/null | grep -q 'Status: active'; then
  if ufw status | grep -E "^(${SSH_PORT}|${SSH_PORT}/tcp|OpenSSH)\b" | grep -q 'Anywhere'; then
    ok "firewall allows SSH from anywhere (GitHub's servers can connect)"
  else
    warn "the firewall may limit SSH (port ${SSH_PORT}) to certain IPs; GitHub connects from changing addresses, so deploys could be blocked"
  fi
fi

# -----------------------------------------------------------------------------------------------------
step "First release deploy (switches to zero-downtime release folders)"
/usr/local/sbin/gbsqchp-deploy

# -----------------------------------------------------------------------------------------------------
PUBLIC_IP="$(curl -4 -fsS --max-time 8 https://api.ipify.org 2>/dev/null || hostname -I | awk '{print $1}')"
HOSTKEY="$(cut -d' ' -f1,2 /etc/ssh/ssh_host_ed25519_key.pub)"
if [[ "$SSH_PORT" == 22 ]]; then KH="${PUBLIC_IP} ${HOSTKEY}"; else KH="[${PUBLIC_IP}]:${SSH_PORT} ${HOSTKEY}"; fi

printf '\n%s================  Automatic deploys: last steps  ================%s\n' "$c_ok" "$c_off"
cat <<EOF

${c_bold}1. Send this to Claude${c_off} (public information – safe to share):

   DEPLOY_HOST=${PUBLIC_IP}
   DEPLOY_PORT=${SSH_PORT}
   DEPLOY_KNOWN_HOSTS=${KH}

EOF
if [[ $KEY_CREATED == 1 ]]; then
cat <<EOF
${c_bold}2. Add the private key to GitHub yourself${c_off} (do NOT paste it into chat or anywhere else):
   a) Show it:   sudo cat ${KEY_FILE}
   b) GitHub → rubeshgithub/gbsqchp-new → Settings → Secrets and variables → Actions → New repository secret
      Name: DEPLOY_SSH_KEY     Value: everything from -----BEGIN to END----- (both lines included)
   c) Then delete the server copy:   sudo shred -u ${KEY_FILE}

EOF
fi
