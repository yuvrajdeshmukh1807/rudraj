import { useState } from 'react';
import { SIGNATURE_DISHES, type MenuItem } from '../data/hotelData';
import { Flame, Sparkles, Utensils, CheckCircle2, CalendarCheck } from 'lucide-react';

export default function Specialities() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const scrollToReservation = () => {
    setSelectedDish(null);
    const el = document.getElementById('reservation');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="specialities section-pad" id="specialities" aria-labelledby="specialities-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal">
          <div className="section-eyebrow">
            <span className="text-saffron">आमची खासीयत</span> • Chef&apos;s Signature Selection
          </div>
          <h2 className="section-title text-4xl" id="specialities-title">
            Signature Maharashtrian Dishes
          </h2>
          <div className="divider-gold center" />
          <p className="section-desc center" style={{ maxWidth: 680 }}>
            Handpicked authentic delicacies that define Maharashtra’s rich food heritage — from the fiery spice of Kolhapur to the soul-satisfying sweetness of Sajuk Tupatli Puran Poli.
          </p>
        </div>

        {/* Signature Dishes Grid */}
        <div className="dishes-grid">
          {SIGNATURE_DISHES.map((dish, i) => (
            <article
              key={dish.id}
              className="dish-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Image & Badges */}
              <div className="dish-card__image-box">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="dish-card__img"
                  loading="lazy"
                />
                
                {/* Veg / Non-Veg Indicator */}
                <div
                  className={`diet-badge ${dish.isVeg ? 'diet-badge--veg' : 'diet-badge--nonveg'}`}
                  title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  aria-label={dish.isVeg ? 'Vegetarian Dish' : 'Non-Vegetarian Dish'}
                >
                  <span className="diet-badge__symbol" />
                </div>

                {/* Spice Level Badge */}
                {dish.spiceLevel && (
                  <span className={`spice-badge spice-badge--${dish.spiceLevel.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Flame size={12} />
                    <span>{dish.spiceLevel}</span>
                  </span>
                )}

                {dish.isSignature && (
                  <span className="dish-card__ribbon">
                    <Sparkles size={11} /> Must Try
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="dish-card__body">
                <div className="dish-card__header">
                  <div>
                    <h3 className="dish-card__name">{dish.name}</h3>
                    <div className="dish-card__marathi">{dish.marathiName}</div>
                  </div>
                  <div className="dish-card__price-tag">
                    <span className="dish-card__currency">₹</span>
                    <span className="dish-card__price">{dish.price}</span>
                    <span className="dish-card__price-sub" title="Sample editable menu price">*sample</span>
                  </div>
                </div>

                <p className="dish-card__desc">{dish.description}</p>

                {dish.serves && (
                  <div className="dish-card__meta">
                    <Utensils size={13} />
                    <span>Serves: {dish.serves}</span>
                  </div>
                )}

                <div className="dish-card__actions">
                  <button
                    className="btn btn--outline-gold btn--sm dish-card__view-btn"
                    onClick={() => setSelectedDish(dish)}
                  >
                    Quick Details
                  </button>
                  <button
                    className="btn btn--primary btn--sm dish-card__book-btn"
                    onClick={scrollToReservation}
                  >
                    <CalendarCheck size={14} />
                    <span>Reserve to Taste</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note on Prices */}
        <div className="text-center" style={{ marginTop: 'var(--sp-2xl)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--clr-text-light)' }}>
            * Listed prices are editable sample restaurant menu prices. Dishes are prepared fresh to order. Unlimited Rassas offered with all Kolhapuri Thalis.
          </p>
        </div>
      </div>

      {/* Dish Quick View Modal */}
      {selectedDish && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedDish(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 540 }}
          >
            <div className="modal-card__header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
                <div
                  className={`diet-badge ${selectedDish.isVeg ? 'diet-badge--veg' : 'diet-badge--nonveg'}`}
                >
                  <span className="diet-badge__symbol" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--ff-serif)', fontSize: '1.35rem', margin: 0 }}>
                    {selectedDish.name}
                  </h3>
                  <p style={{ color: 'var(--clr-saffron)', margin: 0, fontWeight: 600 }}>
                    {selectedDish.marathiName}
                  </p>
                </div>
              </div>
              <button
                className="modal-card__close"
                onClick={() => setSelectedDish(null)}
                aria-label="Close dialog"
              >
                &times;
              </button>
            </div>

            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              style={{ width: '100%', height: 260, objectFit: 'cover' }}
            />

            <div style={{ padding: 'var(--sp-xl)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-md)' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--clr-maroon)' }}>
                  ₹{selectedDish.price} <small style={{ fontSize: '0.8rem', color: 'var(--clr-text-light)' }}>(Sample price)</small>
                </span>
                {selectedDish.spiceLevel && (
                  <span className={`spice-badge spice-badge--${selectedDish.spiceLevel.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Flame size={12} /> {selectedDish.spiceLevel}
                  </span>
                )}
              </div>

              <p style={{ color: 'var(--clr-text-mid)', lineHeight: 1.7, marginBottom: 'var(--sp-lg)' }}>
                {selectedDish.description}
              </p>

              <div style={{ background: 'var(--clr-cream)', padding: 'var(--sp-md)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--sp-xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--clr-maroon)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 4 }}>
                  <CheckCircle2 size={16} /> Authentic Traditional Preparation
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--clr-text-mid)' }}>
                  Cooked using cold-pressed oils, handmade Kolhapuri masalas, and served piping hot with traditional accompaniments.
                </div>
              </div>

              <div style={{ display: 'flex', gap: 'var(--sp-md)' }}>
                <button
                  className="btn btn--primary btn--full"
                  onClick={scrollToReservation}
                >
                  <CalendarCheck size={16} />
                  <span>Reserve Table For This Dish</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
