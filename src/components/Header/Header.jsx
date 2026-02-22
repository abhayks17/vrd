import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Bids & Tender', to: '/bids-tender' },
    { label: 'Contact Us', to: '/contact', cta: true },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        // Fallback for regular pages
        const onScroll = () => {
            if (window.scrollY > 40) setScrolled(true)
            else {
                const snapPage = document.querySelector('.snap-page')
                if (!snapPage || snapPage.scrollTop <= 40) setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)

        // Intersection Observer for Hero (Home page)
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If hero is NOT intersecting, we are "scrolled"
                setScrolled(!entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        const hero = document.querySelector('#hero')
        if (hero) observer.observe(hero)

        // Also watch snap-page scrolls for desktop
        const snapPage = document.querySelector('.snap-page')
        const onSnapScroll = () => {
            if (snapPage.scrollTop > 40) setScrolled(true)
            else setScrolled(false)
        }
        if (snapPage) snapPage.addEventListener('scroll', onSnapScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
            observer.disconnect()
            if (snapPage) snapPage.removeEventListener('scroll', onSnapScroll)
        }
    }, [])

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className={`header ${scrolled ? 'scrolled' : 'transparent'}`}>
            <div className="header-inner">
                <Link to="/" className="header-logo" onClick={closeMenu}>
                    <div className="logo-icon">VRD</div>
                    <div className="logo-text">
                        <span className="logo-title">VRD Groups</span>
                        <span className="logo-subtitle">Build · Innovate · Deliver</span>
                    </div>
                </Link>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav>
                    <ul className={`header-nav ${menuOpen ? 'open' : ''}`}>
                        {navItems.map(item => (
                            <li key={item.to} className="nav-item">
                                <NavLink
                                    to={item.to}
                                    end={item.to === '/'}
                                    className={({ isActive }) =>
                                        `nav-link${item.cta ? ' nav-cta' : ''}${isActive ? ' active' : ''}`
                                    }
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
