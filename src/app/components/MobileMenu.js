'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'


function ArrowIcon({ color = 'currentColor' }) {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
    )
}

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    // prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const cards = [
        {
            label: 'Work',
            bg: 'hsl(0, 0%, 96%)',
            links: [
                { text: 'Expertise', href: '/#expertise' },
                { text: 'Portfolio', href: '/#portfolio' },
                { text: 'Process', href: '/#process' },
            ]
        },
        {
            label: 'Me',
            bg: 'hsl(0, 0%, 10%)',
            textColor: '#fff',
            links: [
                { text: 'About', href: '/about' },
                { text: 'Let\'s talk', href: '/contact' },
            ]
        },
    ]

    return (
        <>
            {/* Hamburger button — only visible on mobile */}
            <button
                className={`hamburger ${isOpen ? 'hamburgerOpen' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className="hamburgerLine" />
                <span className="hamburgerLine" />
            </button>

            {/* Overlay */}
            <div
                className={`menuOverlay ${isOpen ? 'menuOverlayVisible' : ''}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <div className={`mobileMenu ${isOpen ? 'mobileMenuOpen' : ''}`}>
                {/* header row */}
                <div className="mobileMenuHeader">
                    <span className="mobileMenuLogo">Ahmad</span>
                    <button
                        className="mobileMenuClose"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                {/* cards */}
                <div className="mobileMenuCards">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`menuCard ${isOpen ? 'menuCardVisible' : ''}`}
                            style={{
                                backgroundColor: card.bg,
                                color: card.textColor || '#000',
                                animationDelay: `${i * 100 + 200}ms`
                            }}
                        >
                            <p className="menuCardLabel" style={{ color: card.textColor || '#000' }}>
                                {card.label}
                            </p>
                            <div className="menuCardLinks">
                                {card.links.map((link, j) => (
                                    <Link
                                        key={j}
                                        href={link.href}
                                        className="menuCardLink"
                                        style={{ color: card.textColor || '#000' }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <ArrowIcon color={card.textColor || '#000'} />
                                        {link.text}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}