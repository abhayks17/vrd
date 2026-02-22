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
        <strong style={{color:'#fff',fontFamily:'var(--font-primary)',fontSize:'1.1rem'}}>
          VRD Groups
        </strong>
        <p>
          VRD Groups provides premium janitorial, logistics, material supply,
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
          <li><Link to="/services/janitorial">Janitorial Services</Link></li>
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
          <span>Markham, Ontario, Canada</span>
        </div>

        <div className="footer-contact-item">
          <span className="icon">📞</span>
          <span>+1 (XXX) XXX-XXXX</span>
        </div>

        <div className="footer-contact-item">
          <span className="icon">✉️</span>
          <span>info@vrdgroups.ca</span>
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
