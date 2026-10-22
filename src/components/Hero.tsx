import { useState, useEffect, useRef } from 'react';
import { RESTAURANT } from '../data/hotelData';
import { ChevronDown, CalendarDays, Users, UtensilsCrossed, Clock, Flame, Sparkles } from 'lucide-react';

const today = new Date().toISOString().split('T')[0];

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const [date, setDate] = useState(today);
  const [mealTime, setMealTime] = useState<'lunch' | 'dinner'>('lunch');
  const [guests, setGuests] = useState('2');

  useEffect(() => {
    if (imgRef.current?.complete) setImgLoaded(true);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleQuickReserve = (e: React.FormEvent) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('rudrajya_quick_reserve', {
        detail: { date, mealTime, guests },
      })
    );
    scrollTo('reservation');
  };

  return (
    <section className="hero" id="home" aria-label="Hotel Rudrajya Restaurant Hero">
      {/* Background authentic food image */}
      <div className="hero__bg">
        <img
          ref={imgRef}
          src="/restaurant-hero.jpg"
          alt="Hotel Rudrajya — authentic Maharashtrian royal thali feast with puran poli, bhakri, and rassa"
          className={`hero__img ${imgLoaded ? 'loaded' : ''}`}
          onLoad={() => setImgLoaded(true)}
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="container">
        <div className="hero__content">
          <div className="hero__eyebrow" aria-hidden="true">
            <span className="hero__eyebrow-devanagari">॥ अतिथी देवो भव ॥</span>
            <span className="hero__eyebrow-divider">•</span>
            <span className="hero__eyebrow-text">Welcome to {RESTAURANT.name}</span>
          </div>

          <h1 className="hero__title">
            Authentic <em>Maharashtrian</em>
            <br />
            Taste, Served with Tradition
          </h1>

          <p className="hero__desc">
            Savor the royal culinary heritage of Maharashtra — from the legendary fiery Kolhapuri Tambda-Pandhra Rassa to comforting rustic Pithla Bhakri and divine Sajuk Tupatli Puran Poli, crafted with heirloom stone-ground spices.
          </p>

          {/* Badges */}
          <div className="hero__badges">
            <span className="hero__badge">
              <Flame size={14} className="hero__badge-icon text-saffron" />
              <span>अस्सल कोल्हापुरी चव</span>
            </span>
            <span className="hero__badge">
              <Sparkles size={14} className="hero__badge-icon text-gold" />
              <span>Handcrafted Stone-Ground Spices</span>
            </span>
            <span className="hero__badge">
              <UtensilsCrossed size={14} className="hero__badge-icon text-cream" />
              <span>Pure Traditional Family Dining</span>
            </span>
          </div>

          {/* Action Buttons with clear visual hierarchy */}
          <div className="hero__actions">
            <a
              href="#menu"
              className="btn btn--primary btn--lg"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('menu');
              }}
            >
              <UtensilsCrossed size={18} />
              <span>Explore Our Menu</span>
            </a>

            <a
              href="#reservation"
              className="btn btn--hero-secondary btn--lg"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('reservation');
              }}
            >
              <CalendarDays size={18} />
              <span>Book a Table</span>
            </a>
          </div>
        </div>

        {/* Quick Table Reservation Bar in clean horizontal row */}
        <div className="hero__booking-bar" role="region" aria-label="Quick table reservation">
          <div className="booking-bar__header">
            <span className="booking-bar__title">Reserve Your Table</span>
            <span className="booking-bar__subtitle">Instant dining reservation with zero waiting</span>
          </div>

          <form className="booking-bar__form" onSubmit={handleQuickReserve}>
            <div className="booking-bar__field">
              <label htmlFor="quick-date" className="booking-bar__label">
                <CalendarDays size={14} />
                <span>Dining Date</span>
              </label>
              <input
                id="quick-date"
                type="date"
                value={date}
                min={today}
                onChange={(e) => setDate(e.target.value)}
                className="booking-bar__input"
              />
            </div>

            <div className="booking-bar__field">
              <label htmlFor="quick-meal" className="booking-bar__label">
                <Clock size={14} />
                <span>Meal Time</span>
              </label>
              <select
                id="quick-meal"
                value={mealTime}
                onChange={(e) => setMealTime(e.target.value as 'lunch' | 'dinner')}
                className="booking-bar__input"
              >
                <option value="lunch">Lunch (11:30 am to 3:30 pm)</option>
                <option value="dinner">Dinner (7:00 pm to 11:00 pm)</option>
              </select>
            </div>

            <div className="booking-bar__field">
              <label htmlFor="quick-guests" className="booking-bar__label">
                <Users size={14} />
                <span>Guests</span>
              </label>
              <select
                id="quick-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="booking-bar__input"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons (Family)</option>
                <option value="6">6 Persons (Large Family)</option>
                <option value="10">10+ Persons (Pangat Feast)</option>
              </select>
            </div>

            <div className="booking-bar__action">
              <button
                type="submit"
                className="btn btn--primary booking-bar__submit"
                id="quick-reserve-btn"
              >
                <UtensilsCrossed size={16} />
                <span>Find Table</span>
              </button>
            </div>
          </form>
        </div>

        {/* Scroll indicator placed in natural flow below the booking bar */}
        <div className="hero__scroll-wrap">
          <button
            className="hero__scroll"
            onClick={() => scrollTo('specialities')}
            aria-label="Scroll to Specialities"
          >
            <span className="hero__scroll-text">Specialities</span>
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
