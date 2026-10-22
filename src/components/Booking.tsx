import { useState, useEffect } from 'react';
import { RESTAURANT } from '../data/hotelData';
import { useToast } from '../context/ToastContext';
import {
  CalendarDays,
  Users,
  Phone,
  Mail,
  User,
  Clock,
  MessageSquare,
  CheckCircle2,
  CalendarCheck,
  Send,
  AlertCircle,
  ExternalLink,
  UtensilsCrossed,
} from 'lucide-react';

interface FormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  guests: string;
  seatingPreference: string;
  requests: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  timeSlot?: string;
  guests?: string;
}

const today = new Date().toISOString().split('T')[0];

const TIME_SLOTS = [
  // Lunch slots
  { group: 'Lunch Hours (11:30 AM – 3:30 PM)', slots: ['11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM'] },
  // Dinner slots
  { group: 'Dinner Hours (7:00 PM – 11:00 PM)', slots: ['7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'] },
];

export default function Booking() {
  const { addToast } = useToast();

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    date: today,
    timeSlot: '1:00 PM',
    guests: '2',
    seatingPreference: 'AC Family Hall',
    requests: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState<FormState | null>(null);

  // Listen for quick reserve dispatched from Hero
  useEffect(() => {
    const handleQuickReserve = (e: Event) => {
      const customEvent = e as CustomEvent<{ date: string; mealTime: string; guests: string }>;
      if (customEvent.detail) {
        setForm((prev) => ({
          ...prev,
          date: customEvent.detail.date || prev.date,
          guests: customEvent.detail.guests || prev.guests,
          timeSlot: customEvent.detail.mealTime === 'dinner' ? '8:00 PM' : '1:00 PM',
        }));
      }
    };
    window.addEventListener('rudrajya_quick_reserve', handleQuickReserve);
    return () => window.removeEventListener('rudrajya_quick_reserve', handleQuickReserve);
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const cleanPhone = form.phone.replace(/[\s\-()]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please provide your mobile number.';
    } else if (!/^\+?[0-9]{10,13}$/.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number.';
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!form.date) {
      newErrors.date = 'Please pick a date for dining.';
    }

    if (!form.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred dining time slot.';
    }

    if (!form.guests || parseInt(form.guests, 10) < 1) {
      newErrors.guests = 'Please enter number of guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      addToast('Please complete the required reservation fields.', 'error');
      return;
    }

    setSubmitting(true);

    // Simulate reservation submission
    setTimeout(() => {
      setSubmitting(false);
      setConfirmedReservation({ ...form });
      addToast(`Table request received for ${form.name}!`, 'success');
    }, 1200);
  };

  const getWhatsAppLink = (res: FormState) => {
    const text = encodeURIComponent(
      `Hello Hotel Rudrajya! I would like to reserve a table:\n• Name: ${res.name}\n• Date: ${res.date}\n• Time: ${res.timeSlot}\n• Guests: ${res.guests} Persons\n• Seating: ${res.seatingPreference}\n${res.requests ? `• Special Requests: ${res.requests}\n` : ''}Please confirm table availability.`
    );
    return `https://wa.me/${RESTAURANT.whatsapp.replace(/\+/g, '')}?text=${text}`;
  };

  return (
    <section
      className="booking section-pad bg-cream"
      id="reservation"
      aria-labelledby="reservation-title"
    >
      {/* Hidden anchor for backward compatibility */}
      <span id="booking" style={{ position: 'absolute', top: -80, visibility: 'hidden' }} />

      <div className="container">
        {/* Header */}
        <div className="section-header text-center reveal">
          <div className="section-eyebrow">
            <span className="text-saffron">टेबल आरक्षण</span> • Table Reservation
          </div>
          <h2 className="section-title text-4xl" id="reservation-title">
            Book Your Dining Table
          </h2>
          <div className="divider-gold center" />
          <p className="section-desc center" style={{ maxWidth: 660 }}>
            Reserve your table in advance to experience our traditional Maharashtrian hospitality without waiting. Special arrangements available for family pangat feasts.
          </p>
        </div>

        <div className="reservation-container reveal">
          {/* Form Side */}
          <div className="reservation-card">
            {confirmedReservation ? (
              <div className="reservation-success">
                <div className="reservation-success__icon-wrap">
                  <CheckCircle2 size={48} className="text-success" />
                </div>
                <h3 className="reservation-success__title">Table Request Received!</h3>
                <p className="reservation-success__subtitle">
                  Thank you, <strong>{confirmedReservation.name}</strong>. Here are your booking details:
                </p>

                <div className="reservation-summary">
                  <div className="reservation-summary__row">
                    <span>Date & Time:</span>
                    <strong>{confirmedReservation.date} at {confirmedReservation.timeSlot}</strong>
                  </div>
                  <div className="reservation-summary__row">
                    <span>Number of Guests:</span>
                    <strong>{confirmedReservation.guests} Persons</strong>
                  </div>
                  <div className="reservation-summary__row">
                    <span>Seating Preference:</span>
                    <strong>{confirmedReservation.seatingPreference}</strong>
                  </div>
                  <div className="reservation-summary__row">
                    <span>Contact Phone:</span>
                    <strong>{confirmedReservation.phone}</strong>
                  </div>
                  {confirmedReservation.requests && (
                    <div className="reservation-summary__row">
                      <span>Special Requests:</span>
                      <strong>{confirmedReservation.requests}</strong>
                    </div>
                  )}
                </div>

                {/* Transparency Note */}
                <div className="demo-notice">
                  <div className="demo-notice__header">
                    <AlertCircle size={16} />
                    <span>Frontend Demonstration Notice</span>
                  </div>
                  <p className="demo-notice__text">
                    This reservation form is currently in <strong>frontend-only demonstration mode</strong> (no live restaurant database attached). In production, this can be seamlessly wired to an Email/SMS gateway, POS database, or Formspree.
                  </p>
                </div>

                {/* Direct instant WhatsApp action */}
                <div className="reservation-success__actions">
                  <a
                    href={getWhatsAppLink(confirmedReservation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp btn--full"
                  >
                    <span>Instant Confirmation via WhatsApp</span>
                    <ExternalLink size={16} />
                  </a>

                  <button
                    className="btn btn--outline btn--full"
                    onClick={() => setConfirmedReservation(null)}
                  >
                    Make Another Reservation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="reservation-form">
                <div className="form-grid">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="res-name" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <User size={16} className="input-icon" />
                      <input
                        id="res-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="e.g., Sachin Deshmukh"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label htmlFor="res-phone" className="form-label">
                      Phone Number <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <Phone size={16} className="input-icon" />
                      <input
                        id="res-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+91 98220 00000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="res-email" className="form-label">
                      Email Address <span className="optional">(optional)</span>
                    </label>
                    <div className="input-wrap">
                      <Mail size={16} className="input-icon" />
                      <input
                        id="res-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="sachin@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  {/* Number of Guests */}
                  <div className="form-group">
                    <label htmlFor="res-guests" className="form-label">
                      Number of Guests <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <Users size={16} className="input-icon" />
                      <select
                        id="res-guests"
                        name="guests"
                        autoComplete="off"
                        className="form-input"
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5 Persons</option>
                        <option value="6">6 Persons (Family)</option>
                        <option value="8">8 Persons (Large Family)</option>
                        <option value="12">10-15 Persons (Pangat Celebration)</option>
                        <option value="20">20+ Persons (Private Hall Booking)</option>
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <label htmlFor="res-date" className="form-label">
                      Dining Date <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <CalendarDays size={16} className="input-icon" />
                      <input
                        id="res-date"
                        name="date"
                        type="date"
                        autoComplete="off"
                        min={today}
                        className={`form-input ${errors.date ? 'error' : ''}`}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        required
                      />
                    </div>
                    {errors.date && <span className="field-error">{errors.date}</span>}
                  </div>

                  {/* Time Slot */}
                  <div className="form-group">
                    <label htmlFor="res-time" className="form-label">
                      Dining Time Slot <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <Clock size={16} className="input-icon" />
                      <select
                        id="res-time"
                        name="timeSlot"
                        autoComplete="off"
                        className="form-input"
                        value={form.timeSlot}
                        onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                      >
                        {TIME_SLOTS.map((group) => (
                          <optgroup key={group.group} label={group.group}>
                            {group.slots.map((slot) => (
                              <option key={slot} value={slot}>
                                {slot}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div className="form-group form-group--full">
                    <label htmlFor="res-seating" className="form-label">
                      Seating Preference
                    </label>
                    <div className="input-wrap">
                      <UtensilsCrossed size={16} className="input-icon" />
                      <select
                        id="res-seating"
                        name="seatingPreference"
                        autoComplete="off"
                        className="form-input"
                        value={form.seatingPreference}
                        onChange={(e) => setForm({ ...form, seatingPreference: e.target.value })}
                      >
                        <option value="AC Family Hall">AC Family Dining Hall (Air Conditioned)</option>
                        <option value="Traditional Baithak">Traditional Baithak / Pangat (Cultural Floor Seating)</option>
                        <option value="Garden Courtyard">Open Garden Courtyard (Natural Breeze)</option>
                        <option value="Window View Table">Quiet Window Table</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="form-group form-group--full">
                    <label htmlFor="res-requests" className="form-label">
                      Special Requests / Occasion <span className="optional">(optional)</span>
                    </label>
                    <div className="input-wrap">
                      <MessageSquare size={16} className="input-icon" style={{ top: 14 }} />
                      <textarea
                        id="res-requests"
                        name="requests"
                        autoComplete="off"
                        rows={3}
                        className="form-input form-textarea"
                        placeholder="e.g. Birthday celebration, special Kolhapuri mutton thali pre-order, high chair needed for child..."
                        value={form.requests}
                        onChange={(e) => setForm({ ...form, requests: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-actions" style={{ marginTop: 'var(--sp-xl)' }}>
                  <button
                    type="submit"
                    className="btn btn--primary btn--full btn--lg"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>Reserving Table...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Confirm Table Reservation</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="form-disclaimer">
                  <p>
                    🔒 Your details are secure. Immediate confirmation is also available via direct phone or WhatsApp.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Restaurant Info Sidebar */}
          <div className="reservation-sidebar">
            <div className="res-sidebar-box">
              <h3 className="res-sidebar-title">
                <CalendarCheck size={20} className="text-saffron" />
                <span>Dining Information</span>
              </h3>

              <div className="res-timing-item">
                <div className="res-timing-label">Lunch Service</div>
                <div className="res-timing-val">{RESTAURANT.timings.lunch}</div>
                <div className="res-timing-note">Freshly made Bhakris & Unlimited Rassa Thalis</div>
              </div>

              <div className="res-timing-item">
                <div className="res-timing-label">Dinner Service</div>
                <div className="res-timing-val">{RESTAURANT.timings.dinner}</div>
                <div className="res-timing-note">Candlelit & Traditional Pangat Family Dining</div>
              </div>

              <div className="res-timing-item">
                <div className="res-timing-label">Operating Days</div>
                <div className="res-timing-val">{RESTAURANT.timings.days}</div>
              </div>
            </div>

            <div className="res-sidebar-box res-sidebar-box--highlight">
              <h4 className="res-highlight-title">Need Immediate Table Confirmation?</h4>
              <p className="res-highlight-desc">
                If you are arriving within the next 30 minutes, feel free to call our reception desk directly:
              </p>
              <a
                href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`}
                className="btn btn--secondary btn--full"
              >
                <Phone size={16} />
                <span>Call: {RESTAURANT.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
