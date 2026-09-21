/* Inline SVG icon library (no emoji) — ported 1:1 from the original site. */

const Svg = ({ children, fill = 'none', stroke, ...rest }) => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={stroke} {...rest}>
    {children}
  </svg>
);

export const ICONS = {
  spotify: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.4-.7.5-1.1.3-3-1.8-6.7-2.2-11.1-1.2-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 4.8-1.1 8.9-.6 12.2 1.4.4.2.5.7.3 1zm1.5-3.3c-.3.4-.9.6-1.3.3-3.4-2.1-8.6-2.7-12.6-1.5-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 4.6-1.4 10.3-.7 14.2 1.7.4.2.6.8.3 1.3zm.1-3.4C15.1 8.2 8.4 8 4.4 9.2c-.6.2-1.2-.2-1.3-.7-.2-.6.2-1.2.7-1.4 4.6-1.4 12-1.1 16.7 1.7.5.3.7 1 .4 1.5-.3.4-1 .6-1.5.3z"/></svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.5c-.02-2.3 1.87-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.83-.81-3.01-.79-1.55.02-2.98.9-3.78 2.29-1.61 2.79-.41 6.92 1.16 9.18.77 1.11 1.68 2.35 2.88 2.31 1.16-.05 1.6-.75 3-.75s1.79.75 3.01.72c1.24-.02 2.03-1.13 2.79-2.24.88-1.28 1.24-2.52 1.26-2.58-.03-.01-2.42-.93-2.45-3.68zM14.8 5.3c.64-.77 1.07-1.85.95-2.92-.93.04-2.05.62-2.7 1.39-.59.68-1.11 1.78-.97 2.83 1.03.08 2.09-.52 2.72-1.3z"/></svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.9-.5-5.8a3 3 0 0 0-2.1-2.1C18.5 3.6 12 3.6 12 3.6s-6.5 0-8.4.5A3 3 0 0 0 1.5 6.2C1 8.1 1 12 1 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1C23 15.9 23 12 23 12zM9.8 15.6V8.4l6.2 3.6z"/></svg>
  ),
  audiomack: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.6 2 3.4 3.9.6 7l3.1 2.5C5.8 7 8.7 5.5 12 5.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5c-3.6 0-6.7-2.2-7.9-5.4l-2.7.9C3 21.9 7.2 24 12 24c6.6 0 12-5.4 12-12S18.6 2 12 2zm0 5.2c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8 4.8-2.1 4.8-4.8S14.6 7.2 12 7.2zm0 7.1c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3z"/></svg>
  ),
  boomplay: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 2 7v10l10 5 10-5V7L12 2zm0 2.3 7.7 3.85L12 12 4.3 8.15 12 4.3zM4 9.9l7 3.5v6.9l-7-3.5V9.9zm9 10.4v-6.9l7-3.5v6.9l-7 3.5z"/></svg>
  ),
  soundcloud: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 14.5c0 .6.4 1 1 1s1-.4 1-1v-2.2c0-.6-.4-1-1-1s-1 .4-1 1v2.2zm3 1.2c0 .5.3.8.8.8s.8-.3.8-.8V8.6c0-.5-.3-.8-.8-.8s-.8.3-.8.8v7.1zm3 .3c0 .4.3.7.7.7s.7-.3.7-.7V6.2c0-.4-.3-.7-.7-.7s-.7.3-.7.7v9.8zm3 .1c0 .4.2.6.6.6s.6-.2.6-.6V4.6c0-.4-.2-.6-.6-.6s-.6.2-.6.6v11.5zm3 .2c0 .3.2.5.5.5s.5-.2.5-.5V3.9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v12.4zm2.6.4c-2 .1-3.6.1-4.6-.1V5.4c0-.3.2-.5.5-.5.2 0 .5.2.5.5v9.7c.6-.4 1.4-.6 2.2-.6.5 0 .9.1 1.4.3V16.7zm1.5 0c-.4 0-.9 0-1.5-.1V8.9c.5-.2 1-.3 1.5-.3 2.9 0 5.2 2.3 5.2 5.2s-2.3 5.2-5.2 5.2z"/></svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 2.1c-3.1 0-3.5 0-4.7.1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.6a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2zm0 1.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6zm5.3-2.2a1 1 0 1 1-1.9 0 1 1 0 0 1 1.9 0z"/></svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.8a5.3 5.3 0 0 1-3.1-1V15a6 6 0 1 1-6-6c.3 0 .6 0 .9.1v3.1a3 3 0 1 0 2.1 2.9V1.9h3.1a5.3 5.3 0 0 0 3.9 4.1v3.1c-.3-.1-.6-.2-.9-.3z"/></svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-6.9-6.1 6.9H.3l7.9-9L-.2 2.3h7l4.8 6.3 6.6-6.3zm-1.2 17.9h1.9L7.1 4.2H5l12 16z"/></svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z"/></svg>
  ),
  snapchat: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.02 2.2c2.7 0 4.6 2 4.7 4.7l-.02 1.2c0 .3.1.5.3.5.2-.1.5-.2.8-.2.4 0 .8.2 1 .5.2.4 0 .8-.3 1.1-.3.3-1 .7-1.5 1-.3.2-.4.4-.3.7.3 1 .9 1.9 1.7 2.6.6.5 1.4.9 2.1 1 .4.1.6.3.6.6 0 .5-.8.9-2 1.2-.2 0-.3.3-.4.6-.1.4-.2.8-.4.9-.2.1-.6.1-1 .1-.5 0-1.1 0-1.8.3-.6.2-1.1.7-1.6 1.1-.6.5-1.2 1-2.2 1s-1.6-.5-2.2-1c-.5-.4-1-.9-1.6-1.1-.7-.3-1.3-.3-1.8-.3-.4 0-.8 0-1-.1-.2-.1-.3-.5-.4-.9 0-.3-.2-.5-.4-.6-1.2-.3-2-.7-2-1.2 0-.3.2-.5.6-.6.7-.1 1.5-.5 2.1-1 .8-.7 1.4-1.6 1.7-2.6.1-.3 0-.5-.3-.7-.5-.3-1.2-.7-1.5-1-.3-.3-.5-.7-.3-1.1.2-.3.6-.5 1-.5.3 0 .6.1.8.2.2 0 .3-.2.3-.5l-.02-1.2c.1-2.7 2-4.7 4.7-4.7z"/></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
  ),
  warn: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>
  ),
  ext: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m4 6 8 6 8-6"/></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
  ),
  ticket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9a3 3 0 0 1 0 6v3h18v-3a3 3 0 0 1 0-6V6H3z"/><path d="M13 6v12"/></svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
  ),
  zoom: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/></svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
  ),
  pause: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>
  ),
  prev: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM20 6v12L10 12z"/></svg>
  ),
  next: (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM4 6l10 6-10 6z"/></svg>
  ),
  volHi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>
  ),
  volLo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>
  ),
  volOff: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6M16 9l6 6"/></svg>
  ),
  note: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
  ),
  arrowUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
  ),
  arrowRight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg>
  ),
};

/** Renders an icon by name: <Icon name="play" /> */
export default function Icon({ name, style }) {
  const svg = ICONS[name];
  if (!svg) return null;
  if (style) {
    return <span style={{ display: 'inline-flex' }}>{svg}</span>;
  }
  return svg;
}
