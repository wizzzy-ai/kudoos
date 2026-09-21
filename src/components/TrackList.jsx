import { SITE, trackById } from '../data/site';
import { usePlayer } from '../context/PlayerContext';

const TRACK_INDEX = Object.fromEntries(SITE.tracks.map((t, i) => [t.id, i]));

/* One clickable track row (grid: index/eq · art · title · tag · duration). */
export function TrackRow({ id, index }) {
  const { idx, playing, playTrack } = usePlayer();
  const t = trackById(id);
  if (!t) return null;
  const isPlaying = t.id === idx && playing;

  const onClick = () => {
    const i = TRACK_INDEX[t.id];
    if (i !== undefined) playTrack(i);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`track${isPlaying ? ' playing' : ''}`}
      role="button"
      tabIndex={0}
      aria-label={`Play ${t.title}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span className="track-idx">{String(index + 1).padStart(2, '0')}</span>
      <span className="track-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
      <img className="track-art" src={t.cover} alt="" loading="lazy" />
      <span className="track-txt">
        <span className="track-title">{t.title}</span>
        <span className="track-sub">{t.release}</span>
      </span>
      {t.tag
        ? <span className={`track-tag${t.tag.toLowerCase() === 'new' ? ' new' : ''}`}>{t.tag}</span>
        : <span></span>}
      <span className="track-dur">{t.duration}</span>
    </div>
  );
}

/* Track list with header. `ids` references SITE.tracks ids. */
export default function TrackList({ title, ids, style }) {
  return (
    <div className="track-list" style={style}>
      <div className="track-head">
        <span>{title}</span>
        <span>{ids.length} {ids.length === 1 ? 'Track' : 'Tracks'}</span>
      </div>
      {ids.map((id, i) => (
        <TrackRow key={id} id={id} index={i} />
      ))}
    </div>
  );
}
