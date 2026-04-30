'use client'

import Link from 'next/link'

const projects = [
    {
        number: '01',
        title: 'Geo-Logger',
        contribution: 'Design & Development',
        description: 'A field logging software for Geotech engineers for hassle free data collection and automatic report generation.',
        bg: 'linear-gradient(180deg, hsl(210, 100%, 80%), hsl(40, 100%, 80%))',
        image: '/images/geo-logger.png',
        url: 'https://github.com/Ahmad-ARK/geo-logger'
    },
    {
        number: '02',
        title: 'AuraFarm',
        contribution: 'Design & Development',
        description: 'An Algorithm based early crop disease risk detection and migitaion and Machine Learning based disease detection via images.',
        bg: 'hsl(252, 51%, 67%)',
        image: '/images/aura.png',
        url: 'https://github.com/Ahmad-ARK/AuraFarm'
    },
    {
        number: '03',
        title: 'Frame',
        contribution: 'Full Stack Development | In Development',
        description: 'A fully automatic AI content generation paltform from voiceover and script generation to full video assembly',
        bg: 'linear-gradient(135deg, hsl(271, 100%, 80%), hsl(216, 100%, 79%))',
        image: '/images/frame.png',
        url: 'https://github.com/Ahmad-ARK/neetcode-submissions'
    },
]

export default function Projects() {
    return (
        <div className="section" id="portfolio">
            <div className="container blockDisplay">
                <h2 className="h2bottomPadding">My Projects</h2>
            </div>

            <div className="projectsStack">
                {projects.map((project, i) => (
                    <div
                        key={project.number}
                        className="stackCard"
                        style={{
                            top: `${80 + i * 60}px`, // Staggers the lock positions
                            zIndex: i + 1,
                        }}
                    >
                        <div className="stackCardImage" style={{ background: project.bg }}>
                            <span className="stackCardNumber">{project.number}</span>

                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: 'inherit',
                                    }}
                                />
                            )}
                        </div>

                        <div className="stackCardBody">
                            <div>
                                <p className="projectContribution">{project.contribution}</p>
                                <h3 className="stackCardTitle">{project.title}</h3>
                                <p className="bodyText">{project.description}</p>
                            </div>

                            <Link href={project.url} className="button-cta" style={{ textDecoration: 'none' }}>
                                <p className="smallButtonText">View project</p>
                                <div className="forwardarrow smallforwardarrow">
                                    <img src="/images/chevron_right.png" alt="View project" />
                                </div>
                            </Link>
                            <p className=''>The repo might not be public, feel free to request access if you are a recruiter</p>
                        </div>
                    </div>
                ))}

                {/* THE FIX: Invisible runway to keep the final card sticky */}
                <div className="scrollRunway"></div>
            </div>
        </div>
    )
}