import { useState } from 'react';
import './FaqBlock.css';
const faqs = [
    { q: 'What areas do you serve?', a: 'VRD Groups currently operates across Ontario and Manitoba, with headquarters in Markham, Ontario.' },
    { q: 'How long has VRD Groups been in business?', a: 'We have been delivering premium services for over 5 years, building a strong reputation for reliability and quality.' },
    { q: 'What services does VRD Groups offer?', a: 'Sanitory Service / Property Management, Dedicated Delivery, Material Supply & Procurement, and Warehousing & Distribution.' },
    { q: 'How do I request a quote?', a: 'Fill out the contact form or call us directly. Our team will respond within 24 hours with a customized proposal.' },
    { q: 'Are your services available for small businesses?', a: 'Absolutely. We work with businesses of all sizes, offering flexible and scalable solutions.' },
    { q: 'Do you offer customized service packages?', a: 'Yes. We tailor our services to fit your specific requirements, timelines, and budget.' },
];

export default function FaqBlock() {
    const [open, setOpen] = useState(null);

    return (
        <div className="faq-root-container">
            <div className="reveal-up">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle">Everything you need to know about working with VRD Groups.</p>
            </div>

            <div className="faq-list">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={`faq-item ${open === i ? 'open' : ''}`}
                    >
                        <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                            <span>{faq.q}</span>
                            <span className="faq-icon">{open === i ? '−' : '+'}</span>
                        </button>
                        <div className="faq-answer">
                            <p>{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
