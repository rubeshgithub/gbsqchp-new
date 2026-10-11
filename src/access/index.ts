import type { Access } from 'payload'

/** Anyone, including anonymous visitors. */
export const anyone: Access = () => true

/** Only logged-in admin users. */
export const authenticated: Access = ({ req: { user } }) => Boolean(user)

/** Logged-in users see everything; the public only sees published documents. */
export const publishedOrAuthenticated: Access = ({ req: { user } }) => {
  if (user) return true
  return {
    _status: {
      equals: 'published',
    },
  }
}
