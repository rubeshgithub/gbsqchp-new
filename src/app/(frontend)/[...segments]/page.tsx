import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import React from 'react'

import { PageTemplate } from '@/components/PageTemplate'
import { getPageByPath, getSiteSettings } from '@/lib/data'
import { buildPageMetadata } from '@/lib/seo'

type Props = { params: Promise<{ segments: string[] }> }

function pathFromSegments(segments: string[]) {
  return `/${segments.map((s) => decodeURIComponent(s).toLowerCase()).join('/')}`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { segments } = await params
  const page = await getPageByPath(pathFromSegments(segments))
  if (!page) return {}
  const settings = await getSiteSettings()
  return buildPageMetadata(page, settings)
}

export default async function CmsPage({ params }: Props) {
  const { segments } = await params
  const { isEnabled: draft } = await draftMode()
  const path = pathFromSegments(segments)
  const [page, settings] = await Promise.all([getPageByPath(path, { draft }), getSiteSettings()])
  if (!page) notFound()
  return <PageTemplate page={page} settings={settings} />
}
