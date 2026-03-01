import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/LOGO.png" alt="VRD Groups Logo" className="logo-img" />
          </Link>
          <p>
            VRD Groups provides premium Property Management, logistics, material supply,
            and warehousing solutions across Ontario & Manitoba.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/bids-tender">Bids & Tenders</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/sanitory">Property Management Services</Link></li>
            <li><Link to="/services/delivery">Dedicated Delivery</Link></li>
            <li><Link to="/services/material">Material Supply</Link></li>
            <li><Link to="/services/warehousing">Warehousing</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer-heading">Contact Info</h4>

          <div className="footer-contact-item">
            <span className="icon">📍</span>
            <span>Toronto, Ontario, Canada</span>
          </div>

          <div className="footer-contact-item">
            <span className="icon">📞</span>
            <span>Office: 613-434-4321 Ext # 3</span>
          </div>

          <div className="footer-contact-item">
            <span className="icon">📱</span>
            <span>Cell: 431-388-6655 / 431-998-6655</span>
          </div>

          <div className="footer-contact-item">
            <span className="icon">✉️</span>
            <span>dibin@vrdgroups.com</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} VRD Groups. All rights reserved.</p>
        <p>Reliable. Professional. Trusted.</p>
      </div>
    </footer>
  )
}
