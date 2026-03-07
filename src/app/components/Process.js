export default function Process() {
    const steps = [
        {
            number: '01',
            title: 'Discovery',
            description: 'My first step is to identify the core challenges that stand in the way of business growth and success. It results in understanding the need and scope of the required solution.'
        },
        {
            number: '02',
            title: 'Strategy',
            description: 'Set up project goals. Research the personas, competitors, and best industry practices. Create the informational architecture. Plan the visual direction. Present the project roadmap.'
        },
        {
            number: '03',
            title: 'Wireframing',
            description: 'Design the low-fidelity wireframes which help with the approval of the content structure and the core functionality of a website or digital product.'
        },
        {
            number: '04',
            title: 'Visual Design',
            description: 'Creation of a visual look and feel for the website or digital product in the form of high-fidelity wireframes using AdobeXD or Figma.'
        },
        {
            number: '05',
            title: 'Development',
            description: 'MERN stack lets me finalize projects without sacrificing quality. I make sure that a website is optimised to follow modern web practices, such as speed, security, and reliability.'
        },
        {
            number: '06',
            title: 'Delivery',
            description: 'At the end of each project, I provide my clients with video tutorials explaining how to maintain the website, use CMS, improve SEO, and solve technical issues.'
        },
    ]

    return (
        <div className="section" id="process">
            <div className="container blockDisplay">
                <h2 className="h2bottomPadding aligncenterh2">My web development process</h2>
                <div className="processgrid">
                    {steps.map((step, i) => (
                        <div key={i} className="processElement">
                            <h3 className="processNumber">{step.number}</h3>
                            <h4>{step.title}</h4>
                            <p className="bodyText">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}