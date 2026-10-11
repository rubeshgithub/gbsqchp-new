import { RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import React from 'react'

import type { Page } from '@/payload-types'

export function RichTextBlock({ content }: { content: Page['content'] }) {
  if (!content) return null
  return <RichText data={content as unknown as SerializedEditorState} className="article-body" />
}
