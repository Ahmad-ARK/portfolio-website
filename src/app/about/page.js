'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { useSplitText } from '../hooks/useSplitText'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
    const headingRef = useRef(null)

    useSplitText(headingRef, { charDelay: 25 })
    useFadeIn('.aboutFade', { stagger: 100 })
    useFadeIn('.skillGroup', { stagger: 80 })
    useFadeIn('.valueCard', { stagger: 120 })

    return (
        <main>
            <Navbar />

            {/* ── INTRO ── */}
            <div className="section aboutSection">
                <div className="container blockDisplay">
                    <div className="aboutGrid">

                        {/* LEFT — Image with curtain reveal */}
                        <div className="aboutImageWrap aboutImageReveal">
                            <Image
                                src="/images/Hero Image.jpg"
                                alt="Ahmad Khalid"
                                width={480}
                                height={600}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                priority
                            />
                        </div>

                        {/* RIGHT — Text */}
                        <div className="aboutText">
                            <p className="formLabel aboutFade fadeReady" style={{ marginBottom: '16px' }}>
                                About me
                            </p>
                            <h1 className="aboutHeading" ref={headingRef}>
                                I design and build digital experiences.
                            </h1>
                            <p className="bodyText aboutBio aboutFade fadeReady">
                                I'm Ahmad Khalid, a full-stack developer and UI/UX designer
                                based in Pakistan. I combine design thinking with technical
                                execution to build websites that are beautiful, fast, and
                                purposeful.
                            </p>
                            <p className="bodyText aboutBio aboutFade fadeReady">
                                With expertise in the MERN stack and a strong eye for design,
                                I help businesses create digital products that drive real results.
                                Every project I take on is approached with strategy, care, and
                                attention to detail.
                            </p>
                            <div className="aboutFade fadeReady">
                                <Link href="/contact" className="button-cta" style={{ textDecoration: 'none' }}>
                                    <p className="buttonText">Work with me</p>
                                    <div className="forwardarrow">
                                        <img src="/images/chevron_right.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── SKILLS ── */}
            <div className="section">
                <div className="container blockDisplay">
                    <h2 className="h2bottomPadding aboutFade fadeReady">My skills</h2>
                    <div className="skillsGrid">
                        {[
                            { category: 'Frontend', skills: ['React', 'Next.js', 'HTML/CSS', 'JavaScript', 'Motion Design'] },
                            { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
                            { category: 'Design', skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research', 'Wireframing'] },
                            { category: 'Tools', skills: ['Git', 'VS Code', 'Webflow', 'Postman', 'Vercel'] },
                        ].map((group, i) => (
                            <div key={i} className="skillGroup fadeReady">
                                <p className="formLabel" style={{ marginBottom: '16px' }}>{group.category}</p>
                                <ul className="skillList">
                                    {group.skills.map((skill, j) => (
                                        <li key={j} className="skillItem">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── VALUES ── */}
            <div className="section" style={{ backgroundColor: '#0a0a0a' }}>
                <div className="container blockDisplay">
                    <h2 className="h2bottomPadding aboutFade fadeReady" style={{ color: '#fff' }}>
                        How I work
                    </h2>
                    <div className="valuesGrid">
                        {[
                            { title: 'Design with purpose', desc: 'Every design decision I make is tied to a business goal or user need. I don\'t design for decoration — I design to solve problems.' },
                            { title: 'Build with quality', desc: 'Clean code, fast performance, and attention to every detail. I build things that work beautifully and last.' },
                            { title: 'Communicate clearly', desc: 'I keep clients in the loop at every stage. No surprises — just clear progress, honest timelines, and open collaboration.' },
                        ].map((value, i) => (
                            <div key={i} className="valueCard fadeReady">
                                <h3 className="valueTitle">{value.title}</h3>
                                <p className="bodyText" style={{ color: 'hsl(0,0%,60%)' }}>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}