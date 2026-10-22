import React, { useState, useEffect, useRef } from 'react';
import { RESTAURANT, NAV_LINKS } from '../data/hotelData';
import { useScrolled } from '../hooks/useScrollBehavior';
import { X, Phone, UtensilsCrossed, CalendarCheck } from 'lucide-react';

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current?.disconnect();
    const map: Record<string, number> = {};
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { map[e.target.id] = e.intersectionRatio; });
        const top = Object.entries(map).sort((a, b) => b[1] - a[1])[0];
        if (top) setActiveId(top[0]);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-60px 0px -40% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current!.observe(el);
    });
    return () => observer.current?.disconnect();
  }, [sectionIds]);

  return activeId;
}

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleCallClick = () => {
    window.location.href = `tel:${RESTAURANT.phone.replace(/\s/g, '')}`;
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}
        aria-label="Main navigation"
        id="navbar"
      >
        <div className="container navbar__inner">
          {/* Logo with Maharashtrian restaurant branding */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Hotel Rudrajya Restaurant — Home"
          >
            <div className="navbar__logo-badge">
              <span className="navbar__logo-name">{RESTAURANT.name}</span>
              <span className="navbar__logo-marathi">{RESTAURANT.marathiName}</span>
            </div>
            <span className="navbar__logo-tag">Authentic Maharashtrian Restaurant</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="navbar__nav" role="list">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    className={`navbar__link ${isActive ? 'active' : ''}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    {link.marathi && <small className="navbar__link-marathi">{link.marathi}</small>}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTAs */}
          <div className="navbar__ctas">
            <button
              className="navbar__call-btn"
              onClick={handleCallClick}
              aria-label={`Call restaurant at ${RESTAURANT.phone}`}
              title="Call for table enquiries"
            >
              <Phone size={15} />
              <span>{RESTAURANT.phone}</span>
            </button>

            <a
              href="#menu"
              className="btn btn--outline-gold navbar__btn-menu"
              onClick={(e) => handleNavClick(e, '#menu')}
            >
              <UtensilsCrossed size={16} />
              <span>Menu</span>
            </a>

            <a
              href="#reservation"
              className="btn btn--primary navbar__btn-book"
              onClick={(e) => handleNavClick(e, '#reservation')}
            >
              <CalendarCheck size={16} />
              <span>Book a Table</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        id="mobile-drawer"
      >
        <div className="mobile-drawer__header">
          <div className="navbar__logo">
            <span className="navbar__logo-name">{RESTAURANT.name}</span>
            <span className="navbar__logo-tag">Authentic Maharashtrian Taste</span>
          </div>
          <button
            className="mobile-drawer__close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-drawer__links" role="list">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  className={`mobile-drawer__link ${isActive ? 'active' : ''}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span className="mobile-drawer__link-label">{link.label}</span>
                  {link.marathi && (
                    <span className="mobile-drawer__link-marathi">{link.marathi}</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer__footer">
          <div className="mobile-drawer__timings">
            <strong>Dining Hours:</strong>
            <p>Lunch: {RESTAURANT.timings.lunch}</p>
            <p>Dinner: {RESTAURANT.timings.dinner}</p>
          </div>
          <div className="mobile-drawer__actions">
            <a
              href="#menu"
              className="btn btn--outline-gold btn--full"
              onClick={(e) => handleNavClick(e, '#menu')}
            >
              <UtensilsCrossed size={18} />
              <span>Explore Food Menu</span>
            </a>
            <a
              href="#reservation"
              className="btn btn--primary btn--full"
              onClick={(e) => handleNavClick(e, '#reservation')}
            >
              <CalendarCheck size={18} />
              <span>Book a Table</span>
            </a>
            <button
              className="btn btn--secondary btn--full"
              onClick={handleCallClick}
            >
              <Phone size={18} />
              <span>Call: {RESTAURANT.phone}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
