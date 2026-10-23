/**
 * HTTP 410 for URL families left over from the domain's previous website (/blog, /guide, /news).
 * Google crawled them before this site launched; a 410 tells it they are gone for good, so they drop out of the
 * Search Console "Soft 404" and "Blocked by robots.txt" reports instead of lingering as errors.
 */
const BODY = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>Page removed</title></head>
<body style="font-family:system-ui,sans-serif;max-width:40rem;margin:4rem auto;padding:0 1rem;line-height:1.6">
<h1>This page no longer exists</h1>
<p>It belonged to an earlier website on this domain and has been removed permanently.</p>
<p><a href="/">Go to the Primary Source Verification Guide</a></p>
</body></html>`

export function gone(): Response {
  return new Response(BODY, {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
