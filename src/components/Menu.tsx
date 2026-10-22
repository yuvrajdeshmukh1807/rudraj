import { useState, useMemo } from 'react';
import { FULL_MENU, MENU_CATEGORIES } from '../data/hotelData';
import { Search, Flame, Sparkles, UtensilsCrossed, CalendarDays } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category dish counts for instant user feedback
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: FULL_MENU.length,
    };
    MENU_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = FULL_MENU.filter((d) => d.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered dishes based on category, dietary preference, and search query
  const filteredDishes = useMemo(() => {
    return FULL_MENU.filter((dish) => {
      // Category check
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }
      // Dietary check
      if (dietaryFilter === 'veg' && !dish.isVeg) return false;
      if (dietaryFilter === 'nonveg' && dish.isVeg) return false;
      // Search check (name, Marathi name, or description)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = dish.name.toLowerCase().includes(q);
        const matchMarathi = dish.marathiName.toLowerCase().includes(q);
        const matchDesc = dish.description.toLowerCase().includes(q);
        if (!matchName && !matchMarathi && !matchDesc) return false;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  // Handle category switching with intelligent conflict resolution
  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    // If user selects non-veg category but dietary filter is pure veg, reset filter
    if (catId === 'nonveg' && dietaryFilter === 'veg') {
      setDietaryFilter('all');
    }
    // If user selects an exclusively vegetarian category while non-veg filter is on, reset filter
    else if (
      dietaryFilter === 'nonveg' &&
      ['breakfast', 'snacks', 'veg', 'desserts', 'beverages'].includes(catId)
    ) {
      setDietaryFilter('all');
    }
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  const activeCategoryObj = MENU_CATEGORIES.find((c) => c.id === activeCategory);

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
              id="menu-search-input"
              name="menuSearch"
              type="search"
              autoComplete="off"
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
              id="diet-filter-all"
              className={`diet-toggle__btn ${dietaryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setDietaryFilter('all')}
              role="radio"
              aria-checked={dietaryFilter === 'all'}
            >
              All Items ({FULL_MENU.length})
            </button>
            <button
              id="diet-filter-veg"
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
              id="diet-filter-nonveg"
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
          {MENU_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;
            return (
              <button
                key={cat.id}
                id={`menu-tab-${cat.id}`}
                className={`category-tab ${isSelected ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
                role="tab"
                aria-selected={isSelected}
                aria-controls="menu-items-container"
              >
                <span className="category-tab__label">
                  <span>{cat.label}</span>
                  <span className="category-tab__count">({count})</span>
                </span>
                <span className="category-tab__marathi">{cat.marathi}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div id="menu-items-container" aria-live="polite">
          {filteredDishes.length > 0 ? (
            <div className="menu-grid" key={`${activeCategory}-${dietaryFilter}`}>
              {filteredDishes.map((dish, i) => (
                <article
                  key={dish.id}
                  id={`dish-${dish.id}`}
                  className="menu-item-card"
                  style={{ animationDelay: `${(i % 8) * 0.03}s` }}
                >
                  <div className="menu-item-card__image-wrap">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="menu-item-card__img"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== '/restaurant-hero.jpg') {
                          target.src = '/restaurant-hero.jpg';
                        }
                      }}
                    />
                    <div
                      className={`diet-badge ${dish.isVeg ? 'diet-badge--veg' : 'diet-badge--nonveg'}`}
                      title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      aria-label={dish.isVeg ? 'Vegetarian Dish' : 'Non-Vegetarian Dish'}
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
                </article>
              ))}
            </div>
          ) : (
            <div className="menu-empty text-center" role="status">
              <UtensilsCrossed size={48} className="menu-empty__icon" />
              <h3 className="menu-empty__title">No dishes matched your selection</h3>
              <p className="menu-empty__text">
                {searchQuery
                  ? `No items found matching "${searchQuery}" in ${activeCategoryObj?.label || 'this category'}.`
                  : `No dishes available under the current filter combination in ${activeCategoryObj?.label || 'this category'}.`}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                {searchQuery && (
                  <button className="btn btn--outline-gold" onClick={() => setSearchQuery('')}>
                    Clear Search
                  </button>
                )}
                {dietaryFilter !== 'all' && (
                  <button className="btn btn--outline-gold" onClick={() => setDietaryFilter('all')}>
                    Show Both Veg & Non-Veg
                  </button>
                )}
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    setActiveCategory('all');
                    setDietaryFilter('all');
                    setSearchQuery('');
                  }}
                >
                  View All Dishes ({FULL_MENU.length})
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="menu-cta-banner reveal">
          <div className="menu-cta-banner__content">
            <h3 className="menu-cta-banner__title">Looking for Traditional Group & Family Dining?</h3>
            <p className="menu-cta-banner__desc">
              We arrange special Shahi Maharashtrian Pangat (पंगत) feasts for family functions, birthdays, and celebrations.
            </p>
          </div>
          <button className="btn btn--primary" onClick={scrollToReservation} id="menu-reserve-family-btn">
            <CalendarDays size={16} />
            <span>Reserve Family Table</span>
          </button>
        </div>
      </div>
    </section>
  );
}
