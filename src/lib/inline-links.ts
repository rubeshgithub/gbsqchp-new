/**
 * FAQ answers are plain text fields that may contain Markdown links: `[licensing guide](/qatar/licensing)`.
 * `parseInlineLinks` splits such text into text and link segments so components can render real links without
 * dangerouslySetInnerHTML; `stripInlineLinks` keeps only the link text (for JSON-LD and other plain-text uses).
 * Only site paths ("/…") and http(s) URLs become links; anything else stays as the original text.
 */

export type InlineSegment = { type: 'text'; text: string } | { type: 'link'; text: string; href: string; external: boolean }

const LINK = /\[([^\]\n]+)\]\(([^)\s]+)\)/g

function linkTarget(href: string): { href: string; external: boolean } | null {
  if (href.startsWith('/') && !href.startsWith('//')) return { href, external: false }
  if (/^https?:\/\//i.test(href)) return { href, external: true }
  return null
}

export function parseInlineLinks(input: string): InlineSegment[] {
  const segments: InlineSegment[] = []
  let last = 0
  for (const match of input.matchAll(LINK)) {
    const [whole, text, rawHref] = match
    const target = linkTarget(rawHref)
    if (!target) continue
    const start = match.index ?? 0
    if (start > last) segments.push({ type: 'text', text: input.slice(last, start) })
    segments.push({ type: 'link', text, ...target })
    last = start + whole.length
  }
  if (last < input.length) segments.push({ type: 'text', text: input.slice(last) })
  return segments
}

export function stripInlineLinks(input: string): string {
  return parseInlineLinks(input)
    .map((s) => s.text)
    .join('')
}
