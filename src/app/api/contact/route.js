import { Resend } from 'resend'
import { render } from '@react-email/components'
import ContactEmail from '../../emails/ContactEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json()

        if (!name || !email || !message) {
            return Response.json(
                { error: 'Name, email and message are required' },
                { status: 400 }
            )
        }

        // render React component to HTML string
        const html = await render(
            ContactEmail({ name, email, subject, message })
        )

        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'ahmadkhalid236997@gmail.com',
            subject: `Portfolio: ${subject || 'New message from ' + name}`,
            html
        })

        return Response.json({ success: true })

    } catch (error) {
        console.error(error)
        return Response.json(
            { error: 'Failed to send message' },
            { status: 500 }
        )
    }
}