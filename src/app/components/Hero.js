'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLoader } from '../context/LoaderContext'

export default function Hero() {
    const headingRef = useRef(null)
    const { loaderDone } = useLoader()

    useEffect(() => {
        // wait until loader is done
        if (!loaderDone) return

        const heading = headingRef.current
        if (!heading) return

        const text = heading.innerText
        heading.innerHTML = ''

        text.split('').forEach((char, i) => {
            const span = document.createElement('span')
            span.textContent = char === ' ' ? '\u00A0' : char
            span.className = 'split-char'
            span.style.animationDelay = `${i * 30}ms`
            heading.appendChild(span)
        })
    }, [loaderDone]) // re-runs when loaderDone changes to true

    return (
        <div className="section">
            <div className="container heroContainer">
                <div className="heroText">
                    <h1 className="heroHeading" ref={headingRef}>
                        Hi, I am Ahmad. I develop software solutions.
                    </h1>
                    <p className="bodyText heroParagraph">
                        I use my web-development and UI/UX skills to build
                        profitable websites in a systematic way.
                    </p>
                    <Link href="/contact" className="button-cta">
                        <p className="buttonText">Contact me</p>
                        <div className="forwardarrow">
                            <img src="/images/chevron_right.png" alt="" />
                        </div>
                    </Link>
                </div>

                <div className="heroImage">
                    {/* curtain reveal also waits for loader */}
                    <div className={`heroImageReveal ${loaderDone ? 'heroImageAnimate' : ''}`}>
                        <Image
                            src="/images/Hero Image.jpg"
                            alt="Ahmad Khalid"
                            width={400}
                            height={550}
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}