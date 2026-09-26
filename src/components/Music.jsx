import { useState } from 'react';
import { SITE, isPlaceholder, link } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';
import Player from './Player';
import TrackList, { TrackRow } from './TrackList';
import { usePlayer } from '../context/PlayerContext';

const TABS = [
  { id: 'all', label: 'All Releases' },
  { id: 'single', label: 'Singles' },
  { id: 'ep', label: 'EPs & Albums' },
];

/* Featured release block shown in the "All" panel. */
function FeatureRelease({ release }) {
  const { playFirst } = usePlayer();
  return (
    <div className="feature" id="featureRelease">
      <div className="feature-art">
        <img src={release.cover} alt={`${release.title} cover artwork`} loading="lazy" />
      </div>
      <div className="feature-body">
        <span className="release-flag">
          {ICONS.play}
          {release.flag}
        </span>
        <h3 className="display feature-title">{release.title}</h3>
        <div className="feature-meta">
          <span>{SITE.artist.name}</span>
          <span>{release.dateLabel}</span>
          <span>{release.type === 'ep' ? `${release.tracks.length} Tracks` : 'Single'}</span>
        </div>
        <p className="feature-desc">{SITE.spotlight.desc.slice(0, 150)}…</p>
        <div className="feature-actions">
          <button className="btn btn-red btn-sm" onClick={() => playFirst(release.tracks[0])}>
            {ICONS.play} Play Release
          </button>
          <a className="btn btn-ghost btn-sm" href="#release">View Release</a>
        </div>
      </div>
    </div>
  );
}

/* Compact release card used in the "Singles" panel. */
function ReleaseCard({ release }) {
  const { playFirst } = usePlayer();
  return (
    <div className="release-card">
      <div className="rc-art">
        <img src={release.cover} alt={release.title} loading="lazy" />
      </div>
      <div className="rc-body">
        <span className="release-flag">{release.flag}</span>
        <h3 className="display rc-title">{release.title}</h3>
        <div className="feature-meta">
          <span>{release.dateLabel}</span>
          <span>{SITE.artist.name}</span>
        </div>
        <div className="feature-actions" style={{ marginTop: '6px' }}>
          <button className="btn btn-red btn-sm" onClick={() => playFirst(release.tracks[0])}>
            {ICONS.play} Play
          </button>
        </div>
      </div>
    </div>
  );
}

/* EP card with embedded track list, used in the "EPs & Albums" panel. */
function EpCard({ release }) {
  const { playFirst } = usePlayer();
  return (
    <div className="ep-card">
      <div className="ep-top">
        <div className="ep-art">
          <img src={release.cover} alt={release.title} loading="lazy" />
        </div>
        <div className="ep-body">
          <span className="release-flag">{release.flag}</span>
          <h3 className="display ep-title">{release.title}</h3>
          <div className="feature-meta" style={{ marginTop: '10px' }}>
            <span>{release.dateLabel}</span>
            <span>{release.tracks.length} Tracks</span>
          </div>
          <button
            className="btn btn-red btn-sm"
            style={{ marginTop: '16px' }}
            onClick={() => playFirst(release.tracks[0])}
          >
            {ICONS.play} Play EP
          </button>
        </div>
      </div>
      <div className="ep-tracks">
        {release.tracks.map((id, i) => (
          <TrackRow key={id} id={id} index={i} />
        ))}
      </div>
    </div>
  );
}

/* Where-to-listen platform grid. */
export function PlatformGrid({ withExt }) {
  return (
    <div className="platform-grid">
      {SITE.platforms.map((p) => (
        <a
          key={p.id}
          className={`plat ${p.id}`}
          href={link(p.href)}
          {...(isPlaceholder(p.href) ? { 'data-placeholder': p.id } : {})}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ICONS[p.icon]}
          <span>{p.name}</span>
          {withExt && <span className="ext" aria-hidden="true">{ICONS.ext}</span>}
        </a>
      ))}
    </div>
  );
}

export default function Music() {
  const [tab, setTab] = useState('all');

  const featured = SITE.releases.find((r) => r.featured) || SITE.releases[0];
  const singles = SITE.releases.filter((r) => r.type === 'single');
  const eps = SITE.releases.filter((r) => r.type === 'ep');

  return (
    <section className="section music-wrap" id="music">
      <div className="container">
        <div className="section-head">
          <Reveal className="sh-left">
            <span className="eyebrow">Discography</span>
            <h2 className="display h-lg">The Music</h2>
            <p className="lead">Stream the latest release, dig into the catalogue, and find Kudoos on every platform you already use.</p>
          </Reveal>
          <Reveal className="d1">
            <div className="tabs" role="tablist" aria-label="Music catalogue filters">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className="tab"
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* The sticky player is rendered inside the active panel (equivalent
            to the original moving the player node between panels). */}
        {tab === 'all' && (
          <div className="panel-row active reveal d1" data-panel="all">
            <div className="music-layout">
              <div className="music-main">
                <FeatureRelease release={featured} />
                <TrackList title="Full Catalogue" ids={SITE.tracks.map((t) => t.id)} style={{ marginTop: '22px' }} />
              </div>
              <div className="player-col">
                <Player />
              </div>
            </div>
          </div>
        )}

        {tab === 'single' && (
          <div className="panel-row active reveal d1" data-panel="single">
            <div className="music-layout">
              <div className="music-main">
                {singles.map((r) => <ReleaseCard key={r.id} release={r} />)}
              </div>
              <div className="player-col">
                <Player />
              </div>
            </div>
          </div>
        )}

        {tab === 'ep' && (
          <div className="panel-row active reveal d1" data-panel="ep">
            <div className="music-layout">
              <div className="music-main">
                {eps.map((r) => <EpCard key={r.id} release={r} />)}
              </div>
              <div className="player-col">
                <Player />
              </div>
            </div>
          </div>
        )}

        {/* Streaming platforms */}
        <Reveal className="platforms">
          <span className="eyebrow blue">Where to listen</span>
          <PlatformGrid withExt />
        </Reveal>
      </div>
    </section>
  );
}
