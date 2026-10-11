'use client'

import React, { useState } from 'react'

type Props = {
  title: string
  blurb?: string | null
  source?: string
}

export function NewsletterForm({ title, blurb, source }: Props) {
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('nurse')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setMessage('')
    const form = new FormData(e.currentTarget)
    const honeypot = String(form.get('website') || '')

    try {
      const res = await fetch('/api/subscribers/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          profession,
          country: 'QA',
          source: source || (typeof window !== 'undefined' ? window.location.pathname : ''),
          consent: true,
          website: honeypot,
        }),
      })
      const body = (await res.json().catch(() => null)) as { ok?: boolean; duplicate?: boolean; error?: string } | null
      if (res.ok && body?.ok) {
        setStatus('done')
        setMessage(
          body.duplicate
            ? 'That address is already on the list.'
            : 'You are on the list. We only write when a rule, fee or timeline changes.',
        )
        setEmail('')
        return
      }
      setStatus('error')
      setMessage(body?.error === 'invalid-email' ? 'Please enter a valid email address.' : 'Something went wrong. Please try again.')
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <section className="newsletter" id="newsletter">
      <h2>{title}</h2>
      {blurb && <p>{blurb}</p>}
      {status === 'done' ? (
        <p role="status">{message}</p>
      ) : (
        <form className="form-inline" onSubmit={onSubmit}>
          <div>
            <label htmlFor="nl-email">Email</label>
            <input
              id="nl-email"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="nl-profession">I am a</label>
            <select id="nl-profession" name="profession" value={profession} onChange={(e) => setProfession(e.target.value)}>
              <option value="physician">Physician</option>
              <option value="dentist">Dentist</option>
              <option value="nurse">Nurse / midwife</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="allied-health">Allied health professional</option>
              <option value="employer">Employer / HR / PRO</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
            <label htmlFor="nl-website">Website</label>
            <input id="nl-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Get alerts'}
          </button>
          {status === 'error' && (
            <p className="form-note" role="alert" style={{ gridColumn: '1 / -1', color: '#fecaca' }}>
              {message}
            </p>
          )}
        </form>
      )}
    </section>
  )
}
