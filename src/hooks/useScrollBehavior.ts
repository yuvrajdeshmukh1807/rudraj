import { useEffect, useState, useCallback, useRef } from 'react';

export function useScrollReveal() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observe = () => {
      observer.current?.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
      );

      const elements = document.querySelectorAll(
        '.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)'
      );
      elements.forEach((el) => observer.current!.observe(el));
    };

    // Initial observation
    observe();

    // Re-observe after a tick so any lazy-rendered components are caught
    const t = setTimeout(observe, 200);

    return () => {
      clearTimeout(t);
      observer.current?.disconnect();
    };
  }, []);
}

export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(() => 
    typeof window !== 'undefined' ? window.scrollY > threshold : false
  );
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);
  return scrolled;
}

export function useBackToTop() {
  const [visible, setVisible] = useState(() => 
    typeof window !== 'undefined' ? window.scrollY > 400 : false
  );
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
  return { visible, scrollToTop };
}
