import { useEffect, useRef, useState } from 'react';
import { SITE } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';

function Lightbox({ item, onClose }) {
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  useEffect(() => {
    lastFocus.current = document.activeElement;
    if (closeRef.current) closeRef.current.focus();
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (lastFocus.current && lastFocus.current.focus) lastFocus.current.focus();
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="lightbox open"
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button className="lb-close" id="lbClose" aria-label="Close viewer" onClick={onClose} ref={closeRef}>
        {ICONS.close}
      </button>
      {item.isVideo ? (
        <video id="lbVideo" src={item.src} controls autoPlay className="lb-video" />
      ) : (
        <img id="lbImg" src={item.src} alt={item.caption || ''} />
      )}
      <div className="lb-cap" id="lbCap">{item.caption || ''}</div>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(null); // { src, caption }

  return (
    <section className="section" id="gallery" style={{ background: 'var(--ink-2)' }}>
      <div className="container">
        <div className="section-head">
          <Reveal className="sh-left">
            <span className="eyebrow">Gallery</span>
            <h2 className="display h-lg">Moments</h2>
            <p className="lead">On stage, in the booth, behind the scenes.</p>
          </Reveal>
        </div>

        <Reveal className="gallery">
          {SITE.gallery.map((g) => {
            const caption = `${g.category} — ${g.title}`;
            return (
              <a
                key={g.src + g.title}
                className={`gitem ${g.isVideo ? 'gitem-video' : ''}`}
                href={g.src}
                aria-label={`View ${g.title}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive({ src: g.src, caption, isVideo: g.isVideo });
                }}
              >
                {g.isVideo ? (
                  <video src={g.src} muted className="gitem-video-thumb" />
                ) : (
                  <img src={g.src} alt={`${g.category}: ${g.title}`} loading="lazy" />
                )}
                <span className="gitem-ov">
                  <span className="c">{g.category}</span>
                  <span className="t">{g.title}</span>
                  <span className="e" aria-hidden="true">{g.isVideo ? ICONS.play : ICONS.zoom}</span>
                </span>
              </a>
            );
          })}
        </Reveal>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  );
}
