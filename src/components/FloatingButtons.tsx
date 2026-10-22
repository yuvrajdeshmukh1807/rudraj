import { HOTEL } from '../data/hotelData';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { useBackToTop } from '../hooks/useScrollBehavior';

export default function FloatingButtons() {
  const { visible, scrollToTop } = useBackToTop();

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${HOTEL.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent('Hello Hotel Rudrajya! I would like to enquire about table booking and today’s special Maharashtrian menu.')}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${HOTEL.phone.replace(/\s/g, '')}`;
  };

  return (
    <>
      {/* FAB group — bottom left */}
      <div className="fab-group" role="group" aria-label="Quick contact buttons">
        {/* WhatsApp */}
        <button
          className="fab fab-whatsapp"
          onClick={handleWhatsApp}
          aria-label="Chat on WhatsApp"
          id="whatsapp-fab"
          type="button"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={26} fill="white" strokeWidth={1.5} />
        </button>

        {/* Phone call */}
        <button
          className="fab fab-call"
          onClick={handleCall}
          aria-label={`Call us: ${HOTEL.phone}`}
          id="call-fab"
          type="button"
          title={`Call: ${HOTEL.phone}`}
        >
          <Phone size={22} />
        </button>
      </div>

      {/* Back to top — bottom right */}
      <button
        className={`back-to-top ${visible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        id="back-to-top"
        type="button"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
