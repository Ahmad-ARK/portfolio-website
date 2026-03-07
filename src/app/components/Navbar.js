'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link href="/" className="logo">
                    <img src="/slider-images/code.png" alt="logo" width={50} height={50} />
                    Ahmad
                </Link>

                {/* desktop links */}
                <ul className="navlinks">
                    <li><Link href="/#expertise" className="linkText">Expertise</Link></li>
                    <li><Link href="/#portfolio" className="linkText">Portfolio</Link></li>
                    <li><Link href="/#process" className="linkText">Process</Link></li>
                    <li><Link href="/about" className="linkText">About</Link></li>
                    <li><Link href="/contact" className="linkText">Let's talk</Link></li>
                </ul>

                {/* mobile menu — only renders on small screens via CSS */}
                <MobileMenu />
            </div>
        </nav>
    )
}