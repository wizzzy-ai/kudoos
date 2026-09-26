import { SITE } from '../data/site';
import Reveal from './Reveal';
import { useState } from 'react';

/* Bio paragraphs may contain simple inline HTML (<strong>). */
function Html({ text }) {
  return <p dangerouslySetInnerHTML={{ __html: text }} />;
}

export default function About() {
  const a = SITE.artist;
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section" id="biography">
      <div className="container">
        <div className="section-head">
          <Reveal className="sh-left">
            <span className="eyebrow">Biography</span>
            <h2 className="display h-lg artist-name">{a.name}</h2>
          </Reveal>
        </div>

        <div className="about-grid">
          <Reveal className="about-photo">
            <img src={a.aboutImage} alt="Portrait of Kudoos" loading="lazy" />
            <div className="about-photo-tag">
              <span className="r">{a.name}</span>
              <span className="n">{a.location}</span>
            </div>
          </Reveal>

          <Reveal className="about-copy d1">
            <span className="eyebrow">Biography</span>
            <h3 className="display">From Lagos,<br />For Everywhere</h3>
            {expanded ? (
              a.bioFull.map((p, i) => <Html key={i} text={p} />)
            ) : (
              <Html text={a.bioFull[0]} />
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="link-arrow"
              style={{ marginTop: '20px', display: 'inline-flex', background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              {expanded ? 'Show less' : 'Read full biography'}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <div className="facts">
              <div className="fact"><div className="l">Genre</div><div className="v">{a.genre}</div></div>
              <div className="fact"><div className="l">Based In</div><div className="v">{a.location}</div></div>
              <div className="fact"><div className="l">Years Active</div><div className="v">{a.yearsActive}</div></div>
              <div className="fact"><div className="l">Status</div><div className="v">{a.career}</div></div>
            </div>
          </Reveal>
        </div>

        <Reveal className="stats d2">
          {SITE.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="n">{s.value}{s.suffix}<span style={{ color: 'var(--red)' }}>+</span></div>
              <div className="l">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
