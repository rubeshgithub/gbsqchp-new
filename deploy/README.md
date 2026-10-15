# Deploying gbsqchp.com to the OVH server

Everything runs on the server from three scripts in this folder. They only add things for this site:
a private Node.js 22 in `/opt/gbsqchp-node`, the app in `/var/www/gbsqchp`, a `gbsqchp` systemd service on a
free local port, and a `gbsqchp.com` nginx (or Apache) site. Other sites and their Node version are not touched.

## 1. Connect from Windows (PowerShell)

```powershell
ssh -i "C:\Users\user\Downloads\ovh-pvt-key" ubuntu@SERVER_IP
```

- OVH's default user is `ubuntu` on Ubuntu images and `debian` on Debian; use `root` only if that is how you normally log in.
- If ssh says the key's permissions are too open:
  ```powershell
  icacls "C:\Users\user\Downloads\ovh-pvt-key" /inheritance:r
  icacls "C:\Users\user\Downloads\ovh-pvt-key" /grant:r "$($env:USERNAME):(R)"
  ```
- If the key is a PuTTY `.ppk` file, open it in PuTTYgen → Conversions → Export OpenSSH key, and use that file.

## 2. Allow the server in MongoDB Atlas

Atlas → Security → **Network Access** → Add IP Address → the server's public IP. (The setup script prints it and
stops with a clear message if Atlas refuses the connection.)

## 3. Install

```bash
curl -fsSL https://raw.githubusercontent.com/rubeshgithub/gbsqchp-new/main/deploy/setup-server.sh -o setup-gbsqchp.sh
sudo bash setup-gbsqchp.sh
```

It asks once for the `DATABASE_URL` (paste the same value as in `.env` on your PC; typing is hidden).
Takes about 5–10 minutes. Safe to run again at any time.

## 4. DNS, then HTTPS

At GoDaddy (DNS for gbsqchp.com): `A  @ → SERVER_IP` and `CNAME  www → gbsqchp.com`. Leave the email records
(MX, autodiscover, SPF, DMARC, `_domainkey`) as they are. Then on the server:

```bash
sudo bash /var/www/gbsqchp/deploy/enable-https.sh
```

## 5. Contact-form email (Amazon SES)

Edit the server's `.env` (`sudo nano /var/www/gbsqchp/.env` – after setup-ci it lives in `/var/www/gbsqchp-shared/`; the old path still works), fill in:

```
SMTP_HOST=email-smtp.ca-west-1.amazonaws.com
SMTP_USER=<SES SMTP username>
SMTP_PASS=<SES SMTP password>
```

then `sudo systemctl restart gbsqchp`.

## 6. Automatic deploys from GitHub (CI/CD)

One-time, on the server:

```bash
sudo bash /var/www/gbsqchp/deploy/setup-ci.sh
```

It installs the release deployer, creates a `gbsqchp-ci` account whose SSH key can only run
`deploy <commit> [--seed]` (no shell, no port forwarding, no other sudo), switches the site to release folders and
prints two things: the server's public SSH details (send to Claude – they go into the workflow file) and how to
add the private key as the `DEPLOY_SSH_KEY` repository secret on GitHub (do that yourself, then
`sudo shred -u /root/gbsqchp-ci-deploy-key`).

From then on, every push to `main` runs `.github/workflows/ci-deploy.yml`:

1. **Check** – `npm ci`, TypeScript and ESLint (also on pull requests).
2. **Deploy** – only if the check passed: GitHub connects as `gbsqchp-ci`, the server clones that exact commit into
   `/var/www/gbsqchp-releases/<time>-<sha>`, installs and builds it while the current release keeps serving, switches
   the `/var/www/gbsqchp` symlink, restarts (≈2 s) and checks the site answers. If the new release fails, the previous
   one is restored automatically and the GitHub run turns red.
3. **Verify** – GitHub fetches `/`, `/qatar/psv`, `/privacy` and `/sitemap.xml` on https://gbsqchp.com.

Deploys never overlap (one at a time). To re-run the content seed, use Actions → CI / Deploy → Run workflow → tick
"seed".

## Day-to-day

| Task | Command |
|---|---|
| Deploy | push to `main` (automatic), or on the server `sudo gbsqchp-deploy` |
| Deploy one exact commit | `sudo gbsqchp-deploy --ref <sha>` |
| Re-run the content seed | GitHub: Run workflow with "seed", or `sudo gbsqchp-deploy --seed` (overwrites edits to the seeded pages) |
| Roll back to the previous release | `sudo gbsqchp-deploy --rollback` |
| Status / restart | `sudo systemctl status gbsqchp` · `sudo systemctl restart gbsqchp` |
| Live log | `sudo journalctl -u gbsqchp -f` |
| Replace the deploy key | `sudo bash /var/www/gbsqchp/deploy/setup-ci.sh --new-key`, then update the GitHub secret |

Layout after setup-ci: `/var/www/gbsqchp` → live release, `/var/www/gbsqchp-releases/` (last 3 kept),
`/var/www/gbsqchp-shared/` (`.env` and `media/`, linked into every release). Edit settings in
`/var/www/gbsqchp-shared/.env`, then `sudo systemctl restart gbsqchp`.

The server and your PC use the same Atlas database, so admin users and content are shared. Uploaded images are
stored on whichever machine they were uploaded from (`media/` folder) — upload production images on the live
site's admin.
