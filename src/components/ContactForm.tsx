'use client'

import React, { useState } from 'react'

type Status = 'idle' | 'sending' | 'done' | 'error'

const TOPICS = [
  { value: 'psv', label: 'Primary Source Verification (DataFlow / QuadraBay / AVS)' },
  { value: 'licensing', label: 'DHP licensing / evaluation' },
  { value: 'exam', label: 'Qualifying exam (Prometric)' },
  { value: 'documents', label: 'My documents / a problem with my file' },
  { value: 'employer', label: 'Employer or recruiter enquiry' },
  { value: 'other', label: 'Something else' },
]

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formEl = e.currentTarget
    const form = new FormData(formEl)
    setStatus('sending')
    setMessage('')
    try {
      const res = await fetch('/api/contact-messages/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          phone: form.get('phone'),
          country: form.get('country'),
          topic: form.get('topic'),
          message: form.get('message'),
          website: form.get('website'),
          page: typeof window !== 'undefined' ? document.referrer || window.location.pathname : '',
        }),
      })
      const body = (await res.json().catch(() => null)) as { ok?: boolean; error?: string; fields?: string[] } | null
      if (res.ok && body?.ok) {
        setStatus('done')
        setMessage('Thank you – your message has reached us. We reply by email, so please check your inbox (and spam folder).')
        formEl.reset()
        return
      }
      setStatus('error')
      if (body?.error === 'invalid') {
        const f = body.fields || []
        setMessage(
          f.includes('email')
            ? 'Please enter a valid email address.'
            : f.includes('name')
              ? 'Please enter your name.'
              : 'Please write a little more about your question (at least a sentence).',
        )
      } else if (body?.error === 'rate-limited') {
        setMessage('Too many messages from this connection. Please wait a few minutes and try again.')
      } else {
        setMessage('Something went wrong. Please try again, or use the chat bubble.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again, or use the chat bubble.')
    }
  }

  if (status === 'done') {
    return (
      <div className="callout callout-info" role="status">
        {message}
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="field-row">
        <div>
          <label htmlFor="cf-name">Your name *</label>
          <input id="cf-name" name="name" required minLength={2} maxLength={120} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="cf-email">Email *</label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" />
        </div>
      </div>
      <div className="field-row">
        <div>
          <label htmlFor="cf-phone">Phone / WhatsApp (optional)</label>
          <input id="cf-phone" name="phone" maxLength={40} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="cf-country">Country where you trained (optional)</label>
          <input id="cf-country" name="country" maxLength={80} autoComplete="country-name" />
        </div>
      </div>
      <div>
        <label htmlFor="cf-topic">Topic</label>
        <select id="cf-topic" name="topic" defaultValue="psv">
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="cf-message">Your question *</label>
        <textarea id="cf-message" name="message" required minLength={10} maxLength={5000} rows={7} />
      </div>
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-note">
        Please do not send passport copies, certificates or other documents through this form. We use your details only to
        reply to you.
      </p>
      <div>
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
      </div>
      {status === 'error' && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
    </form>
  )
}
