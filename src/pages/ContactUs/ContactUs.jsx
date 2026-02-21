import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ContactUs.css'

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    const handleSubmit = e => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="contact-page">
            <div className="page-hero">
                <div className="breadcrumb"><Link to="/">Home</Link> &rsaquo; Contact Us</div>
                <h1>Contact Us</h1>
                <p>Reach out to VRD Groups — our team is ready to discuss your project and requirements.</p>
            </div>

            <div className="contact-layout">
                {/* Info Panel */}
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>
                        Have a project in mind? Looking to bid or partner with us? Our dedicated team responds
                        to all inquiries within 24 business hours.
                    </p>

                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="ci-icon">📍</div>
                            <div className="ci-info">
                                <h4>Head Office</h4>
                                <p>VRD Groups HQ, Business District,<br />Hyderabad – 500001, Telangana</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="ci-icon">📞</div>
                            <div className="ci-info">
                                <h4>Phone</h4>
                                <a href="tel:+914012345678">+91 40 1234 5678</a><br />
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="ci-icon">✉️</div>
                            <div className="ci-info">
                                <h4>Email</h4>
                                <a href="mailto:info@vrdgroups.com">info@vrdgroups.com</a><br />
                                <a href="mailto:tenders@vrdgroups.com">tenders@vrdgroups.com</a>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="ci-icon">🌐</div>
                            <div className="ci-info">
                                <h4>Regional Offices</h4>
                                <p>Mumbai • Chennai • Bangalore • Delhi • Pune</p>
                            </div>
                        </div>
                    </div>

                    <div className="office-hours">
                        <h4>Office Hours</h4>
                        <div className="hours-grid">
                            <div className="hours-row"><span>Monday – Friday</span><span>9:00 AM – 6:00 PM</span></div>
                            <div className="hours-row"><span>Saturday</span><span>9:00 AM – 2:00 PM</span></div>
                            <div className="hours-row"><span>Sunday</span><span>Closed</span></div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="contact-form-card">
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                            <h2 style={{ color: 'var(--primary-dark)', marginBottom: '0.75rem' }}>Message Sent!</h2>
                            <p style={{ color: 'var(--gray-600)', marginBottom: '1.75rem' }}>
                                Thank you for reaching out. Our team will contact you within 24 hours.
                            </p>
                            <button onClick={() => setSubmitted(false)} className="form-submit-btn" style={{ width: 'auto', padding: '0.75rem 2rem' }}>
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2>Send Us a Message</h2>
                            <p>Fill in the form and we'll get back to you promptly.</p>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number *</label>
                                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXXXXXXX" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Service of Interest</label>
                                    <select name="service" value={form.service} onChange={handleChange}>
                                        <option value="">Select a service...</option>
                                        <option>Civil Construction</option>
                                        <option>Road Infrastructure</option>
                                        <option>Water Supply Systems</option>
                                        <option>Electrical Works</option>
                                        <option>Irrigation Projects</option>
                                        <option>Building Works</option>
                                        <option>Bids & Tenders</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Describe your project or inquiry..." required />
                                </div>
                                <button type="submit" className="form-submit-btn">Send Message →</button>
                            </form>
                        </>
                    )}
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-placeholder">
                <div className="map-box">
                    <span>🗺️</span>
                    <p>Google Maps – VRD Groups, Hyderabad</p>
                </div>
            </div>
        </div>
    )
}
