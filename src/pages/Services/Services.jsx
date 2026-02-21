import { Link } from 'react-router-dom'
import './Services.css'

const allServices = [
    {
        id: 'civil-construction',
        icon: '🏗️',
        tag: 'Construction',
        title: 'Civil Construction',
        desc: 'Comprehensive civil construction services including residential, commercial, and industrial projects executed with precision and industry-best standards.',
        features: ['Structural Engineering', 'Foundation Works', 'RCC Structures', 'Pre-engineered Buildings'],
    },
    {
        id: 'road-infrastructure',
        icon: '🛣️',
        tag: 'Infrastructure',
        title: 'Road Infrastructure',
        desc: 'End-to-end road development, national highways, state highways, and urban road projects designed for longevity and safety.',
        features: ['Highway Construction', 'Urban Road Development', 'Flyovers & Bridges', 'Road Rehabilitation'],
    },
    {
        id: 'water-supply',
        icon: '💧',
        tag: 'Utilities',
        title: 'Water Supply Systems',
        desc: 'Design and implementation of water supply networks, distribution pipelines, overhead tanks, and water treatment facilities for urban and rural areas.',
        features: ['Pipeline Networks', 'Overhead Reservoirs', 'Treatment Plants', 'Pumping Stations'],
    },
    {
        id: 'electrical-works',
        icon: '⚡',
        tag: 'Electrical',
        title: 'Electrical Works',
        desc: 'Comprehensive electrical installation including HT/LT systems, substations, power distribution, and street lighting systems.',
        features: ['HT/LT Lines', 'Substations', 'Street Lighting', 'Power Distribution'],
    },
    {
        id: 'irrigation',
        icon: '🌾',
        tag: 'Agriculture',
        title: 'Irrigation Projects',
        desc: 'Canal construction, lift irrigation schemes, and agricultural water management projects to enable sustainable farming across India.',
        features: ['Canal Construction', 'Lift Irrigation', 'Check Dams', 'Drip Systems'],
    },
    {
        id: 'buildings',
        icon: '🏢',
        tag: 'Buildings',
        title: 'Building Works',
        desc: 'Government buildings, public schools, hospitals, commercial complexes, and institutional structures built to the highest standards.',
        features: ['Government Buildings', 'Hospitals & Schools', 'Commercial Complexes', 'Institutional Structures'],
    },
    {
        id: 'drainage',
        icon: '🔧',
        tag: 'Sanitation',
        title: 'Drainage & Sewerage',
        desc: 'Modern drainage systems, stormwater management, and sewage treatment plants for cities and municipalities.',
        features: ['Storm Water Drains', 'Sewage Treatment', 'Underground Drains', 'Pumping Stations'],
    },
    {
        id: 'surveying',
        icon: '📐',
        tag: 'Survey',
        title: 'Survey & Design',
        desc: 'Professional GIS mapping, topographic surveys, structural design, and project consultancy services.',
        features: ['GIS Mapping', 'Topographic Survey', 'Structural Design', 'DPR Preparation'],
    },
    {
        id: 'project-management',
        icon: '📊',
        tag: 'Management',
        title: 'Project Management',
        desc: 'Full-cycle project management, quality monitoring, and PMC services ensuring on-time, on-budget delivery.',
        features: ['PMC Services', 'Quality Control', 'On-site Supervision', 'Progress Reporting'],
    },
]

export default function Services() {
    return (
        <div className="services-page">
            {/* Page Hero */}
            <div className="page-hero">
                <div className="breadcrumb">
                    <Link to="/">Home</Link> &rsaquo; Services
                </div>
                <h1>Our Services</h1>
                <p>
                    VRD Groups offers a full spectrum of infrastructure and engineering services
                    across civil, electrical, water, and building sectors.
                </p>
            </div>

            <div className="container">
                <div className="services-all-grid">
                    {allServices.map(s => (
                        <div key={s.id} className="service-full-card">
                            <div className="service-card-header">
                                <div className="service-card-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <span className="tag">{s.tag}</span>
                            </div>
                            <div className="service-card-body">
                                <p>{s.desc}</p>
                                <ul className="service-features-list">
                                    {s.features.map(f => <li key={f}>{f}</li>)}
                                </ul>
                                <Link to={`/services/${s.id}`} className="service-card-btn">
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
