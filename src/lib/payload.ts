import config from '@payload-config'
import { getPayload } from 'payload'

/** Shared Payload Local API client (cached by Payload across calls). */
export const getPayloadClient = () => getPayload({ config })
