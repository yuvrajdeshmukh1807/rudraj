import { RESTAURANT } from '../data/hotelData';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

const contactItems = [
  {
    icon: <MapPin size={20} />,
    title: 'Restaurant Location',
    value: RESTAURANT.address.full,
  },
  {
    icon: <Phone size={20} />,
    title: 'Table Reservations & Orders',
    value: RESTAURANT.phone,
    href: `tel:${RESTAURANT.phone.replace(/\s/g, '')}`,
  },
  {
    icon: <Mail size={20} />,
    title: 'Email',
    value: RESTAURANT.email,
    href: `mailto:${RESTAURANT.email}`,
  },
  {
    icon: <Clock size={20} />,
    title: 'Dining Hours',
    value: `Lunch: ${RESTAURANT.timings.lunch} | Dinner: ${RESTAURANT.timings.dinner} (${RESTAURANT.timings.days})`,
  },
];

export default function Contact() {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${RESTAURANT.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(
        'Hello Hotel Rudrajya! I would like to enquire about table reservation and today’s special Maharashtrian dishes.'
      )}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${RESTAURANT.phone.replace(/\s/g, '')}`;
  };

  return (
    <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">
            <span className="text-saffron">संपर्क आणि पत्ता</span> • Visit & Contact
          </div>
          <h2 className="section-title text-4xl" id="contact-title" style={{ color: '#FFFFFF' }}>
            Visit <span style={{ color: 'var(--clr-saffron)' }}>Hotel Rudrajya</span>
          </h2>
          <div className="divider-gold center" />
          <p className="section-desc center" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            Join us for an unforgettable authentic Maharashtrian dining feast with family and friends. We welcome you with open arms.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Details List */}
          <div>
            <div className="contact__info-list reveal">
              {contactItems.map((item) => (
                <div key={item.title} className="contact__info-item">
                  <div className="contact__info-icon" aria-hidden="true">{item.icon}</div>
                  <div>
                    <div className="contact__info-title">{item.title}</div>
                    <div className="contact__info-value">
                      {item.href ? (
                        <a href={item.href} id={`contact-${item.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__actions reveal">
              <button
                className="btn btn--primary"
                id="contact-call-btn"
                onClick={handleCall}
                type="button"
              >
                <Phone size={16} />
                Call Restaurant
              </button>
              <button
                className="btn btn--whatsapp"
                id="contact-whatsapp-btn"
                onClick={handleWhatsApp}
                type="button"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Map / Directions Card */}
          <div className="contact__map-wrapper reveal">
            <div className="restaurant-map-card">
              <div className="restaurant-map-card__header">
                <Navigation size={22} className="text-saffron" />
                <div>
                  <h3 style={{ color: 'white', margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>
                    {RESTAURANT.name}
                  </h3>
                  <p style={{ color: 'var(--clr-saffron)', margin: 0, fontSize: '0.85rem' }}>
                    {RESTAURANT.marathiName} — Authentic Dining
                  </p>
                </div>
              </div>

              <div className="restaurant-map-placeholder">
                <div style={{ textAlign: 'center', padding: 'var(--sp-xl)' }}>
                  <MapPin size={36} className="text-saffron" style={{ margin: '0 auto var(--sp-sm)' }} />
                  <p style={{ color: 'white', fontWeight: 600, marginBottom: 4 }}>
                    {RESTAURANT.address.full}
                  </p>
                  <p style={{ color: 'hsl(36 15% 70%)', fontSize: '0.85rem', marginBottom: 'var(--sp-lg)' }}>
                    Ample parking space available for family vehicles and tourist buses.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline-gold btn--sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="restaurant-map-footer">
                <div className="map-badge">
                  <Clock size={14} />
                  <span>Open Today: 11:30 AM – 3:30 PM &amp; 7:00 PM – 11:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
