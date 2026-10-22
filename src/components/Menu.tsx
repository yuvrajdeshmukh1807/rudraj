import { useState, useMemo } from 'react';
import { FULL_MENU, MENU_CATEGORIES } from '../data/hotelData';
import { Search, Flame, Sparkles, UtensilsCrossed, CalendarDays } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = useMemo(() => {
    return FULL_MENU.filter((dish) => {
      // Category check
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }
      // Dietary check
      if (dietaryFilter === 'veg' && !dish.isVeg) return false;
      if (dietaryFilter === 'nonveg' && dish.isVeg) return false;
      // Search check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = dish.name.toLowerCase().includes(q);
        const matchMarathi = dish.marathiName.toLowerCase().includes(q);
        const matchDesc = dish.description.toLowerCase().includes(q);
        if (!matchName && !matchMarathi && !matchDesc) return false;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="menu-section section-pad bg-cream" id="menu" aria-labelledby="menu-title">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal">
          <div className="section-eyebrow">
            <span className="text-saffron">आमचा मेनू</span> • Traditional Dining Selection
          </div>
          <h2 className="section-title text-4xl" id="menu-title">
            The Rudrajya Restaurant Menu
          </h2>
          <div className="divider-gold center" />
          <p className="section-desc center" style={{ maxWidth: 720 }}>
            Every dish is an invitation to taste the soul of Maharashtra. Prepared with cold-pressed oils, pure spices, fresh vegetables, and time-honored slow cooking.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="menu-controls reveal">
          {/* Search Input */}
          <div className="menu-search">
            <Search size={18} className="menu-search__icon" />
            <input
              type="text"
              placeholder="Search dishes (e.g., Misal, Rassa, Pithla, Bhakri, Puran Poli)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search__input"
              aria-label="Search restaurant menu"
            />
            {searchQuery && (
              <button
                className="menu-search__clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          {/* Dietary Toggle */}
          <div className="diet-toggle" role="radiogroup" aria-label="Dietary filter">
            <button
              className={`diet-toggle__btn ${dietaryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setDietaryFilter('all')}
              role="radio"
              aria-checked={dietaryFilter === 'all'}
            >
              All Items ({FULL_MENU.length})
            </button>
            <button
              className={`diet-toggle__btn ${dietaryFilter === 'veg' ? 'active' : ''}`}
              onClick={() => setDietaryFilter('veg')}
              role="radio"
              aria-checked={dietaryFilter === 'veg'}
            >
              <span className="diet-badge diet-badge--veg diet-badge--inline">
                <span className="diet-badge__symbol" />
              </span>
              <span>Pure Veg</span>
            </button>
            <button
              className={`diet-toggle__btn ${dietaryFilter === 'nonveg' ? 'active' : ''}`}
              onClick={() => setDietaryFilter('nonveg')}
              role="radio"
              aria-checked={dietaryFilter === 'nonveg'}
            >
              <span className="diet-badge diet-badge--nonveg diet-badge--inline">
                <span className="diet-badge__symbol" />
              </span>
              <span>Kolhapuri Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs reveal" role="tablist" aria-label="Menu categories">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              <span className="category-tab__label">{cat.label}</span>
              <span className="category-tab__marathi">{cat.marathi}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredDishes.length > 0 ? (
          <div className="menu-grid">
            {filteredDishes.map((dish, i) => (
              <div
                key={dish.id}
                className="menu-item-card reveal"
                style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
              >
                <div className="menu-item-card__image-wrap">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="menu-item-card__img"
                    loading="lazy"
                  />
                  <div
                    className={`diet-badge ${dish.isVeg ? 'diet-badge--veg' : 'diet-badge--nonveg'}`}
                    title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  >
                    <span className="diet-badge__symbol" />
                  </div>
                </div>

                <div className="menu-item-card__body">
                  <div className="menu-item-card__header">
                    <div>
                      <h3 className="menu-item-card__title">{dish.name}</h3>
                      <div className="menu-item-card__marathi">{dish.marathiName}</div>
                    </div>
                    <div className="menu-item-card__price">
                      <span className="menu-item-card__currency">₹</span>
                      <span>{dish.price}</span>
                      <small className="menu-item-card__price-sample">*sample</small>
                    </div>
                  </div>

                  <p className="menu-item-card__desc">{dish.description}</p>

                  <div className="menu-item-card__footer">
                    <div className="menu-item-card__tags">
                      {dish.spiceLevel && (
                        <span className={`spice-pill spice-pill--${dish.spiceLevel.toLowerCase().replace(/\s+/g, '-')}`}>
                          <Flame size={11} /> {dish.spiceLevel}
                        </span>
                      )}
                      {dish.isSignature && (
                        <span className="signature-pill">
                          <Sparkles size={11} /> Special
                        </span>
                      )}
                      {dish.serves && (
                        <span className="serves-pill">
                          {dish.serves}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="menu-empty text-center">
            <UtensilsCrossed size={48} className="menu-empty__icon" />
            <h3 className="menu-empty__title">No dishes matched your filter</h3>
            <p className="menu-empty__text">Try adjusting your search query or switching category tabs.</p>
            <button
              className="btn btn--outline-gold"
              onClick={() => {
                setActiveCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="menu-cta-banner reveal">
          <div className="menu-cta-banner__content">
            <h3 className="menu-cta-banner__title">Looking for Traditional Group & Family Dining?</h3>
            <p className="menu-cta-banner__desc">
              We arrange special Shahi Maharashtrian Pangat (पंगत) feasts for family functions, birthdays, and celebrations.
            </p>
          </div>
          <button className="btn btn--primary" onClick={scrollToReservation}>
            <CalendarDays size={16} />
            <span>Reserve Family Table</span>
          </button>
        </div>
      </div>
    </section>
  );
}
