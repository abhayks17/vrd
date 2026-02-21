import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import './ServicesBlock.css'

const services = [
  {
    id: 'janitorial',
    title: 'Janitorial Service',
    video: '/janitorial.mp4',
    desc: 'VRD Groups delivers top-tier janitorial services across Ontario & Manitoba.'
  },
  {
    id: 'delivery',
    title: 'Dedicated Delivery Service',
    video: '/delivery.mp4',
    desc: 'For the past five years VRD Groups has provided reliable dedicated delivery solutions.'
  },
  {
    id: 'material',
    title: 'Material Supply & Procurement',
    video: '/material.mp4',
    desc: 'At VRD Groups, we specialize in end-to-end material supply and procurement.'
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Distribution',
    video: '/warehouse.mp4',
    desc: 'VRD Groups has been actively involved in warehousing and distribution.'
  }
]

export default function ServicesBlock() {
  const videoRefs = useRef([])
  const rootRef = useRef(null)

  // Self-contained reveal: works whether inside snap-section or a standalone page
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const items = el.querySelectorAll('.reveal-up')
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach(item => item.classList.add('visible'))
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const handleMouseEnter = (i) => {
    const v = videoRefs.current[i]
    if (!v) return
    v.play()
  }

  const handleMouseLeave = (i) => {
    const v = videoRefs.current[i]
    if (!v) return
    v.pause()
    v.currentTime = 2
  }

  return (
    <div className="sb-root" ref={rootRef}>
      <div className="container sb-inner">
        <div className="reveal-up">
          <h2 className="section-title" style={{ color: '#fff' }}>Our Services</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Five years of delivering excellence across Ontario &amp; Manitoba.
          </p>
        </div>

        <div className="sb-grid">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="sb-card reveal-up"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <video
                ref={el => {
                  videoRefs.current[i] = el
                  if (el) {
                    // Seek to 2s once metadata is available
                    el.addEventListener('loadedmetadata', () => {
                      el.currentTime = 2
                    }, { once: true })
                  }
                }}
                className="sb-video"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={s.video} type="video/mp4" />
              </video>

              <div className="sb-overlay" />

              <div className="sb-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={`/services/${s.id}`} className="sb-link">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}