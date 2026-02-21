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
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
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
