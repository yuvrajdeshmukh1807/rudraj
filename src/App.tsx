import './index.css';
import './components.css';

import { ToastProvider } from './components/Toast';
import { useScrollReveal } from './hooks/useScrollBehavior';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Specialities from './components/Specialities';
import Menu from './components/Menu';
import About from './components/About';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function AppContent() {
  useScrollReveal();

  return (
    <div id="app">
      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="skip-link"
        style={{
          position: 'absolute',
          top: '-100%',
          left: '1rem',
          zIndex: 9999,
          padding: '0.5rem 1rem',
          background: 'var(--clr-saffron)',
          color: 'white',
          borderRadius: 'var(--radius-sm)',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'top 0.2s',
        }}
        onFocus={(e) => { e.currentTarget.style.top = '1rem'; }}
        onBlur={(e) => { e.currentTarget.style.top = '-100%'; }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* Hero — authentic Maharashtrian restaurant presentation with table reservation bar */}
        <Hero />

        {/* Features strip — culinary pillars: wood-fired, heirloom masalas, fresh bhakri, hospitality */}
        <Features />

        {/* Signature Dishes — Misal Pav, Pithla Bhakri, Kolhapuri Rassa, Puran Poli, Thalis */}
        <Specialities />

        {/* Comprehensive Restaurant Menu — Breakfast, Snacks, Veg, Non-Veg, Thalis, Desserts, Beverages */}
        <Menu />

        {/* About the Restaurant & Heritage */}
        <About />

        {/* The Rudrajya Dining Experience / Why Choose Us */}
        <Experience />

        {/* Authentic Maharashtrian Food Gallery */}
        <Gallery />

        {/* Guest Testimonials & Reviews */}
        <Testimonials />

        {/* Table Reservation Form */}
        <Booking />

        {/* Contact, Timings & Location */}
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
