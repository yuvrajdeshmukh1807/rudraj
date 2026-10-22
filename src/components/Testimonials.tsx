import { TESTIMONIALS } from '../data/hotelData';
import { Star, Quote, Utensils } from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? 'var(--clr-saffron)' : 'transparent'}
          stroke={i < rating ? 'var(--clr-saffron)' : 'var(--clr-border)'}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials section-pad bg-cream" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center reveal">
          <div className="section-eyebrow">
            <span className="text-saffron">ग्राहकांचे अनुभव</span> • Guest Experiences
          </div>
          <h2 className="section-title text-4xl" id="testimonials-title">
            Loved by Food Enthusiasts
          </h2>
          <div className="divider-gold center" />
          <p className="section-desc center" style={{ maxWidth: 640 }}>
            Hear from families, travelers, and traditional food connoisseurs who experienced the authentic flavors of Hotel Rudrajya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="testimonial-card__top">
                <Quote size={28} className="testimonial-card__quote-icon" aria-hidden="true" />
                <StarRating rating={t.rating} />
              </div>

              <p className="testimonial-card__comment">&ldquo;{t.comment}&rdquo;</p>

              <div className="testimonial-card__dish">
                <Utensils size={13} />
                <span>Loved Dish: <strong>{t.dish}</strong></span>
              </div>

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__location">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
