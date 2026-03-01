import { Link } from 'react-router-dom'
import './Home.css'
import RevealText from '../../components/Revealtext'
import ScrollSection from '../../components/ScrollSection/ScrollSection'
import { useRef, useEffect, useState } from 'react'
export default function Home() {
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const handleLoaded = () => {
      v.muted = true
      if (window.matchMedia('(hover: hover)').matches) {
        v.currentTime = 1
      } setLoaded(true)
    }

    if (v.readyState >= 3) {
      handleLoaded()
    } else {
      v.addEventListener('canplay', handleLoaded, { once: true })
    }

    const timeout = setTimeout(handleLoaded, 3000)

    return () => clearTimeout(timeout)
  }, [])   // ⭐ empty
  /* Hero content passed into ScrollSection as the first snap panel */
  const heroContent = (
    <section className="home-hero">

      {/* VIDEO */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      {/* LOADER */}
      <div className={`hero-loader ${loaded ? 'hide' : ''}`}>
        <div className="loader-spinner" />
      </div>

      {/* CONTENT — only after video ready */}
      <div className={`hero-content ${loaded ? 'show' : 'hide'}`}>
        <RevealText
          delay={200}
          lines={[
            <span className="hero-line-small">
              Transforming businesses with quality and cost savings
            </span>,
            <span className="hero-line-big">
              Welcome to <span className="hero-brand">VRD Groups</span>
            </span>
          ]}
        />

        <p className="hero-description reveal-fade" style={{ animationDelay: '0.9s' }}>
          At VRD Groups, we help businesses reduce operational costs without compromising on quality.
          We deliver high-quality services and premium-grade products that improve efficiency across
          Canada.
        </p>

        <div className="hero-actions reveal-fade" style={{ animationDelay: '1.3s' }}>
          <Link to="/services" className="btn btn-accent">Our Services</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>

        <div className="hero-stats reveal-fade" style={{ animationDelay: '1.7s' }}>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          
          <div className="stat-item">
            <div className="stat-number">Across
          Canada</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Multi</div>
            <div className="stat-label">Service Solutions</div>
          </div>
        </div>
      </div>
    </section>
  )

  return <ScrollSection heroContent={heroContent} />
}
