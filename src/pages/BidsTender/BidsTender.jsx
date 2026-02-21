import { useState } from 'react'
import { Link } from 'react-router-dom'
import './BidsTender.css'

const categories = ['All', 'Civil Works', 'Road & Highway', 'Water Supply', 'Electrical', 'Buildings']

const tenders = [
    {
        id: 'TND-2026-001',
        status: 'open',
        statusLabel: '🟢 Open',
        badge: 'open',
        title: 'Construction of 4-Lane Highway – NH-65 Package 3, Hyderabad to Kurnool',
        category: 'Road & Highway',
        location: 'Telangana',
        deadline: '15 Mar 2026',
        amount: '₹ 285 Cr',
        desc: 'Design, construction and maintenance of 4-Lane highway including bridges, culverts, and toll plaza infrastructure for a 42 km stretch.',
    },
    {
        id: 'TND-2026-002',
        status: 'open',
        statusLabel: '🟢 Open',
        badge: 'open',
        title: 'Urban Water Supply Scheme – Phase II, Greater Hyderabad Municipal Corporation',
        category: 'Water Supply',
        location: 'Hyderabad, Telangana',
        deadline: '28 Mar 2026',
        amount: '₹ 148 Cr',
        desc: 'Installation of 340 km of distribution pipelines, 6 OHTs, and 2 WTPs under the AMRUT 2.0 scheme for GHMC zones.',
    },
    {
        id: 'TND-2026-003',
        status: 'closing',
        statusLabel: '🟡 Closing Soon',
        badge: 'closing',
        title: 'Construction of Government Medical College Building – Nalgonda District',
        category: 'Buildings',
        location: 'Nalgonda, Telangana',
        deadline: '25 Feb 2026',
        amount: '₹ 92 Cr',
        desc: 'Construction of a 5-storey government medical college with 500-bed attached hospital, including all MEP services and external development works.',
    },
    {
        id: 'TND-2026-004',
        status: 'open',
        statusLabel: '🟢 Open',
        badge: 'open',
        title: 'HT/LT Electrical Infrastructure – Industrial Development Area, Pune',
        category: 'Electrical',
        location: 'Pune, Maharashtra',
        deadline: '10 Apr 2026',
        amount: '₹ 56 Cr',
        desc: 'Supply, installation, and commissioning of 33 KV HT network, 11 KV feeders, distribution substations, and streetlighting for new MIDC zone.',
    },
    {
        id: 'TND-2026-005',
        status: 'closed',
        statusLabel: '🔴 Closed',
        badge: 'closed',
        title: 'Rural Road Connectivity – PMGSY Phase III, Visakhapatnam District',
        category: 'Road & Highway',
        location: 'Visakhapatnam, AP',
        deadline: '05 Feb 2026',
        amount: '₹ 38 Cr',
        desc: 'Construction of 87 km of rural roads connecting 24 villages under Pradhan Mantri Gram Sadak Yojana Phase III.',
    },
    {
        id: 'TND-2026-006',
        status: 'open',
        statusLabel: '🟢 Open',
        badge: 'open',
        title: 'Lift Irrigation Scheme – Krishna River Basin, Guntur District',
        category: 'Civil Works',
        location: 'Guntur, Andhra Pradesh',
        deadline: '20 Apr 2026',
        amount: '₹ 175 Cr',
        desc: 'Design and construction of lift irrigation system including pump houses, rising mains, distribution canals for 12,000 acres of agricultural land.',
    },
]

export default function BidsTender() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [search, setSearch] = useState('')

    const filtered = tenders.filter(t => {
        const catMatch = activeFilter === 'All' || t.category === activeFilter
        const searchMatch = t.title.toLowerCase().includes(search.toLowerCase()) ||
            t.location.toLowerCase().includes(search.toLowerCase())
        return catMatch && searchMatch
    })

    const openCount = tenders.filter(t => t.status === 'open').length
    const closingCount = tenders.filter(t => t.status === 'closing').length

    return (
        <div className="bids-page">
            {/* Hero */}
            <div className="page-hero">
                <div className="breadcrumb"><Link to="/">Home</Link> &rsaquo; Bids & Tender</div>
                <h1>Bids & Tender</h1>
                <p>View and download active tender documents. VRD Groups invites qualified contractors and agencies to participate in our open bidding process.</p>
            </div>

            {/* Stats */}
            <div className="bids-stats">
                <div className="bids-stats-inner">
                    <div className="bids-stat">
                        <div className="bids-stat-number">{tenders.length}</div>
                        <div className="bids-stat-label">Total Tenders</div>
                    </div>
                    <div className="bids-stat">
                        <div className="bids-stat-number" style={{ color: '#27AE60' }}>{openCount}</div>
                        <div className="bids-stat-label">Active / Open</div>
                    </div>
                    <div className="bids-stat">
                        <div className="bids-stat-number" style={{ color: 'var(--accent)' }}>{closingCount}</div>
                        <div className="bids-stat-label">Closing Soon</div>
                    </div>
                    <div className="bids-stat">
                        <div className="bids-stat-number">₹794 Cr</div>
                        <div className="bids-stat-label">Total Value (Active)</div>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bids-filter-bar">
                <div className="bids-filter-inner">
                    {categories.map(c => (
                        <button
                            key={c}
                            className={`filter-btn ${activeFilter === c ? 'active' : ''}`}
                            onClick={() => setActiveFilter(c)}
                        >
                            {c}
                        </button>
                    ))}
                    <div className="filter-search">
                        <span>🔍</span>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search tenders..."
                        />
                    </div>
                </div>
            </div>

            {/* Tenders List */}
            <div className="tenders-section">
                <div className="tenders-grid">
                    {filtered.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--gray-400)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
                            <p>No tenders match your filter.</p>
                        </div>
                    ) : filtered.map(t => (
                        <div key={t.id} className={`tender-card status-${t.status}`}>
                            <div>
                                <span className={`tender-badge ${t.badge}`}>{t.statusLabel}</span>
                                <div style={{ fontSize: '0.75rem', color: 'var(--gray-400)', marginBottom: '0.4rem', fontWeight: 600 }}>
                                    Ref: {t.id} &nbsp;|&nbsp; {t.category} &nbsp;|&nbsp; 📍 {t.location}
                                </div>
                                <div className="tender-title">{t.title}</div>
                                <div className="tender-desc">{t.desc}</div>
                            </div>
                            <div className="tender-actions">
                                <div className="tender-deadline">
                                    <div className="label">Deadline</div>
                                    <div className="date">{t.deadline}</div>
                                </div>
                                <div className="tender-amount">
                                    <div className="label">Est. Value</div>
                                    <div className="amount">{t.amount}</div>
                                </div>
                                {t.status !== 'closed' ? (
                                    <a
                                        href="#"
                                        onClick={e => e.preventDefault()}
                                        className="tender-download-btn"
                                    >
                                        📥 Download
                                    </a>
                                ) : (
                                    <span className="tender-download-btn disabled">🔒 Closed</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Notice */}
            <div className="bids-notice">
                <div className="notice-box">
                    <span className="notice-icon">ℹ️</span>
                    <div>
                        <h4>Tender Participation Guidelines</h4>
                        <p>
                            All interested bidders must be registered contractors with valid licenses. Tender documents
                            can be downloaded free of charge. For queries, contact our procurement team at{' '}
                            <a href="mailto:tenders@vrdgroups.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                                tenders@vrdgroups.com
                            </a>{' '}
                            or call +91 40 1234 5678 during business hours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
