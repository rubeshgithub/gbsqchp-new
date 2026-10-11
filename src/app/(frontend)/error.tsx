'use client'

import React from 'react'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="page container">
      <h1>Something went wrong</h1>
      <p className="lead">The page could not be rendered. If you are running locally, check that MongoDB is reachable at DATABASE_URL.</p>
      <p className="form-note">{error.digest ? `Reference: ${error.digest}` : null}</p>
      <button className="btn btn-primary" onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
