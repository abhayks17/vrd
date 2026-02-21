import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import RevealText from '../../components/Revealtext'
import ScrollSection from '../../components/ScrollSection/ScrollSection'
export default function Home() {
    const videoRef = useRef(null)

    useEffect(() => {
        const v = videoRef.current
        if (!v) return
        const handleLoaded = () => { v.currentTime = 1 }
        v.addEventListener('loadedmetadata', handleLoaded)
        return () => v.removeEventListener('loadedmetadata', handleLoaded)
    }, [])

    /* Hero content passed into ScrollSection as the first snap panel */
    const heroContent = (
        <section className="home-hero" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <video ref={videoRef} className="hero-video" autoPlay loop muted playsInline>
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            <div className="hero-overlay" />

            <div className="hero-content">
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
                    Ontario and Manitoba.
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
                        <div className="stat-number">Markham</div>
                        <div className="stat-label">Headquartered</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">ON + MB</div>
                        <div className="stat-label">Service Regions</div>
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
