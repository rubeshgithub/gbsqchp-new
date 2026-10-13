import Script from 'next/script'
import React from 'react'

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/** Loads the Crisp chat bubble on public pages when a Crisp website ID is set in Site settings. */
export function CrispChat({ websiteId }: { websiteId?: string | null }) {
  const id = websiteId?.trim()
  if (!id || !UUID_RE.test(id)) return null
  return (
    <Script id="crisp-chat" strategy="lazyOnload">
      {`window.$crisp=[];window.CRISP_WEBSITE_ID="${id}";(function(){var d=document,s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
    </Script>
  )
}
