import { useEffect, useRef } from 'react';

/* ==========================================================================
   SCROLL REVEAL — adds `.in` when the element scrolls into view.
   Shared observer; unobserves after reveal (same as the original site).
   ========================================================================== */

let observer = null;
function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            obs.unobserve(en.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
  }
  return observer;
}

const reduceMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Renders a <div class="reveal [d1..d4] [extra classes]"> that fades/slides
 * in on scroll. Pass utility classes via `className`.
 */
export default function Reveal({ className = '', as: Tag = 'div', children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (reduceMotion) {
      el.classList.add('in');
      return undefined;
    }
    const obs = getObserver();
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
