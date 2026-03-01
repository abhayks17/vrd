import { Link } from 'react-router-dom'
import './BidsTender.css'
import Footer from '../../components/Footer/Footer'

export default function BidsTender() {
  return (
    <div className="bids-page">

      {/* Hero section */}
      <section className="bt-minimal">
        <div className="bt-minimal-overlay" />
        <div className="bt-minimal-content">
          <div className="bt-tag">VRD Groups</div>
          <h1>Bids &amp; Tenders</h1>
          <p className="bt-lead">
            Explore current bid opportunities and collaborate with VRD Groups across
            sanitory, logistics, supply, and warehousing services.
          </p>
          <div className="bt-list">
            <div>Sanitory Service / Property Management services</div>
            <div>Dedicated Delivery &amp; Logistics</div>
            <div>Material Supply &amp; Procurement</div>
            <div>Warehousing &amp; Distribution</div>
          </div>
          <Link to="/contact" className="btn btn-accent bt-btn">
            Submit Your Bid →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}