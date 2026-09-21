import { useEffect, useState } from 'react';

/* Window scroll position (throttled with requestAnimationFrame). */
export default function useScrollY() {
  const [y, setY] = useState(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          setY(window.scrollY);
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return y;
}
