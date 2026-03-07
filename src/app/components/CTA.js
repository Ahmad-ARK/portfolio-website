import Link from 'next/link'

export default function CTA() {
    return (
        <div className="section lastsection">
            <div className="container flexdisplay">
                <h2>Have a project in mind?<br />Feel free to share it.</h2>
                <Link href="/contact" className="button-cta-last" style={{ textDecoration: 'none' }}>
                    <div className="forwardarrowlast">
                        <p>Get in<br />touch</p>
                        <img src="/images/chevron_right.png" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}