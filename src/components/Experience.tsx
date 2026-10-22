import { DINING_EXPERIENCE } from '../data/hotelData';
import { Flame, Utensils, Wheat, HeartHandshake, Sparkles, Users } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame size={24} />,
  Utensils: <Utensils size={24} />,
  Wheat: <Wheat size={24} />,
  HeartHandshake: <HeartHandshake size={24} />,
  Sparkles: <Sparkles size={24} />,
  Users: <Users size={24} />,
};

export default function Experience() {
  return (
    <section className="experience section-pad" id="experience" aria-labelledby="experience-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal">
          <div className="section-eyebrow">
            <span className="text-saffron">का निवडावे रुद्रराज्य?</span> • Why Dine With Us
          </div>
          <h2 className="section-title text-4xl" id="experience-title">
            The Rudrajya Dining Experience
          </h2>
          <div className="divider-gold center" />
          <p className="section-desc center" style={{ maxWidth: 700 }}>
            We believe true Maharashtrian food is an emotion. Every element of our dining experience is rooted in authenticity, cleanliness, and the warmth of home.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="experience-grid">
          {DINING_EXPERIENCE.map((item, i) => (
            <div
              key={item.title}
              className="experience-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="experience-card__icon" aria-hidden="true">
                {iconMap[item.icon] || <Sparkles size={24} />}
              </div>
              <div className="experience-card__content">
                <h3 className="experience-card__title">{item.title}</h3>
                <div className="experience-card__sub">{item.subtitle}</div>
                <p className="experience-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Assurance Strip */}
        <div className="experience-assurance reveal">
          <div className="experience-assurance__item">
            <span className="experience-assurance__number">100%</span>
            <span className="experience-assurance__label">Fresh Cold-Pressed Groundnut Oil</span>
          </div>
          <div className="experience-assurance__divider" />
          <div className="experience-assurance__item">
            <span className="experience-assurance__number">No MSG</span>
            <span className="experience-assurance__label">No Artificial Colors or Preservatives</span>
          </div>
          <div className="experience-assurance__divider" />
          <div className="experience-assurance__item">
            <span className="experience-assurance__number">Pure Desi</span>
            <span className="experience-assurance__label">Traditional A2 Cow Ghee on Puran Poli</span>
          </div>
          <div className="experience-assurance__divider" />
          <div className="experience-assurance__item">
            <span className="experience-assurance__number">Daily</span>
            <span className="experience-assurance__label">Hand-Pounded Kolhapuri Masalas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
