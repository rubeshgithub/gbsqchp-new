#!/usr/bin/env python3
"""
Export Google Search Console data for gbsqchp.com to CSV files.

Runs in GitHub Actions (.github/workflows/gsc-export.yml) with a read-only ("Restricted") service account whose JSON
key is the GSC_SERVICE_ACCOUNT_JSON secret. The repository is public, so this script never prints data rows – only
counts – and the workflow encrypts the output folder before uploading it as an artifact.

Usage: gsc-export.py <out_dir> [days]
"""
import csv
import json
import os
import sys
import time
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import date, timedelta

import requests
from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

SITE_HOST = "gbsqchp.com"
CANDIDATE_PROPERTIES = [f"sc-domain:{SITE_HOST}", f"https://{SITE_HOST}/"]
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
API = "https://www.googleapis.com/webmasters/v3"
INSPECT_API = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
ROW_LIMIT = 25000


def log(msg: str) -> None:
    print(f"[gsc-export] {msg}", flush=True)


def session() -> AuthorizedSession:
    raw = os.environ.get("GSC_SERVICE_ACCOUNT_JSON", "").strip()
    if not raw:
        sys.exit("GSC_SERVICE_ACCOUNT_JSON is not set")
    creds = service_account.Credentials.from_service_account_info(json.loads(raw), scopes=SCOPES)
    log(f"service account: {creds.service_account_email}")
    return AuthorizedSession(creds)


def pick_property(s: AuthorizedSession) -> str:
    r = s.get(f"{API}/sites")
    r.raise_for_status()
    sites = {e["siteUrl"]: e.get("permissionLevel") for e in r.json().get("siteEntry", [])}
    log(f"properties visible to the service account: {len(sites)}")
    for p in CANDIDATE_PROPERTIES:
        if p in sites:
            log(f"using property {p} (permission {sites[p]})")
            return p
    sys.exit(
        "The service account cannot see the gbsqchp.com property. In Search Console add its email under "
        "Settings → Users and permissions (Restricted is enough)."
    )


def query_all(s: AuthorizedSession, prop: str, body: dict) -> list[dict]:
    url = f"{API}/sites/{urllib.parse.quote(prop, safe='')}/searchAnalytics/query"
    rows, start = [], 0
    while True:
        r = s.post(url, json={**body, "rowLimit": ROW_LIMIT, "startRow": start})
        r.raise_for_status()
        batch = r.json().get("rows", [])
        rows.extend(batch)
        if len(batch) < ROW_LIMIT:
            return rows
        start += ROW_LIMIT


def write_csv(path: str, dims: list[str], rows: list[dict]) -> None:
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([*dims, "clicks", "impressions", "ctr", "position"])
        for row in rows:
            w.writerow([*row.get("keys", []), row["clicks"], row["impressions"], round(row["ctr"], 4), round(row["position"], 2)])


def sitemap_urls() -> list[str]:
    try:
        r = requests.get(f"https://{SITE_HOST}/sitemap.xml", timeout=30, headers={"User-Agent": "gbsqchp-gsc-export"})
        r.raise_for_status()
        ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        return [loc.text.strip() for loc in ET.fromstring(r.content).findall("sm:url/sm:loc", ns) if loc.text]
    except Exception as e:  # noqa: BLE001 - report and carry on without inspection
        log(f"could not read the sitemap: {e}")
        return []


def main() -> None:
    out = sys.argv[1] if len(sys.argv) > 1 else "gsc-out"
    days = int(sys.argv[2]) if len(sys.argv) > 2 else 90
    os.makedirs(out, exist_ok=True)
    s = session()
    prop = pick_property(s)

    end = date.today()
    start = end - timedelta(days=days)
    base = {"startDate": start.isoformat(), "endDate": end.isoformat(), "dataState": "all"}
    summary: dict = {"property": prop, "startDate": base["startDate"], "endDate": base["endDate"], "exportedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "files": {}}

    reports = {
        "by-date": ["date"],
        "by-query": ["query"],
        "by-page": ["page"],
        "by-query-page": ["query", "page"],
        "by-country": ["country"],
        "by-device": ["device"],
        "by-page-date": ["page", "date"],
        "by-query-country": ["query", "country"],
    }
    for name, dims in reports.items():
        rows = query_all(s, prop, {**base, "dimensions": dims})
        write_csv(os.path.join(out, f"{name}.csv"), dims, rows)
        summary["files"][f"{name}.csv"] = len(rows)
        log(f"{name}: {len(rows)} rows")

    totals = query_all(s, prop, {**base})
    summary["totals"] = totals[0] if totals else {}
    log(f"totals: {'present' if totals else 'none yet'}")

    r = s.get(f"{API}/sites/{urllib.parse.quote(prop, safe='')}/sitemaps")
    sitemaps = r.json().get("sitemap", []) if r.ok else []
    with open(os.path.join(out, "sitemaps.json"), "w", encoding="utf-8") as f:
        json.dump(sitemaps if r.ok else {"error": r.status_code, "body": r.text[:500]}, f, indent=2)
    log(f"sitemaps: {len(sitemaps)} (HTTP {r.status_code})")

    urls = sitemap_urls()
    inspected = []
    for u in urls:
        ir = s.post(INSPECT_API, json={"inspectionUrl": u, "siteUrl": prop, "languageCode": "en-US"})
        if not ir.ok:
            inspected.append({"url": u, "error": ir.status_code, "message": ir.text[:300]})
            if ir.status_code in (403, 429):
                log(f"URL inspection stopped: HTTP {ir.status_code}")
                break
            continue
        res = ir.json().get("inspectionResult", {}).get("indexStatusResult", {})
        inspected.append({
            "url": u,
            "verdict": res.get("verdict"),
            "coverageState": res.get("coverageState"),
            "indexingState": res.get("indexingState"),
            "lastCrawlTime": res.get("lastCrawlTime"),
            "googleCanonical": res.get("googleCanonical"),
            "userCanonical": res.get("userCanonical"),
            "pageFetchState": res.get("pageFetchState"),
            "robotsTxtState": res.get("robotsTxtState"),
        })
        time.sleep(0.5)
    with open(os.path.join(out, "url-inspection.json"), "w", encoding="utf-8") as f:
        json.dump(inspected, f, indent=2)
    summary["urlInspection"] = {"sitemapUrls": len(urls), "inspected": sum(1 for i in inspected if "verdict" in i)}
    log(f"url inspection: {summary['urlInspection']}")

    with open(os.path.join(out, "summary.json"), "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)
    log("done")


if __name__ == "__main__":
    main()
