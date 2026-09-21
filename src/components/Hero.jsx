import { SITE } from '../data/site';
import { ICONS } from './icons';
import Socials from './Socials';

export default function Hero() {
  const a = SITE.artist;

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img
          src={a.heroImage}
          alt="KUDOOS performing live on stage"
          fetchpriority="high"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true"></div>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-glow red" aria-hidden="true"></div>
      <div className="hero-glow blue" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge reveal in">
            <span className="pulse" aria-hidden="true"></span>
            New single out now
          </span>

          <h1 className="hero-title artist-name">
            <span className="l1">{a.name}</span>
          </h1>

          <p className="hero-tag">
            The next sound you need to hear. <b>{a.genre}</b> — built for the night, written for the soul.
          </p>

          <div className="hero-genres">
            {a.genres.map((g, i) => (
              <span key={g} className={`chip ${i % 2 ? 'accent-b' : 'accent-r'}`}>{g}</span>
            ))}
          </div>

          <div className="hero-cta">
            <a href="#music" className="btn btn-red">
              {ICONS.play}
              Listen Now
            </a>
            <a href="#music" className="btn btn-ghost">
              {ICONS.plus}
              Explore Music
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-stat">
              <span className="n">{SITE.heroStats.listeners}</span>
              <span className="l">Monthly Listeners</span>
            </div>
            <div className="hero-stat">
              <span className="n">{SITE.heroStats.releases}</span>
              <span className="l">Releases</span>
            </div>
            <div className="hero-stat">
              <span className="n">2026</span>
              <span className="l">Latest Drop</span>
            </div>
          </div>

          <Socials style={{ marginTop: '30px' }} />
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
