import { useState, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES } from '../data/hotelData';
import { ZoomIn, X, ChevronLeft, ChevronRight, Utensils } from 'lucide-react';

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY_IMAGES.map((i) => i.category)))];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const prevImage = useCallback(() => {
    setLightboxIdx((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIdx((prev) => (prev !== null ? (prev + 1) % filtered.length : null));
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIdx, prevImage, nextImage]);

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    setLightboxIdx(null);
  };

  const activeImg = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <section className="gallery section-pad" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">
            <span className="text-saffron">छायाचित्रे</span> • Authentic Food Gallery
          </div>
          <h2 className="section-title text-4xl" id="gallery-title">
            A Glimpse of Our <span style={{ color: 'var(--clr-saffron)' }}>Culinary Feast</span>
          </h2>
          <div className="divider-gold center" />
          <p className="section-desc center">
            Explore our authentic Maharashtrian preparations, royal thalis, rustic bhakris, and mouth-watering Kolhapuri delicacies.
          </p>
        </div>

        {/* Filters */}
        <div className="gallery__filters reveal" role="group" aria-label="Gallery category filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Gallery Grid */}
        <div className="gallery__grid reveal" role="list" aria-label="Maharashtrian food gallery">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              className="gallery__item"
              role="listitem"
              onClick={() => openLightbox(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
              tabIndex={0}
              aria-label={`View ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="gallery__item-img"
                loading="lazy"
              />
              <div className="gallery__item-overlay">
                <ZoomIn size={24} className="gallery__item-icon" />
                <div className="gallery__item-caption">
                  <div className="gallery__item-title">{img.title}</div>
                  <div className="gallery__item-marathi">{img.marathi}</div>
                  <span className="gallery__item-tag">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeImg.title}
        >
          <div className="lightbox__card" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox__close"
              onClick={closeLightbox}
              aria-label="Close photo preview"
            >
              <X size={24} />
            </button>

            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="lightbox__body">
              <img
                src={activeImg.src}
                alt={activeImg.title}
                className="lightbox__img"
              />
              <div className="lightbox__info">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <Utensils size={16} className="text-saffron" />
                  <span className="badge badge--gold">{activeImg.category}</span>
                </div>
                <h3 className="lightbox__title">{activeImg.title}</h3>
                <h4 className="lightbox__marathi">{activeImg.marathi}</h4>
                <p className="lightbox__desc">{activeImg.desc}</p>
                <div style={{ marginTop: 'var(--sp-md)', fontSize: '0.825rem', color: 'var(--clr-text-light)' }}>
                  Image {lightboxIdx! + 1} of {filtered.length}
                </div>
              </div>
            </div>

            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
