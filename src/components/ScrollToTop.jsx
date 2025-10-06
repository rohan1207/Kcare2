import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ensures the page jumps to the top instantly on every route change
// even if global CSS enables smooth scrolling.
export default function ScrollToTop({ smooth = false }) {
  const { pathname } = useLocation();

  // Prevent browser from restoring previous scroll on back/forward
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = 'manual';
      return () => {
        window.history.scrollRestoration = prev;
      };
    }
  }, []);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;

    if (!smooth) {
      // Temporarily disable smooth scrolling to avoid animated scroll from bottom
      html.style.scrollBehavior = 'auto';
    }

    window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' });

    // Restore previous behavior after the tick
    const id = setTimeout(() => {
      html.style.scrollBehavior = previousBehavior || '';
    }, 0);

    return () => clearTimeout(id);
  }, [pathname, smooth]);

  return null;
}
