import { useParams, Link } from 'react-router-dom'
import './ServiceDetails.css'

const serviceData = {
    'civil-construction': {
        icon: '🏗️',
        title: 'Civil Construction',
        tag: 'Construction',
        overview: 'VRD Groups provides comprehensive civil construction services across India, handling everything from initial site surveys to final project handover. Our teams are equipped with modern machinery and follow stringent quality protocols to deliver projects on time and within budget.',
        fullDesc: 'Our civil construction division handles residential complexes, commercial buildings, industrial structures, government facilities, and specialized infrastructure. We maintain a fleet of advanced construction equipment and employ highly qualified civil engineers with broad project experience.',
        features: [
            { icon: '🏛️', title: 'Structural Engineering', desc: 'Advanced RCC frame and steel structure designs for all project types.' },
            { icon: '🪨', title: 'Foundation Works', desc: 'Pile, raft, and strip foundations designed for varied soil conditions.' },
            { icon: '🏗️', title: 'Pre-engineered Buildings', desc: 'Cost-effective PEB structures for industrial and commercial use.' },
            { icon: '🔩', title: 'Steel Structures', desc: 'Fabrication and erection of steel structures for warehouses and industries.' },
        ],
        process: [
            { title: 'Site Survey & Assessment', desc: 'Detailed survey, soil testing, and feasibility assessment before commencement.' },
            { title: 'Design & Engineering', desc: 'Structural design prepared by our experienced engineering team.' },
            { title: 'Material Procurement', desc: 'Quality materials sourced from approved vendors ensuring compliance.' },
            { title: 'Construction & Quality Control', desc: 'Execution with daily quality checks and milestone reporting.' },
            { title: 'Handover & Warranty', desc: 'Project handed over with full documentation and defect liability period.' },
        ],
    },
    'road-infrastructure': {
        icon: '🛣️',
        title: 'Road Infrastructure',
        tag: 'Infrastructure',
        overview: 'VRD Groups has constructed over 3,000 km of roads across India, working with NHAI, MORD, and State PWDs. Our road infrastructure division specializes in highways, rural roads, and urban arterials built to IRC standards.',
        fullDesc: 'From National Highways to last-mile rural connectivity, VRD Groups delivers reliable road infrastructure with advanced bituminous and rigid pavement technologies. Our team includes experienced road engineers, geotechnical specialists, and certified quality personnel.',
        features: [
            { icon: '🛤️', title: 'Highway Construction', desc: 'Multi-lane highway construction with geometric design and pavement engineering.' },
            { icon: '🌉', title: 'Bridges & Flyovers', desc: 'PSC/RCC bridge construction for both road and railway applications.' },
            { icon: '🏙️', title: 'Urban Roads', desc: 'City road development with storm drainage, streetlights, and utilities.' },
            { icon: '🚧', title: 'Road Rehabilitation', desc: 'Resurfacing, widening, and strengthening of existing road assets.' },
        ],
        process: [
            { title: 'Survey & DPR', desc: 'Topographic survey, traffic studies, and DPR preparation.' },
            { title: 'Design Finalization', desc: 'Geometric, pavement, and drainage design as per IRC standards.' },
            { title: 'Land & Clearances', desc: 'Assistance with land acquisition and statutory clearances.' },
            { title: 'Construction', desc: 'Layer-wise construction with compaction and quality tests.' },
            { title: 'Completion & Maintenance', desc: 'Final inspection, as-built drawings, and maintenance period support.' },
        ],
    },
    'water-supply': {
        icon: '💧',
        title: 'Water Supply Systems',
        tag: 'Utilities',
        overview: 'VRD Groups designs and implements complete water supply infrastructure solutions for municipal corporations, gram panchayats, and industrial clients. We have successfully delivered projects under AMRUT, PMGSY, and state-level water schemes.',
        fullDesc: 'Our water supply division covers the entire value chain from source to tap — including intake structures, treatment plants, transmission mains, distribution networks, overhead service reservoirs, and house service connections. We use modern HDPE and DICL pipe systems for durability and leak-free service.',
        features: [
            { icon: '🌊', title: 'Intake Structures', desc: 'River/reservoir intake systems with screening and pumping.' },
            { icon: '🏭', title: 'Treatment Plants', desc: 'Conventional and package type WTPs of varied capacities.' },
            { icon: '🔵', title: 'OHTs & GSRs', desc: 'RCC overhead tanks and ground service reservoirs of all sizes.' },
            { icon: '🪠', title: 'Pipeline Networks', desc: 'Long-distance transmission and last-mile distribution pipelines.' },
        ],
        process: [
            { title: 'Source Study', desc: 'Hydrological study and source identification for sustainable supply.' },
            { title: 'System Design', desc: 'Hydraulic design, capacity calculations, and network planning.' },
            { title: 'Civil & Mechanical Works', desc: 'Tank construction, pump house, pipe laying and appurtenances.' },
            { title: 'Electrical & Instrumentation', desc: 'Panel boards, SCADA, flow meters, and automation systems.' },
            { title: 'Commissioning', desc: 'Trial runs, chlorination, and handover with O&M manual.' },
        ],
    },
}

const defaultService = {
    icon: '🔧',
    title: 'Our Service',
    tag: 'Service',
    overview: 'VRD Groups provides world-class infrastructure services across India. Our experienced teams deliver quality outcomes backed by 25+ years of expertise.',
    fullDesc: 'We ensure every project is executed with precision, quality materials, and skilled manpower. Contact us to learn more about this specific service offering.',
    features: [
        { icon: '✅', title: 'Quality Assurance', desc: 'ISO-certified processes at every stage of delivery.' },
        { icon: '⏱️', title: 'Timely Execution', desc: 'Commitment to project timelines and milestone adherence.' },
        { icon: '💼', title: 'Expert Team', desc: 'Qualified engineers and project managers on every job.' },
        { icon: '📋', title: 'Full Documentation', desc: 'Complete project documentation and reporting throughout.' },
    ],
    process: [
        { title: 'Site Assessment', desc: 'Thorough evaluation of site conditions and project requirements.' },
        { title: 'Planning & Design', desc: 'Detailed engineering design and project plan preparation.' },
        { title: 'Execution', desc: 'Skilled execution with quality controls at every stage.' },
        { title: 'Quality Check', desc: 'Rigorous testing and validation of completed work.' },
        { title: 'Handover', desc: 'Project handover with full documentation and support.' },
    ],
}

const relatedServices = [
    { id: 'civil-construction', label: 'Civil Construction', icon: '🏗️' },
    { id: 'road-infrastructure', label: 'Road Infrastructure', icon: '🛣️' },
    { id: 'water-supply', label: 'Water Supply', icon: '💧' },
    { id: 'electrical-works', label: 'Electrical Works', icon: '⚡' },
    { id: 'irrigation', label: 'Irrigation Projects', icon: '🌾' },
]

export default function ServiceDetails() {
    const { id } = useParams()
    const service = serviceData[id] || { ...defaultService, title: id?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Service Details' }

    return (
        <div className="service-details-page">
            <div className="page-hero">
                <div className="breadcrumb">
                    <Link to="/">Home</Link> &rsaquo; <Link to="/services">Services</Link> &rsaquo; {service.title}
                </div>
                <h1>{service.title}</h1>
                <p>{service.overview}</p>
            </div>

            <div className="service-detail-layout">
                {/* Main Content */}
                <div>
                    <div className="detail-hero-image">
                        <span className="detail-icon">{service.icon}</span>
                    </div>

                    <div className="detail-overview">
                        <h2>Service Overview</h2>
                        <p>{service.fullDesc}</p>
                    </div>

                    <div className="detail-features">
                        <h2>Key Features</h2>
                        <div className="features-grid">
                            {service.features.map((f, i) => (
                                <div key={i} className="feature-item">
                                    <span className="fi-icon">{f.icon}</span>
                                    <div>
                                        <h4>{f.title}</h4>
                                        <p>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="detail-process">
                        <h2>Our Process</h2>
                        <div className="process-steps">
                            {service.process.map((step, i) => (
                                <div key={i} className="process-step">
                                    <div className="step-num">{i + 1}</div>
                                    <div>
                                        <h4>{step.title}</h4>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="detail-sidebar">
                    <div className="sidebar-card">
                        <h3>Quick Inquiry</h3>
                        <form className="inquiry-form" onSubmit={e => e.preventDefault()}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="your@email.com" />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="+91 XXXXXXXXXX" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows={4} placeholder="Tell us about your project..." />
                            </div>
                            <button type="submit" className="submit-btn">Send Inquiry</button>
                        </form>
                    </div>

                    <div className="sidebar-card">
                        <h3>Related Services</h3>
                        <ul className="related-services">
                            {relatedServices.filter(s => s.id !== id).map(s => (
                                <li key={s.id}>
                                    <Link to={`/services/${s.id}`}>
                                        <span>{s.icon} {s.label}</span>
                                        <span>→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-card" style={{ background: 'var(--primary)', color: '#fff' }}>
                        <h3 style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Need Help?</h3>
                        <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                            Call our project team directly for a FREE consultation.
                        </p>
                        <a href="tel:+914012345678" style={{ display: 'block', background: 'var(--accent)', color: 'var(--primary-dark)', fontWeight: 700, textAlign: 'center', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>
                            📞 +91 40 1234 5678
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
