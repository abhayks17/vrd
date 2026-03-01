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
        const handleScroll = () => {
            const snapPage = document.querySelector('.snap-page')
            const scrollPos = Math.max(snapPage?.scrollTop || 0, window.scrollY)
            setScrolled(scrollPos > 20)
        }

        // Use capture: true to catch scroll events from the snap-page container
        window.addEventListener('scroll', handleScroll, { capture: true, passive: true })

        // Initial check
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll, { capture: true })
        }
    }, [])

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className={`header ${scrolled ? 'scrolled' : 'transparent'}`}>
            <div className="header-inner">
                <Link to="/" className="header-logo" onClick={closeMenu}>
                    <img src="/LOGO.png" alt="VRD Groups Logo" className="logo-img" />
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
