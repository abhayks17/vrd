import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactBlock() {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="cb-root container">
            <div className="reveal-up">
                <div className="section-tag">Get In Touch</div>
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">We'll respond within 24 hours.</p>
            </div>

            <div className="cb-layout">
                {/* Form */}
                <div className="cb-form-card reveal-up" style={{ transitionDelay: '0.15s' }}>
                    {sent ? (
                        <div className="cb-success">
                            <div className="cb-success-icon">✅</div>
                            <h3>Message Sent!</h3>
                            <p>We'll be in touch within 24 hours.</p>
                            <button className="btn btn-accent" onClick={() => setSent(false)}>Send Another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="cb-form">
                            <div className="cb-row">
                                <div className="cb-field">
                                    <label>Full Name</label>
                                    <input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                                </div>
                                <div className="cb-field">
                                    <label>Email Address</label>
                                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
                                </div>
                            </div>
                            <div className="cb-field">
                                <label>Service Interested In</label>
                                <select name="service" value={form.service} onChange={handleChange}>
                                    <option value="">Select a service…</option>
                                    <option>Janitorial Service</option>
                                    <option>Dedicated Delivery</option>
                                    <option>Material Supply & Procurement</option>
                                    <option>Warehousing & Distribution</option>
                                </select>
                            </div>
                            <div className="cb-field">
                                <label>Message</label>
                                <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your requirements…" required />
                            </div>
                            <button type="submit" className="btn btn-accent cb-submit">Send Message →</button>
                        </form>
                    )}
                </div>

                {/* Info */}
                <div className="cb-info reveal-up" style={{ transitionDelay: '0.25s' }}>
                    {[
                        { icon: '📍', title: 'Headquarters', text: 'Markham, Ontario, Canada' },
                        { icon: '🌍', title: 'Service Regions', text: 'Ontario & Manitoba' },
                        { icon: '⏱️', title: 'Response Time', text: 'Within 24 hours' },
                    ].map((item) => (
                        <div key={item.title} className="cb-info-item">
                            <div className="cb-info-icon">{item.icon}</div>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                    <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>Full Contact Page →</Link>
                </div>
            </div>
        </div>
    );
}
