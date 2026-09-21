import { ICONS } from './icons';
import useScrollY from '../hooks/useScrollY';

const reduceMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function BackTop() {
  const show = useScrollY() > 700;
  return (
    <button
      className={`back-top${show ? ' show' : ''}`}
      id="backTop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
    >
      {ICONS.arrowUp}
    </button>
  );
}
