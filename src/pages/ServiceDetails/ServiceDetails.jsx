import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ServiceDetails.css'
import Footer from '../../components/Footer/Footer'
const services = {
  sanitory: {
    title: 'Property Management Services',
    desc: 'VRD Groups delivers top-tier Sanitorial Service / Property Management services across Ontario & Manitoba.',
    banner: '/jan.jpg',
    video: '/janitorial.mp4',
    content: 'Our sanitorial and property management teams deliver reliable daily cleaning, deep sanitation, and facility maintenance tailored to offices, warehouses, and commercial spaces.',
    points: [
      'cleaning',
      'window cleaning',
      'howling',
      'sanitary items'
    ]
  },

  delivery: {
    title: 'Dedicated Delivery Service',
    desc: 'Reliable logistics and scheduled delivery solutions.',
    banner: '/delivery.jpg',
    video: '/delivery.mp4',
    content: 'VRD Groups provides dependable last-mile and scheduled delivery with professional drivers and real-time coordination.',
    points: [
      'Scheduled routes',
      'Last mile delivery',
      'Our Fleet:',
      '  5 ton truck freightliner',
      '  3 ton truck isuzu',
      '  16 ft ford e450'
    ]
  },

  material: {
    title: 'Material Supply & Procurement',
    desc: 'End-to-end material sourcing.',
    banner: '/mater.jpg',
    video: '/material.mp4',
    content: 'We source and deliver premium materials ensuring quality, cost efficiency, and timely availability.',
    points: [
      'Construction materials',
      'Industrial supply',
      'Vendor management',
      'Bulk procurement'
    ]
  },

  warehousing: {
    title: 'Warehousing & Distribution',
    desc: 'Modern storage and distribution infrastructure.',
    banner: '/wareh.jpg',
    video: '/warehouse.mp4',
    content: 'State-of-the-art warehousing with inventory control, fulfillment, and distribution support.',
    points: [
      'Inventory management',
      'Storage solutions',
      'Fulfillment',
      'Distribution'
    ]
  }
}

export default function ServiceDetails() {
  const { id } = useParams()
  const rootRef = useRef(null)
  const service = services[id] || services.sanitory

  useEffect(() => {
    const items = rootRef.current?.querySelectorAll('.reveal-up');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target); // animate once only
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [id]);

  return (
    <div className="sd-page" ref={rootRef}>

      {/* HERO */}
      <div className="sd-hero">
        <video
          src={service.video}
          className="sd-hero-video"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="sd-overlay" />
        <div className="sd-hero-content">
          <h1>{service.title}</h1>
          <p>{service.desc}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container sd-layout">

        {/* LEFT — content */}
        <div className="sd-info">
          <h2 className="reveal-up" style={{ transitionDelay: "0.5s" }}>
            Overview
          </h2>

          <p className="reveal-up" style={{ transitionDelay: "1.5s" }}>
            {service.content}
          </p>

          <ul className="sd-points">
            {service.points.map((p, i) => {
              const isHeader = p.endsWith(':');
              const isSubItem = p.startsWith('  ');
              return (
                <li
                  key={i}
                  className={`reveal-up ${isHeader ? 'sd-item-header' : ''} ${isSubItem ? 'sd-sub-item' : ''}`}
                  style={{
                    transitionDelay: `${2.5 + i * 0.5}s`,
                    fontWeight: isHeader ? 700 : 400,
                    marginTop: isHeader ? '15px' : '0',
                    paddingLeft: isSubItem ? '20px' : '0',
                    listStyle: 'none'
                  }}
                >
                  {!isHeader && (isSubItem ? '○ ' : '✓ ')}
                  {p.trim()}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT — FORM */}
        <div className="sd-form">
          <h3>Request a Quote</h3>
          <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem' }}>
            Fill in the details below to generate an email request.
          </p>

          <form onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.target);
            const name = fd.get('name');
            const email = fd.get('email');
            const service = fd.get('service');
            const message = fd.get('message');

            const subject = encodeURIComponent(`Service Inquiry: ${service} - VRD Groups`);
            const body = encodeURIComponent(`Hello VRD Groups,\n\nI am interested in your ${service} service.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

            const mailtoUrl = `mailto:dibin@vrdgroups.com?subject=${subject}&body=${body}`;
            const link = document.createElement('a');
            link.href = mailtoUrl;
            link.click();
          }}>

            <input name="name" placeholder="Full Name" required />
            <input name="email" type="email" placeholder="Email" required />

            {/* AUTO SELECT SERVICE */}
            <select name="service" defaultValue={service.title}>
              {Object.values(services).map(s => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder={`Tell us about your ${service.title.toLowerCase()} requirements`}
              rows={4}
              required
            />

            <button type="submit" className="btn btn-accent">
              Send Mail →
            </button>
          </form>
        </div>

      </div>
      <Footer />

    </div>
  )
}