import { SITE } from '../data/site';
import Reveal from './Reveal';

/* Bio paragraphs may contain simple inline HTML (<strong>). */
function Html({ text }) {
  return <p dangerouslySetInnerHTML={{ __html: text }} />;
}

export default function About() {
  const a = SITE.artist;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <Reveal className="sh-left">
            <span className="eyebrow">About</span>
            <h2 className="display h-lg artist-name">{a.name}</h2>
          </Reveal>
        </div>

        <div className="about-grid">
          <Reveal className="about-photo">
            <img src={a.aboutImage} alt="Portrait of Nova Reign" loading="lazy" />
            <div className="about-photo-tag">
              <span className="r">{a.name}</span>
              <span className="n">{a.location}</span>
            </div>
          </Reveal>

          <Reveal className="about-copy d1">
            <span className="eyebrow">Biography</span>
            <h3 className="display">From Lagos,<br />For Everywhere</h3>
            {a.bioFull.map((p, i) => <Html key={i} text={p} />)}
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
