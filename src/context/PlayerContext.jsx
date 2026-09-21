import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { SITE, fmtTime } from '../data/site';

/* ==========================================================================
   MUSIC PLAYER
   ──────────────────────────────────────────────────────────────────────────
   Two modes:
   · REAL audio  → set track.audio to a file path/URL and the player streams it.
   · DEMO mode   → audio left empty; the player simulates playback on a timer
                   so the UI can be demonstrated and reviewed.
   ========================================================================== */

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const tracks = SITE.tracks;

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [dur, setDur] = useState(tracks[0].durationSec);
  const [volume, setVolumeState] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  // True when the current catalogue has no real audio (or it failed to load)
  // → the player simulates the timeline instead.
  const [demoMode, setDemoMode] = useState(!tracks[0].audio);

  // Refs mirror state so imperative handlers (timers, Audio events) always
  // read the latest values without stale closures.
  const idxRef = useRef(idx);
  const playingRef = useRef(playing);
  const posRef = useRef(pos);
  const durRef = useRef(dur);
  const volumeRef = useRef(volume);
  const mutedRef = useRef(muted);
  const demoModeRef = useRef(demoMode);
  const audioRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => { demoModeRef.current = demoMode; }, [demoMode]);

  const current = useCallback(() => tracks[idxRef.current], [tracks]);

  /* --- real <audio> element management --- */
  const ensureAudio = useCallback(() => {
    if (audioRef.current) return audioRef.current;
    const a = new Audio();
    a.addEventListener('timeupdate', () => {
      posRef.current = a.currentTime;
      setPos(a.currentTime);
    });
    a.addEventListener('loadedmetadata', () => {
      if (a.duration && Number.isFinite(a.duration)) {
        durRef.current = a.duration;
        setDur(a.duration);
      }
    });
    a.addEventListener('ended', () => {
      if (nextRef.current) nextRef.current(true);
    });
    a.addEventListener('error', () => {
      // fall back to demo timing silently
      audioRef.current = null;
      setDemoMode(true);
    });
    audioRef.current = a;
    return a;
  }, []);

  /* --- transport --- */
  const play = useCallback(() => {
    playingRef.current = true;
    setPlaying(true);
    const t = tracks[idxRef.current];
    if (t.audio && !demoModeRef.current) {
      let a = audioRef.current;
      if (!a || !a.src || a.src !== resolveUrl(t.audio)) {
        a = ensureAudio();
        a.src = t.audio;
        a.volume = mutedRef.current ? 0 : volumeRef.current;
      }
      a.play().catch(() => {
        audioRef.current = null;
        setDemoMode(true);
      });
    }
  }, [tracks, ensureAudio]);

  const pause = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);
    if (audioRef.current) audioRef.current.pause();
  }, []);

  const toggle = useCallback(() => {
    if (playingRef.current) pause();
    else play();
  }, [play, pause]);

  const load = useCallback((i, autoplay) => {
    const n = (i + tracks.length) % tracks.length;
    idxRef.current = n;
    setIdx(n);
    const t = tracks[n];
    durRef.current = t.durationSec;
    setDur(t.durationSec);
    posRef.current = 0;
    setPos(0);
    if (audioRef.current) audioRef.current.pause();
    if (t.audio && !demoModeRef.current) {
      const a = ensureAudio();
      a.src = t.audio;
      a.volume = mutedRef.current ? 0 : volumeRef.current;
    }
    if (autoplay) play();
  }, [tracks, ensureAudio, play]);

  // Keep a ref to `next` so the audio 'ended' listener can call the latest one.
  const next = useCallback((auto) => { load(idxRef.current + 1, auto ? true : true); }, [load]);
  const prev = useCallback(() => { load(idxRef.current - 1, true); }, [load]);
  useEffect(() => { nextRef.current = next; }, [next]);

  /* --- demo timeline (mirrors the original 250ms ticker) --- */
  useEffect(() => {
    const t = tracks[idx];
    if (t.audio && !demoMode) return; // real audio mode drives progress itself
    const id = setInterval(() => {
      if (!playingRef.current) return;
      const nextPos = posRef.current + 0.25;
      if (nextPos >= durRef.current) {
        if (nextRef.current) nextRef.current(true);
        return;
      }
      posRef.current = nextPos;
      setPos(nextPos);
    }, 250);
    return () => clearInterval(id);
  }, [idx, tracks, demoMode]);

  /* --- seeking / volume --- */
  const seekTo = useCallback((p) => {
    const clamped = Math.min(durRef.current, Math.max(0, p));
    posRef.current = clamped;
    setPos(clamped);
    const a = audioRef.current;
    if (a && a.duration) a.currentTime = clamped;
  }, []);

  const setVolume = useCallback((v) => {
    const clamped = Math.min(1, Math.max(0, v));
    volumeRef.current = clamped;
    setVolumeState(clamped);
    const isMuted = clamped === 0;
    mutedRef.current = isMuted;
    setMuted(isMuted);
    const a = audioRef.current;
    if (a) a.volume = isMuted ? 0 : clamped;
  }, []);

  const toggleMute = useCallback(() => {
    const m = !mutedRef.current;
    mutedRef.current = m;
    setMuted(m);
    const a = audioRef.current;
    if (a) a.volume = m ? 0 : volumeRef.current;
  }, []);

  const toggleShuffle = useCallback(() => {
    setShuffle((s) => !s);
  }, []);

  /* --- track row interactions (same semantics as the original site) --- */
  const playTrack = useCallback((i) => {
    if (i === idxRef.current && playingRef.current) pause();
    else if (i === idxRef.current) play();
    else load(i, true);
  }, [pause, play, load]);

  const playFirst = useCallback((trackId) => {
    const i = tracks.findIndex((t) => t.id === trackId);
    if (i > -1) {
      load(i, true);
      const section = document.getElementById('music');
      if (section) section.scrollIntoView({ block: 'start' });
    }
  }, [tracks, load]);

  const value = useMemo(() => ({
    idx, playing, pos, dur, volume, muted, shuffle, demoMode,
    current: tracks[idx],
    play, pause, toggle, next, prev, load,
    seekTo, setVolume, toggleMute, toggleShuffle,
    playTrack, playFirst,
  }), [idx, playing, pos, dur, volume, muted, shuffle, demoMode, tracks, play, pause, toggle, next, prev, load, seekTo, setVolume, toggleMute, toggleShuffle, playTrack, playFirst]);

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used inside <PlayerProvider>');
  return ctx;
}

export { fmtTime };

// The Audio element resolves relative src itself; compare loosely.
function resolveUrl(url) {
  try { return new URL(url, window.location.href).href; } catch { return url; }
}
