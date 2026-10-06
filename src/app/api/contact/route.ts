import { Resend } from 'resend'
import { ContactEmailUnavailableError, createContactHandler } from '../../../lib/contact'

export const POST = createContactHandler(async (email) => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new ContactEmailUnavailableError()

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send(email)
  if (error) throw new Error('Email provider rejected the message')
})
