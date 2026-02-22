import { useParams, Link } from 'react-router-dom'
import './ServiceDetails.css'
import Footer from '../../components/Footer/Footer'
const services = {
  janitorial:{
    title:'Janitorial Service',
    desc:'Professional facility cleaning services across Ontario & Manitoba.',
    banner:'/jan.jpg',
    content:'Our janitorial teams deliver reliable daily cleaning, deep sanitation, and facility maintenance tailored to offices, warehouses, and commercial spaces.',
    points:[
      'Office & commercial cleaning',
      'Deep sanitation',
      'Scheduled maintenance',
      'Industrial cleaning'
    ]
  },

  delivery:{
    title:'Dedicated Delivery Service',
    desc:'Reliable logistics and scheduled delivery solutions.',
    banner:'/delivery.jpg',
    content:'VRD Groups provides dependable last-mile and scheduled delivery with professional drivers and real-time coordination.',
    points:[
      'Scheduled routes',
      'Last mile delivery',
      'Commercial logistics',
      'Time-critical shipments'
    ]
  },

  material:{
    title:'Material Supply & Procurement',
    desc:'End-to-end material sourcing.',
    banner:'/mater.jpg',
    content:'We source and deliver premium materials ensuring quality, cost efficiency, and timely availability.',
    points:[
      'Construction materials',
      'Industrial supply',
      'Vendor management',
      'Bulk procurement'
    ]
  },

  warehousing:{
    title:'Warehousing & Distribution',
    desc:'Modern storage and distribution infrastructure.',
    banner:'/wareh.jpg',
    content:'State-of-the-art warehousing with inventory control, fulfillment, and distribution support.',
    points:[
      'Inventory management',
      'Storage solutions',
      'Fulfillment',
      'Distribution'
    ]
  }
}

export default function ServiceDetails(){
  const { id } = useParams()

  const service = services[id] || services.janitorial

  return (
    <div className="sd-page">

      {/* HERO */}
      <div className="sd-hero" style={{backgroundImage:`url(${service.banner})`}}>
        <div className="sd-overlay"/>
        <div className="sd-hero-content">
          <h1>{service.title}</h1>
          <p>{service.desc}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container sd-layout">

        {/* LEFT — content */}
        <div className="sd-info">
          <h2>Overview</h2>
          <p>{service.content}</p>

          <ul className="sd-points">
            {service.points.map((p,i)=>(
              <li key={i}>✓ {p}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT — FORM */}
        <div className="sd-form">
          <h3>Request a Quote</h3>

          <form onSubmit={(e)=>e.preventDefault()}>

            <input placeholder="Full Name" />
            <input placeholder="Email" />

            {/* AUTO SELECT SERVICE */}
            <select defaultValue={service.title}>
              {Object.values(services).map(s=>(
                <option key={s.title}>{s.title}</option>
              ))}
            </select>

            <textarea
              placeholder={`Tell us about your ${service.title.toLowerCase()} requirements`}
              rows={4}
            />

            <button className="btn btn-accent">
              Send Request →
            </button>
          </form>
        </div>

      </div>
                  <Footer />
      
    </div>
  )
}