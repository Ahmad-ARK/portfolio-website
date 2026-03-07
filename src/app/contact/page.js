'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRef, useState } from 'react'
import { useSplitText } from '../hooks/useSplitText'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Contact() {
    const headingRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: ''
    })
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    useSplitText(headingRef, { charDelay: 28 })
    useFadeIn('.contactFade', { stagger: 80 })

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault() // stop page refresh
        setStatus('sending')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }
    }

    return (
        <main>
            <Navbar />
            <div className="section contactSection">
                <div className="container blockDisplay">
                    <div className="contactGrid">

                        {/* LEFT — Form */}
                        <form className="contactForm" onSubmit={handleSubmit}>
                            <div className="formRow">
                                <div className="formGroup contactFade fadeReady">
                                    <label className="formLabel">Your name</label>
                                    <input
                                        type="text"
                                        name='name'
                                        className="formInput"
                                        placeholder="Ahmad Khalid"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        suppressHydrationWarning
                                    />
                                </div>
                                <div className="formGroup contactFade fadeReady">
                                    <label className="formLabel">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="formInput"
                                        placeholder="ahmad@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        suppressHydrationWarning
                                    />
                                </div>
                            </div>

                            <div className="formGroup contactFade fadeReady">
                                <label className="formLabel">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="formInput"
                                    placeholder="Web development project"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    suppressHydrationWarning
                                />
                            </div>

                            <div className="formGroup contactFade fadeReady">
                                <label className="formLabel">Message</label>
                                <textarea
                                    name="message"
                                    className="formInput formTextarea"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* status messages */}
                            {status === 'success' && (
                                <p className="formStatus formSuccess">
                                    ✓ Message sent! I'll get back to you soon.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="formStatus formError">
                                    Something went wrong. Please try again.
                                </p>
                            )}

                            <button
                                type="submit"
                                className="button-cta formSubmit contactFade fadeReady"
                                disabled={status === 'sending'}
                            >
                                <p className="buttonText">
                                    {status === 'sending' ? 'Sending...' : 'Send message'}
                                </p>
                                <div className="forwardarrow">
                                    <img src="/images/chevron_right.png" alt="" />
                                </div>
                            </button>
                        </form>

                        {/* RIGHT — Text */}
                        <div className="contactInfo">
                            <p className="formLabel contactFade fadeReady" style={{ marginBottom: '16px' }}>
                                Get in touch
                            </p>
                            <h1 className="contactHeading" ref={headingRef}>
                                Let's work together.
                            </h1>
                            <p className="bodyText contactSubtext contactFade fadeReady">
                                Have a project in mind? Fill out the form
                                and I'll get back to you within 24 hours.
                            </p>
                            <div className="contactDetails contactFade fadeReady">
                                <p className="formLabel">Email</p>
                                <a href="mailto:ahmadkhalid85@outlook.com" className="contactLink">
                                    ahmadkhalid85@outlook.com
                                </a>
                                <p className="formLabel">Connect</p>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contactLink">
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}