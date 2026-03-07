import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Heading,
    Hr,
    Preview,
    Font
} from '@react-email/components'

export default function ContactEmail({ name, email, subject, message }) {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Outfit"
                    fallbackFontFamily="Helvetica"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/outfit/v11/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4G-EiAou6Y.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>New message from {name} — {subject}</Preview>
            <Body style={bodyStyle}>
                <Container style={containerStyle}>

                    {/* Header */}
                    <Section style={headerStyle}>
                        <Heading style={logoStyle}>Ahmad Khalid</Heading>
                        <Text style={taglineStyle}>Portfolio Contact Form</Text>
                    </Section>

                    {/* Main content */}
                    <Section style={contentStyle}>
                        <Heading style={h2Style}>New message received</Heading>
                        <Text style={mutedStyle}>
                            Someone reached out through your portfolio contact form.
                        </Text>

                        <Hr style={dividerStyle} />

                        {/* Sender details */}
                        <Section style={detailsBoxStyle}>
                            <table width="100%" cellPadding="0" cellSpacing="0">
                                <tr>
                                    <td style={labelCellStyle}>Name</td>
                                    <td style={valueCellStyle}>{name}</td>
                                </tr>
                                <tr>
                                    <td style={labelCellStyle}>Email</td>
                                    <td style={valueCellStyle}>
                                        <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={labelCellStyle}>Subject</td>
                                    <td style={valueCellStyle}>{subject || '—'}</td>
                                </tr>
                            </table>
                        </Section>

                        <Hr style={dividerStyle} />

                        {/* Message */}
                        <Text style={messageLabelStyle}>Message</Text>
                        <Section style={messageBoxStyle}>
                            <Text style={messageTextStyle}>{message}</Text>
                        </Section>

                        {/* Reply CTA */}
                        <Section style={{ textAlign: 'center', marginTop: '32px' }}>
                            <a href={`mailto:${email}`} style={buttonStyle}>
                                Reply to {name}
                            </a>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section style={footerStyle}>
                        <Text style={footerTextStyle}>
                            Ahmad Khalid — Developer & Designer
                        </Text>
                        <Text style={footerTextStyle}>
                            This email was sent from your portfolio contact form.
                        </Text>
                    </Section>

                </Container>
            </Body>
        </Html>
    )
}

// ── STYLES ──────────────────────────────────────────
// React Email uses inline styles — same as regular CSS
// but written as JS objects

const bodyStyle = {
    backgroundColor: '#f5f5f0',
    fontFamily: 'Outfit, Helvetica, sans-serif',
    margin: '0',
    padding: '40px 0',
}

const containerStyle = {
    maxWidth: '560px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #e8e8e4',
}

const headerStyle = {
    backgroundColor: '#0a0a0a',
    padding: '32px 40px',
}

const logoStyle = {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '400',
    margin: '0',
    letterSpacing: '0.02em',
}

const taglineStyle = {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '13px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    margin: '6px 0 0',
}

const contentStyle = {
    padding: '40px',
}

const h2Style = {
    fontSize: '24px',
    fontWeight: '400',
    color: '#0a0a0a',
    margin: '0 0 8px',
}

const mutedStyle = {
    color: '#999',
    fontSize: '15px',
    margin: '0',
}

const dividerStyle = {
    borderColor: '#e8e8e4',
    margin: '24px 0',
}

const detailsBoxStyle = {
    backgroundColor: '#f5f5f0',
    borderRadius: '8px',
    padding: '20px 24px',
}

const labelCellStyle = {
    fontSize: '12px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#999',
    paddingBottom: '12px',
    width: '80px',
    verticalAlign: 'top',
}

const valueCellStyle = {
    fontSize: '15px',
    color: '#0a0a0a',
    paddingBottom: '12px',
    fontWeight: '400',
}

const linkStyle = {
    color: '#0a0a0a',
    textDecoration: 'underline',
}

const messageLabelStyle = {
    fontSize: '12px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#999',
    margin: '0 0 12px',
}

const messageBoxStyle = {
    backgroundColor: '#f5f5f0',
    borderRadius: '8px',
    padding: '20px 24px',
    borderLeft: '3px solid #0a0a0a',
}

const messageTextStyle = {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#333',
    margin: '0',
    whiteSpace: 'pre-wrap',
}

const buttonStyle = {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    padding: '14px 32px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
    display: 'inline-block',
}

const footerStyle = {
    backgroundColor: '#f5f5f0',
    padding: '24px 40px',
    borderTop: '1px solid #e8e8e4',
}

const footerTextStyle = {
    fontSize: '13px',
    color: '#999',
    margin: '0 0 4px',
    textAlign: 'center',
}