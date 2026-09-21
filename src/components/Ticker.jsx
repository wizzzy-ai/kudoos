import { SITE } from '../data/site';

/* Marquee strip; items duplicated for a seamless loop. */
export default function Ticker() {
  const items = [...SITE.ticker, ...SITE.ticker];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
