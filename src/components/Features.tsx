import { Flame, Sparkles, Wheat, Heart } from 'lucide-react';

const FEATURES = [
  {
    icon: <Flame size={22} strokeWidth={1.75} />,
    title: 'चुलीवरची अस्सल चव',
    subtitle: 'Wood-Fired Slow Cooking',
    desc: 'Traditional slow earthen cooking infusing authentic rustic aroma into every dish.',
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.75} />,
    title: 'घरगुती कोल्हापुरी मसाले',
    subtitle: 'Stone-Ground Masalas',
    desc: 'Authentic heirloom Kanda-Lahsuni and Goda masalas pounded fresh without preservatives.',
  },
  {
    icon: <Wheat size={22} strokeWidth={1.75} />,
    title: 'गरमागरम भाकरी व चपाती',
    subtitle: 'Fresh Iron-Tawa Bhakris',
    desc: 'Piping hot, hand-patted Jowar, Bajra and Nachni bhakris served straight from the tawa.',
  },
  {
    icon: <Heart size={22} strokeWidth={1.75} />,
    title: 'अतिथी देवो भव',
    subtitle: 'Warm Traditional Hospitality',
    desc: 'Loving Maharashtrian service, generous thalis, and a dedicated family-friendly atmosphere.',
  },
];

export default function Features() {
  return (
    <div className="features-strip" aria-label="Restaurant culinary highlights">
      <div className="container features-strip__grid">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="feature-item reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="feature-item__header">
              <div className="feature-item__icon" aria-hidden="true">{f.icon}</div>
              <div className="feature-item__headings">
                <div className="feature-item__title">{f.title}</div>
                <div className="feature-item__sub">{f.subtitle}</div>
              </div>
            </div>
            <div className="feature-item__desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
