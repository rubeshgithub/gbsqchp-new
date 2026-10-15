#!/bin/sh
# =====================================================================================================
#  Forced command for the GitHub Actions deploy key (installed as /usr/local/sbin/gbsqchp-deploy-ssh).
#  Whatever the SSH client asks to run, only this is accepted:
#       deploy <commit-sha> [--seed]
#  Anything else is refused, so the key cannot open a shell or run other commands on the server.
# =====================================================================================================
set -eu
set -f                                   # no glob expansion of the client's words
# shellcheck disable=SC2086              # word splitting of the requested command is intended
set -- ${SSH_ORIGINAL_COMMAND:-}

refuse() { echo "refused: only 'deploy <commit-sha> [--seed]' is allowed" >&2; exit 2; }

[ "${1:-}" = "deploy" ] || refuse
sha="${2:-}"
case "$sha" in "" | *[!0-9a-f]*) refuse ;; esac
[ "${#sha}" -ge 7 ] && [ "${#sha}" -le 40 ] || refuse

if [ -z "${3:-}" ]; then
  [ -z "${4:-}" ] || refuse
  exec sudo -n /usr/local/sbin/gbsqchp-deploy --ref "$sha"
elif [ "$3" = "--seed" ] && [ -z "${4:-}" ]; then
  exec sudo -n /usr/local/sbin/gbsqchp-deploy --ref "$sha" --seed
else
  refuse
fi
