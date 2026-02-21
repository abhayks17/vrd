import { Link } from 'react-router-dom';

const services = [
    {
        id: 'janitorial',
        icon: '🧹',
        title: 'Janitorial Service',
        desc: `VRD Groups, headquartered in Markham, Ontario, has been providing high-quality janitorial services for over five years across Ontario and Manitoba. They specialize in comprehensive cleaning solutions tailored to various facilities, ensuring cleanliness and hygiene standards are met consistently.`,
    },
    {
        id: 'delivery',
        icon: '🚚',
        title: 'Dedicated Delivery Service',
        desc: `For the past five years, VRD Groups has proudly served businesses and communities across Ontario and Manitoba with reliable, on-time, and professional dedicated delivery services built on trust, efficiency, and commitment.`,
    },
    {
        id: 'material',
        icon: '📦',
        title: 'Material Supply & Procurement',
        desc: `At VRD Groups, we specialize in delivering premium-quality materials to meet the demands of a wide range of industries across Ontario and Manitoba, with a focus on durability, performance, and timely delivery.`,
    },
    {
        id: 'warehousing',
        icon: '🏭',
        title: 'Warehousing & Distribution',
        desc: `VRD Groups has been actively involved in warehousing and logistics operations across Ontario and Manitoba for the past 5 years, with state-of-the-art facilities designed to meet the evolving needs of businesses across various sectors.`,
    },
];

export default function ServicesBlock() {
    return (
        <div className="sb-root container">
            <div className="reveal-up">
                <div className="section-tag">What We Do</div>
                <h2 className="section-title">Our Services</h2>
                <p className="section-subtitle">
                    Five years of delivering excellence across Ontario &amp; Manitoba.
                </p>
            </div>

            <div className="sb-grid">
                {services.map((s, i) => (
                    <div key={s.id} className="sb-card reveal-up" style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
                        <div className="sb-icon">{s.icon}</div>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <Link to={`/services/${s.id}`} className="sb-link">Learn more →</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
