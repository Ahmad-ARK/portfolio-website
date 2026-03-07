export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>I'm always happy to chat about:</h3>
                    <ul>
                        <li>Digital Design</li>
                        <li>UX/UI</li>
                        <li>Webflow</li>
                        <li>Strategy</li>
                        <li>Digital Marketing</li>
                        <li>Education/Upskilling</li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Get in touch</h3>
                    <p><a href="mailto:ahmadkhalid85@outlook.com">ahmadkhalid85@outlook.com</a></p>
                    <h3>Connect</h3>
                    <p><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Designed and developed by Ahmad Khalid<br />© 2024</p>
                <p>Powered by MERN stack</p>
            </div>
        </footer>
    )
}