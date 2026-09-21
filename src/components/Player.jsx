import { useCallback, useRef } from 'react';
import { SITE, fmtTime } from '../data/site';
import { ICONS } from './icons';
import { usePlayer } from '../context/PlayerContext';

/* Pointer-based drag helper for the seek/volume bars (like the original). */
function useDrag(onMove) {
  const onMoveRef = useRef(onMove);
  onMoveRef.current = onMove;

  return useCallback((e) => {
    e.preventDefault();
    const move = (ev) => {
      const x = ev.touches ? ev.touches[0].clientX : ev.clientX;
      onMoveRef.current(x);
    };
    move(e);
    const stop = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', stop);
      document.removeEventListener('pointercancel', stop);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', stop);
    document.addEventListener('pointercancel', stop);
  }, []);
}

export default function Player() {
  const {
    idx, playing, pos, dur, volume, muted, shuffle,
    current, toggle, next, prev, seekTo, setVolume, toggleMute, toggleShuffle,
  } = usePlayer();

  const seekRef = useRef(null);
  const volRef = useRef(null);

  const pct = dur ? Math.min(100, (pos / dur) * 100) : 0;
  const volPct = (muted ? 0 : volume) * 100;
  const volIcon = muted || volume === 0 ? ICONS.volOff : volume < 0.5 ? ICONS.volLo : ICONS.volHi;

  const seekFromX = (clientX) => {
    const r = seekRef.current.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    seekTo(p * dur);
  };
  const setVolumeFromX = (clientX) => {
    const r = volRef.current.getBoundingClientRect();
    const v = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    setVolume(v);
  };

  const onSeekDown = useDrag(seekFromX);
  const onVolDown = useDrag(setVolumeFromX);

  const onSeekKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); seekTo(pos + 5); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); seekTo(pos - 5); }
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(); }
  };
  const onVolKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); setVolume(volume + 0.1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setVolume(volume - 0.1); }
  };

  return (
    <div className={`player${playing ? ' playing' : ''}`} id="player">
      <div className="player-art">
        <img id="plArt" src={current.cover} alt={`${current.title} — album artwork`} />
        <div className="player-art-ov" aria-hidden="true"></div>
        <div className="player-now">
          <span className="now-label"><span className="pulse" aria-hidden="true"></span> Now Playing</span>
          <div className="now-title" id="plTitle">{current.title}</div>
          <div className="now-artist" id="plArtist">{SITE.artist.name} · {current.release}</div>
        </div>
      </div>
      <div className="player-body">
        <div
          className="bar"
          id="seekBar"
          ref={seekRef}
          role="slider"
          tabIndex={0}
          aria-label="Seek"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(pct)}
          onPointerDown={onSeekDown}
          onKeyDown={onSeekKey}
        >
          <div className="bar-fill" id="seekFill" style={{ width: `${pct}%` }}></div>
        </div>
        <div className="times">
          <span id="curTime">{fmtTime(pos)}</span>
          <span id="totTime">{current.duration}</span>
        </div>
        <div className="controls">
          <button className="pbtn" id="btnPrev" aria-label="Previous track" onClick={prev}>
            {ICONS.prev}
          </button>
          <button className="pbtn pbtn-play" id="btnPlay" aria-label={playing ? 'Pause' : 'Play'} onClick={toggle}>
            {playing ? ICONS.pause : ICONS.play}
          </button>
          <button className="pbtn" id="btnNext" aria-label="Next track" onClick={() => next()}>
            {ICONS.next}
          </button>
        </div>
        <div className="player-foot">
          <div className="vol">
            <button
              className="pbtn"
              id="btnMute"
              aria-label="Mute"
              style={{ width: '34px', height: '34px', border: 0, background: 'none' }}
              onClick={toggleMute}
            >
              {volIcon}
            </button>
            <div
              className="bar"
              id="volBar"
              ref={volRef}
              role="slider"
              tabIndex={0}
              aria-label="Volume"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={Math.round(volPct)}
              onPointerDown={onVolDown}
              onKeyDown={onVolKey}
            >
              <div className="bar-fill" id="volFill" style={{ width: `${volPct}%` }}></div>
            </div>
          </div>
          <button
            className={`player-speed${shuffle ? ' active' : ''}`}
            id="btnShuffle"
            aria-label="Toggle shuffle"
            onClick={toggleShuffle}
          >
            {shuffle ? 'Shuffling' : 'Shuffle'}
          </button>
        </div>
      </div>
    </div>
  );
}
