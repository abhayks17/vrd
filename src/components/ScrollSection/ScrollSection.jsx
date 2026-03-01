import { useEffect, useRef, useState, useCallback } from 'react';
import ServicesBlock from './ServicesBlock';
import ContactBlock from './ContactBlock';
import FaqBlock from './FaqBlock';
import './ScrollSection.css';
import Footer from '../../components/Footer/Footer'
import AssociatesBlock from './AssociatesBlock';
const PANELS = [
  { id:'services',label:'Services'},
{ id:'associates',label:'Associates'},
  { id:'faq',label:'FAQ'},
  { id:'footer',label:'Footer'} // ⭐ add this
];
/** Watches an element and toggles .visible on all .reveal-up children inside it */
function useRevealObserver(ref) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const items = el.querySelectorAll('.reveal-up');
        const obs = new IntersectionObserver(
            ([entry]) => {
                items.forEach((item) =>
                    item.classList.toggle('visible', entry.isIntersecting)
                );
            },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [ref]);
}

function SnapPanel({ id, children, onActive }) {
    const ref = useRef(null);
    useRevealObserver(ref);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) onActive(id); },
            { threshold: 0.5 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [id, onActive]);

    return (
        <section id={id} ref={ref} className="snap-section light">
            {children}
        </section>
    );
}
export default function ScrollSection({ heroContent }){
    const [active, setActive] = useState('hero');
    const containerRef = useRef(null);

    const handleActive = useCallback((id) => setActive(id), []);

    /* ⭐ THEME SWITCH — MUST BE HERE */
    useEffect(() => {
        document.body.classList.remove('header-dark','header-light')

        if (active === 'faq' || active === 'footer') {
            document.body.classList.add('header-dark')
        } else {
            document.body.classList.add('header-light')
        }
    }, [active]);
    /* hero panel active detection */
    useEffect(() => {
        const heroEl = containerRef.current?.querySelector('#hero');
        if (!heroEl) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setActive('hero'); },
            { threshold: 0.5 }
        );
        obs.observe(heroEl);
        return () => obs.disconnect();
    }, []);

    const ALL_DOTS = [{ id: 'hero', label: 'Home' }, ...PANELS];

    return (
        <div className="snap-page" ref={containerRef}>
            {/* Dot navigator */}
            <nav className="snap-dots" aria-label="Page sections">
                {ALL_DOTS.map((s) => (
                    <button
                        key={s.id}
                        className={`snap-dot ${active === s.id ? 'active' : ''}`}
                        onClick={() => scrollToPanel(s.id)}
                        aria-label={s.label}
                        title={s.label}
                    />
                ))}
            </nav>

            {/* Hero panel */}
            <section id="hero" className="snap-section">
                {heroContent}
            </section>

            {/* Services, Contact, FAQ */}
            <SnapPanel id="services" onActive={handleActive}><ServicesBlock /></SnapPanel>
<SnapPanel id="associates" onActive={handleActive}>
  <AssociatesBlock />
</SnapPanel>            <SnapPanel id="faq" onActive={handleActive}><FaqBlock /></SnapPanel>
                        <SnapPanel id="footer" onActive={handleActive}><Footer /></SnapPanel>

        </div>
    );
}
