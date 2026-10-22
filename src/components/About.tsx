import { RESTAURANT } from '../data/hotelData';
import { Flame, UtensilsCrossed, Heart, Sparkles } from 'lucide-react';

const culinaryPillars = [
  {
    icon: <Flame size={20} />,
    title: 'खलबत्त्यात कुटलेले अस्सल मसाले',
    subtitle: 'Stone-Ground Kolhapuri Masalas',
    desc: 'We roast whole spices on traditional iron tawas and stone-pound our signature Kanda-Lahsuni and Goda masalas fresh each week, with no artificial flavors or preservatives.',
  },
  {
    icon: <UtensilsCrossed size={20} />,
    title: 'चुलीवरचा अस्सल स्वाद आणि गरमागरम भाकरी',
    subtitle: 'Wood-Fired Simmering & Tawa Bhakri',
    desc: 'From slow-simmered earthen pot Rassas to hand-patted Jowar and Bajra bhakris baked on open flames, we honor the rural cooking techniques of Maharashtra.',
  },
  {
    icon: <Heart size={20} />,
    title: 'आपुलकीचा पाहुणचार आणि तृप्तीचे जेवण',
    subtitle: 'Warm Traditional Hospitality',
    desc: 'Rooted in the philosophy of "अतिथी देवो भव", we serve our guests with genuine warmth, generous portions, and unlimited rassas with every thali.',
  },
];

export default function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="about section-pad" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          {/* Authentic Food Imagery */}
          <div className="about__images reveal-left">
            <img
              src="/pithla-bhakri.jpg"
              alt="Authentic Maharashtrian Pithla Bhakri with green thecha and fresh butter at Hotel Rudrajya"
              className="about__img-main"
              loading="lazy"
            />
            <img
              src="/kolhapuri-rassa.jpg"
              alt="Kolhapuri Tambda and Pandhra Rassa with tender chicken sukka"
              className="about__img-accent"
              loading="lazy"
            />
            <div className="about__badge" aria-label="Authentic Maharashtrian Cuisine">
              <span className="about__badge-year">अस्सल चव</span>
              <span className="about__badge-label">100% Traditional</span>
            </div>
          </div>

          {/* Story Content */}
          <div className="reveal-right">
            <div className="section-eyebrow">
              <span className="text-saffron">आमची परंपरा</span> • Our Culinary Legacy
            </div>
            
            <h2 className="section-title text-4xl" id="about-title">
              Preserving the Soul of<br />
              <span style={{ color: 'var(--clr-saffron)' }}>Maharashtrian &amp; Kolhapuri</span> Flavors
            </h2>
            
            <div className="divider-gold left" />
            
            <p className="section-desc" style={{ marginBottom: '1rem' }}>
              {RESTAURANT.description}
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--clr-text-mid)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              In Maharashtra, traditional dining establishments have always been proudly called &ldquo;Hotel&rdquo; — a place where travelers, families, and food lovers gather for wholesome, unforgettable meals. At <strong>{RESTAURANT.name}</strong>, we celebrate that living heritage every single day through unhurried cooking, time-tested family recipes, and the fiery warmth of Kolhapuri hospitality.
            </p>

            {/* Culinary pillars */}
            <div className="about__pillars">
              {culinaryPillars.map((p) => (
                <div key={p.title} className="about__pillar-item">
                  <div className="about__pillar-icon" aria-hidden="true">
                    {p.icon}
                  </div>
                  <div>
                    <div className="about__pillar-title">{p.title}</div>
                    <div className="about__pillar-sub">{p.subtitle}</div>
                    <div className="about__pillar-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                className="btn btn--primary"
                onClick={() => scrollTo('menu')}
              >
                <UtensilsCrossed size={16} />
                <span>Explore Full Menu</span>
              </button>
              <button
                className="btn btn--outline"
                onClick={() => scrollTo('reservation')}
              >
                <Sparkles size={16} />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
