import Script from 'next/script'
import React from 'react'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/** True when Site settings hold a valid Crisp website ID, i.e. the chat bubble is live on the site. */
export function isCrispEnabled(websiteId?: string | null) {
  const id = websiteId?.trim()
  return Boolean(id && UUID_RE.test(id))
}

/** Loads the Crisp chat bubble on public pages when a Crisp website ID is set in Site settings. */
export function CrispChat({ websiteId }: { websiteId?: string | null }) {
  const id = websiteId?.trim()
  if (!id || !isCrispEnabled(id)) return null
  return (
    <Script id="crisp-chat" strategy="lazyOnload">
      {`window.$crisp=[];window.CRISP_WEBSITE_ID="${id}";(function(){var d=document,s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
    </Script>
  )
}
