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

Edit `/var/www/gbsqchp/.env` (`sudo nano /var/www/gbsqchp/.env`), fill in:

```
SMTP_HOST=email-smtp.ca-west-1.amazonaws.com
SMTP_USER=<SES SMTP username>
SMTP_PASS=<SES SMTP password>
```

then `sudo systemctl restart gbsqchp`.

## Day-to-day

| Task | Command |
|---|---|
| Deploy the latest code from GitHub | `sudo bash /var/www/gbsqchp/deploy/update.sh` (site is offline for the 2–5 minute build) |
| …and reload the seeded guide content | `sudo bash /var/www/gbsqchp/deploy/update.sh --seed` (overwrites edits to the seeded pages) |
| Status / restart | `sudo systemctl status gbsqchp` · `sudo systemctl restart gbsqchp` |
| Live log | `sudo journalctl -u gbsqchp -f` |

The server and your PC use the same Atlas database, so admin users and content are shared. Uploaded images are
stored on whichever machine they were uploaded from (`media/` folder) — upload production images on the live
site's admin.
