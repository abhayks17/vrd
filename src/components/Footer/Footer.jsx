import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-grid">
                {/* Brand */}
                <div className="footer-brand">
                    <div className="logo-icon">VRD</div>
                    <strong style={{ color: '#fff', fontFamily: 'var(--font-primary)', fontSize: '1.1rem' }}>VRD Groups</strong>
                    <p>
                        A premier infrastructure and engineering group committed to delivering
                        innovative, high-quality solutions across India.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/bids-tender">Bids & Tender</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="footer-heading">Our Services</h4>
                    <ul className="footer-links">
                        <li><Link to="/services/civil-construction">Civil Construction</Link></li>
                        <li><Link to="/services/road-infrastructure">Road Infrastructure</Link></li>
                        <li><Link to="/services/water-supply">Water Supply</Link></li>
                        <li><Link to="/services/electrical-works">Electrical Works</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="footer-heading">Contact Info</h4>
                    <div className="footer-contact-item">
                        <span className="icon">📍</span>
                        <span>VRD Groups HQ, Business District, Hyderabad – 500001</span>
                    </div>
                    <div className="footer-contact-item">
                        <span className="icon">📞</span>
                        <span>+91 40 1234 5678</span>
                    </div>
                    <div className="footer-contact-item">
                        <span className="icon">✉️</span>
                        <span>info@vrdgroups.com</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {year} VRD Groups. All rights reserved.</p>
                <p>Designed with precision &amp; excellence.</p>
            </div>
        </footer>
    )
}
