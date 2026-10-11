import React from 'react'

import { rel } from '@/lib/data'
import type { Author, Media } from '@/payload-types'

export function AuthorBox({ author }: { author: Author | null }) {
  if (!author) return null
  const photo = rel<Media>(author.photo)
  return (
    <aside className="author-box block" aria-label="About the author">
      {photo?.url && <img src={photo.url} alt={photo.alt || author.name} width={64} height={64} />}
      <div>
        <strong>{author.name}</strong>
        {author.jobTitle && <span> · {author.jobTitle}</span>}
        {author.bio && <p>{author.bio}</p>}
        {author.linkedin && (
          <p>
            <a href={author.linkedin} rel="noopener noreferrer" target="_blank">
              LinkedIn profile
            </a>
          </p>
        )}
      </div>
    </aside>
  )
}
