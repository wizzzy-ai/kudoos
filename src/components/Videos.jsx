import { SITE } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';

const ytUrl = (id) => (id ? `https://www.youtube.com/watch?v=${id}` : '#');

function openYouTube(id) {
  if (!id) return;
  window.open(`https://www.youtube.com/watch?v=${id}`, '_blank', 'noopener');
}

export default function Videos() {
  const v = SITE.videos.featured;

  const onFeaturedKey = (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    openYouTube(v.youtubeId);
  };

  return (
    <section
      className="section"
      id="videos"
      style={{ background: 'linear-gradient(180deg,var(--ink),var(--ink-2))' }}
    >
      <div className="container">
        <div className="section-head">
          <Reveal className="sh-left">
            <span className="eyebrow">Visuals</span>
            <h2 className="display h-lg">Music Videos</h2>
            <p className="lead">Cinematic visuals, live sessions and studio footage — shot and directed by Nova Reign's creative team.</p>
          </Reveal>
          <Reveal className="d1">
            <a href="#" className="btn btn-ghost" data-placeholder="youtube-channel" rel="noopener">
              {ICONS.youtube}
              YouTube Channel
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div className="video-feature">
            <div
              className="video-thumb"
              role="button"
              tabIndex={0}
              aria-label={`Play ${v.title}`}
              onClick={() => openYouTube(v.youtubeId)}
              onKeyDown={onFeaturedKey}
            >
              <img src={v.thumbnail} alt={`${v.title} thumbnail`} loading="lazy" />
              <span className="video-play" aria-hidden="true">{ICONS.play}</span>
              <div className="video-info">
                <span className="eyebrow">Featured Video</span>
                <div className="t">{v.title}</div>
                <p className="d">{v.desc}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="video-side d1">
          {SITE.videos.more.map((x) => (
            <a
              key={x.title}
              className="vcard"
              href={ytUrl(x.youtubeId)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={x.title}
            >
              <div className="vcard-img">
                <img src={x.thumbnail} alt={`${x.title} thumbnail`} loading="lazy" />
                <span className="vcard-ic" aria-hidden="true"><span>{ICONS.play}</span></span>
              </div>
              <div className="vcard-txt">
                <div className="t">{x.title}</div>
                <div className="m">{x.category}</div>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
