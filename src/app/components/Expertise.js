export default function Expertise() {
    const skills = [
        {
            title: 'Strategic design',
            description: 'I help teams align on primary business challenges and focus design efforts to solve them. I design to drive businesses forward.'
        },
        {
            title: 'UI/UX design',
            description: 'UX - finding creative and practical solutions to solve the users\' problems. I help people seamlessly experience digital design. UI - creating visually appealing digital products.'
        },
        {
            title: 'Website development — MERN',
            description: 'Using the latest technology, I take websites to the next level by creating digital experiences that convince customers. I build websites that are beautiful in design, effortless in usability, and strong in performance.'
        },
        {
            title: 'Motion web design',
            description: 'To engage users and make product/service memorable. Motion design will allow your brand to appear contemporary and digitally ahead of your competitors.'
        },
    ]

    return (
        <div className="section" id="expertise">
            <div className="container blockDisplay">
                <h2 className="h2bottomPadding">My Expertise</h2>
                <div className="gridLayout">
                    {skills.map((skill, i) => (
                        <div key={i} className="gridElement">
                            <h3 className="h3bottomMargin">{skill.title}</h3>
                            <p className="bodyText">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}