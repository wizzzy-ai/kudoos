import { SITE } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';
import { PlatformGrid } from './Music';
import { usePlayer } from '../context/PlayerContext';

export default function Spotlight() {
  const s = SITE.spotlight;
  const { playFirst } = usePlayer();
  const firstTrack = SITE.releases.find((r) => r.featured)?.tracks[0] || SITE.tracks[0].id;

  return (
    <section className="section spotlight" id="release">
      <div className="container">
        <div className="spotlight-grid">
          <Reveal className="spot-art">
            <div className="spot-art-frame">
              <img src={s.cover} alt={`${s.title} cover artwork`} loading="lazy" />
              <span className="spot-art-badge">{s.badge}</span>
              <button
                className="spot-play"
                onClick={() => playFirst(firstTrack)}
                aria-label={`Play ${s.title}`}
              >
                {ICONS.play}
              </button>
            </div>
          </Reveal>

          <Reveal className="spot-body d1">
            <span className="eyebrow">Latest Release</span>
            <h2 className="display spot-title">{s.title}</h2>
            <div className="spot-byline">
              <span>{s.artist}</span>
              <span>{s.type}</span>
              <span>{s.dateLabel}</span>
            </div>
            <p className="spot-desc">{s.desc}</p>
            <div className="spot-actions">
              <button className="btn btn-red" onClick={() => playFirst(firstTrack)}>
                {ICONS.play} Listen Now
              </button>
              <a className="btn btn-ghost" href="#music">All Music</a>
            </div>
            <div className="spot-links">
              <div className="lbl">Available on</div>
              <PlatformGrid />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
