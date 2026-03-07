'use client'

import Link from 'next/link'

const projects = [
    {
        number: '01',
        title: 'Project Title One',
        contribution: 'Design & Development',
        description: 'A brief description of this project and what problem it solves for the client.',
        bg: 'linear-gradient(180deg, hsl(210, 100%, 80%), hsl(40, 100%, 80%))',
    },
    {
        number: '02',
        title: 'Project Title Two',
        contribution: 'UI/UX Design',
        description: 'A brief description of this project and what problem it solves for the client.',
        bg: 'hsl(252, 51%, 67%)',
    },
    {
        number: '03',
        title: 'Project Title Three',
        contribution: 'Full Stack Development',
        description: 'A brief description of this project and what problem it solves for the client.',
        bg: 'linear-gradient(135deg, hsl(271, 100%, 80%), hsl(216, 100%, 79%))',
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
                        </div>

                        <div className="stackCardBody">
                            <div>
                                <p className="projectContribution">{project.contribution}</p>
                                <h3 className="stackCardTitle">{project.title}</h3>
                                <p className="bodyText">{project.description}</p>
                            </div>

                            <Link href="#" className="button-cta" style={{ textDecoration: 'none' }}>
                                <p className="smallButtonText">View project</p>
                                <div className="forwardarrow smallforwardarrow">
                                    <img src="/images/chevron_right.png" alt="View project" />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}

                {/* THE FIX: Invisible runway to keep the final card sticky */}
                <div className="scrollRunway"></div>
            </div>
        </div>
    )
}