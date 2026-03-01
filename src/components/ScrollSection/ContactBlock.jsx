import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactBlock() {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
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

    return (
        <div className="cb-root" ref={rootRef}>
            <div className="container cb-inner">
                <div className="cb-card-wrap reveal-up">

                    {/* Left: info */}
                    <div className="cb-left">
                        <div className="cb-envelope">✉️</div>
                        <h2>Get in touch</h2>
                        <div className="cb-info-list">
                            <div className="cb-info-row"><span className="ci-dot" />Toronto, Ontario, Canada</div>
                            <div className="cb-info-row"><span className="ci-dot" />Office: 613-434-4321 Ext # 3</div>
                            <div className="cb-info-row"><span className="ci-dot" />Cell: 431-388-6655 / 431-998-6655</div>
                            <div className="cb-info-row"><span className="ci-dot" />dibin@vrdgroups.com</div>
                            <div className="cb-info-row"><span className="ci-dot" />Response within 24 hours</div>
                        </div>
                        <Link to="/contact" style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#000', fontWeight: 600 }}>
                            Full contact page →
                        </Link>
                    </div>

                    {/* Right: form */}
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const sub = encodeURIComponent(`New Inquiry from ${form.name} - VRD Groups`);
                            const body = encodeURIComponent(`Hello VRD Groups,\n\nI have a new inquiry regarding ${form.service || 'your services'}.\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
                            const mailtoUrl = `mailto:dibin@vrdgroups.com?subject=${sub}&body=${body}`;
                            const link = document.createElement('a');
                            link.href = mailtoUrl;
                            link.click();
                        }} className="cb-form">
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
                                    <option>Sanitory Service / Property Management</option>
                                    <option>Dedicated Delivery</option>
                                    <option>Material Supply &amp; Procurement</option>
                                    <option>Warehousing &amp; Distribution</option>
                                </select>
                            </div>
                            <div className="cb-field">
                                <label>Message</label>
                                <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Tell us about your requirements…" required />
                            </div>
                            <button type="submit" className="cb-submit">Send Mail →</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
