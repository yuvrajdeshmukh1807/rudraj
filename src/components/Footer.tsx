import { RESTAURANT, NAV_LINKS } from '../data/hotelData';
import { Phone, Mail, MapPin, Clock, UtensilsCrossed } from 'lucide-react';

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4l16 16M4 20L20 4"/>
  </svg>
);

const year = new Date().getFullYear();

const POPULAR_SPECIALITIES = [
  { name: 'Kolhapuri Misal Pav', href: '#specialities' },
  { name: 'Tambda & Pandhra Rassa', href: '#specialities' },
  { name: 'Gavran Pithla Bhakri', href: '#specialities' },
  { name: 'Shahi Maharashtrian Veg Thali', href: '#specialities' },
  { name: 'Kolhapuri Chicken & Mutton Sukka', href: '#menu' },
  { name: 'Sajuk Tupatli Puran Poli', href: '#specialities' },
  { name: 'Chilled Kokum Solkadhi', href: '#menu' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer" aria-label="Restaurant footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand-col">
            <div className="footer__brand-name">{RESTAURANT.name}</div>
            <div className="footer__brand-marathi">{RESTAURANT.marathiName}</div>
            <div className="footer__brand-tag">Authentic Maharashtrian Restaurant</div>
            <p className="footer__brand-desc">
              Dedicated to serving pure, traditional Maharashtrian cuisine and fiery Kolhapuri heritage with genuine warmth and hospitality.
            </p>

            <div className="footer__social" aria-label="Social media links">
              <a
                href={RESTAURANT.social.instagram}
                className="footer__social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram />
              </a>
              <a
                href={RESTAURANT.social.facebook}
                className="footer__social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook />
              </a>
              <a
                href={RESTAURANT.social.twitter}
                className="footer__social-link"
                aria-label="Twitter / X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconX />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="footer__col-title">Navigation</div>
            <ul className="footer__links" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                  >
                    <span>{link.label}</span>
                    {link.marathi && <small className="footer__link-marathi">({link.marathi})</small>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Specialities */}
          <div>
            <div className="footer__col-title">Specialities</div>
            <ul className="footer__links" role="list">
              {POPULAR_SPECIALITIES.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="footer__link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                  >
                    <UtensilsCrossed size={12} className="footer__link-bullet" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dining Timings & Contact */}
          <div>
            <div className="footer__col-title">Visit &amp; Dine</div>
            <div className="footer__hours-box">
              <div className="footer__hour-item">
                <Clock size={15} className="text-saffron" />
                <div>
                  <strong>Lunch Service</strong>
                  <p>{RESTAURANT.timings.lunch}</p>
                </div>
              </div>
              <div className="footer__hour-item">
                <Clock size={15} className="text-saffron" />
                <div>
                  <strong>Dinner Service</strong>
                  <p>{RESTAURANT.timings.dinner}</p>
                </div>
              </div>
            </div>

            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <MapPin size={15} className="text-saffron" />
                <span>{RESTAURANT.address.city}, {RESTAURANT.address.state}</span>
              </div>
              <div className="footer__contact-item">
                <Phone size={15} className="text-saffron" />
                <a href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`}>{RESTAURANT.phone}</a>
              </div>
              <div className="footer__contact-item">
                <Mail size={15} className="text-saffron" />
                <a href={`mailto:${RESTAURANT.email}`}>{RESTAURANT.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} {RESTAURANT.name} ({RESTAURANT.marathiName}). All rights reserved.
          </p>
          <p className="footer__tagline">
            अस्सल चव • पारंपारिक पाहुणचार • शुद्ध सात्विक आणि मांसाहारी मेजवानी
          </p>
          <div className="footer__policies">
            <span className="footer__policy-link">Pure Veg &amp; Non-Veg Separate Kitchen Sections</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
