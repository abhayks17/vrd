import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactBlock() {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [sent, setSent] = useState(false);
    const rootRef = useRef(null);

    // Self-contained reveal — works standalone AND inside snap-section
    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        const items = el.querySelectorAll('.reveal-up');
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    items.forEach(item => item.classList.add('visible'));
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className="cb-root" ref={rootRef}>
            <div className="container cb-inner">
                <div className="cb-card-wrap reveal-up">

                    {/* Left: info */}
                    <div className="cb-left">
                        <div className="cb-envelope">✉️</div>
                        <h2>Get in touch</h2>
                        <div className="cb-info-list">
                            <div className="cb-info-row"><span className="ci-dot" />Markham, Ontario, Canada</div>
                            <div className="cb-info-row"><span className="ci-dot" />Ontario &amp; Manitoba</div>
                            <div className="cb-info-row"><span className="ci-dot" />Response within 24 hours</div>
                        </div>
                        <Link to="/contact" style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#7c4fe0', fontWeight: 600 }}>
                            Full contact page →
                        </Link>
                    </div>

                    {/* Right: form */}
                    <div>
                        {sent ? (
                            <div className="cb-success">
                                <div className="cb-success-icon">✅</div>
                                <h3>Message Sent!</h3>
                                <p>We'll be in touch within 24 hours.</p>
                                <button onClick={() => setSent(false)}>Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="cb-form">
                                <div className="cb-row">
                                    <div className="cb-field">
                                        <label>Name</label>
                                        <input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" required />
                                    </div>
                                    <div className="cb-field">
                                        <label>Email</label>
                                        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" required />
                                    </div>
                                </div>
                                <div className="cb-field">
                                    <label>Service</label>
                                    <select name="service" value={form.service} onChange={handleChange}>
                                        <option value="">Select a service…</option>
                                        <option>Janitorial Service</option>
                                        <option>Dedicated Delivery</option>
                                        <option>Material Supply &amp; Procurement</option>
                                        <option>Warehousing &amp; Distribution</option>
                                    </select>
                                </div>
                                <div className="cb-field">
                                    <label>Message</label>
                                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your requirements…" required />
                                </div>
                                <button type="submit" className="cb-submit">Send →</button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
