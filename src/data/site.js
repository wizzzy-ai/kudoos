/* ==========================================================================
   SITE CONFIG — EDIT EVERYTHING HERE
   --------------------------------------------------------------------------
   Replace the placeholder values below with the artist's real information.
   Nothing else in the app needs to change for a normal content update.
   ========================================================================== */

export const SITE = {
  /* ---------- ARTIST IDENTITY ---------- */
  artist: {
    name: 'KUDOOS',
    shortName: 'KUDOOS',
    role: 'Official Site',
    tagline: 'Seeing Is Believing',
    genre: 'Afrobeats / Afro-fusion / Nigerian Pop',
    location: 'Lagos, Nigeria',
    genres: ['Afrobeats', 'Afro-fusion', 'Nigerian Pop', 'Dancehall', 'Highlife'],
    // Replace with a high-res portrait (recommended 1600x2000px, JPG/WebP)
    heroImage: '/picture/dance banner.png',
    aboutImage: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80',
    bioShort:
      'Nigerian singer and songwriter known professionally as KUDOOS. Known for songs like "Dance" and "Life Is Not Easy," blending Afrobeats, Nigerian pop, and Afro-fusion with elements of dancehall.',
    // Paragraphs may contain simple inline HTML (e.g. <strong>)
    bioFull: [
      'KUDOOS (Uyiobong Effiong Okon), born 17 October 1995, is a Nigerian singer and songwriter known professionally as KUDOOS. He hails from Ibiono Ibom, Akwa Ibom State, Nigeria, and grew up in Ikono, Uyo, where he developed his passion for music and began shaping his artistic identity.',
      'KUDOOS is known for songs such as <strong>"Dance"</strong> and <strong>"Life Is Not Easy."</strong> His music explores themes of motivation, love, and everyday life, blending Afrobeats, Nigerian pop, Afro-fusion, and highlife with elements of dancehall to create a distinctive sound.',
      'KUDOOS began his musical journey in 2011 while attending secondary school in Akwa Ibom State. During his early years in music, he developed the slogan <strong>"Seeing Is Believing,"</strong> which became closely associated with his artistic identity.',
      'Driven by his ambition to share his music with a wider audience, KUDOOS later moved to Lagos, where he continued developing his career professionally. His music combines inspirational messages, emotional themes, and energetic rhythms, connecting with listeners through storytelling and his unique musical style.',
      'As he continues his musical journey, KUDOOS remains focused on creating meaningful music, reaching new audiences, and establishing his identity within the Nigerian music scene.',
    ],
    career: 'Independent artist · Professional recording artist',
    yearsActive: '2011 — Present',
  },

  
  /* ---------- ARTIS
  T STATS (replace the numbers, keep the labels) ---------- */
  stats: [
    { label: 'Songs Released', value: 34, suffix: '' },
    { label: 'Monthly Listeners', value: 128, suffix: 'K' },
    { label: 'Shows Performed', value: 67, suffix: '' },
    { label: 'Years Active', value: 7, suffix: '' },
  ],
  // Numbers shown in the hero area
  heroStats: { listeners: '128K', releases: '34' },

  /* ---------- RELEASES ----------
     type: "single" | "ep"   |   tracks: [trackId, ...] referencing TRACKS ids
  ---------------------------------------------------------------------------- */
  releases: [
    {
      id: 'dance',
      title: 'Dance',
      type: 'single',
      date: '2026-08-14',
      dateLabel: '14 August 2026',
      cover: '/picture/dance.png',
      featured: true,
      flag: 'Latest Single',
      tracks: ['t1', 't2'],
    },
    {
      id: 'lagos-midnight',
      title: 'Lagos Midnight',
      type: 'single',
      date: '2025-06-21',
      dateLabel: '21 June 2025',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80',
      featured: false,
      flag: 'Single',
      tracks: ['t6'],
    },
    {
      id: 'golden-hour',
      title: 'Golden Hour',
      type: 'single',
      date: '2025-02-09',
      dateLabel: '9 February 2025',
      cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1000&q=80',
      featured: false,
      flag: 'Single',
      tracks: ['t7'],
    },
  ],

  /* ---------- TRACKS ----------
     audio: replace with real file paths, e.g. "audio/nightfall-protocol.mp3".
     Left empty ("") the player UI runs in demo mode with a simulated timeline.
  ---------------------------------------------------------------------------- */
  tracks: [
    { id: 't1', title: 'Dance', release: 'Dance', duration: '3:42', durationSec: 222, tag: 'New', cover: '/picture/dance.png', audio: '/audio/Dance - Kudoos.mp3' },
    { id: 't2', title: 'Life Is Not Easy', release: 'Single', duration: '3:15', durationSec: 195, tag: 'New', cover: '/picture/Life is not easy.png', audio: '/audio/Life Is Not Easy - Kudoos.mp3' },
  ],

  /* ---------- STREAMING PLATFORMS ----------
     Replace href with the artist's real profile URLs. Links open in a new tab.
  ---------------------------------------------------------------------------- */
  platforms: [
    { id: 'spotify', name: 'Spotify', href: 'https://open.spotify.com/artist/1K6DJykdSRugy36rFhe05h?si=6lq2q87ISguiBPvIArw-HQ&utm_source=copy-link', icon: 'spotify' },
    { id: 'apple', name: 'Apple Music', href: 'https://music.apple.com/ng/album/dance/1862164699?i=1862165033', icon: 'apple' },
    { id: 'youtube', name: 'YouTube Music', href: 'https://youtube.com/channel/UC5wMYbpon10DUGA-ZVb36oQ', icon: 'youtube' },
    { id: 'audiomack', name: 'Audiomack', href: 'https://audiomack.com/kudoosofficial', icon: 'audiomack' },
    { id: 'boomplay', name: 'Boomplay', href: 'https://www.boomplay.com/', icon: 'boomplay' },
    { id: 'soundcloud', name: 'SoundCloud', href: 'https://on.soundcloud.com/eUyNRBW6jDkCbMeFGt', icon: 'soundcloud' },
  ],

  /* ---------- LATEST RELEASE SPOTLIGHT ---------- */
  spotlight: {
    title: 'Dance',
    artist: 'KUDOOS',
    dateLabel: 'Available Now',
    badge: 'Latest Single',
    type: 'Single',
    desc: 'Known for songs such as "Dance" and "Life Is Not Easy," KUDOOS brings his distinctive Afrobeats sound with motivational themes and energetic rhythms.',
    cover: '/picture/dance.png',
  },

  /* ---------- VIDEOS ---------- */
  videos: {
    featured: {
      title: 'Dance (Official Music Video)',
      desc: 'Official music video for Dance by KUDOOS.',
      thumbnail: '/picture/dance banner.png',
      youtubeId: 'PxExSa5okrYv',
    },
    more: [
      { title: 'Life Is Not Easy (Official Music Video)', category: 'Music Video', thumbnail: '/picture/Life is not easy.png', youtubeId: 'PxExSa5okrYv' },
    ],
  },

  /* ---------- EVENTS ----------
     Leave the array empty ([]) to show the "New shows coming soon" message.
  ---------------------------------------------------------------------------- */
  events: [
    { name: 'Nightfall Protocol Listening Party', venue: 'Hard Rock Cafe', city: 'Lagos', country: 'Nigeria', date: '2026-10-11', dateLabel: '11 Oct 2026', day: '11', month: 'Oct', year: '2026', ticketUrl: '' },
    { name: 'Afro Nation Afterparty', venue: 'Eko Convention Centre', city: 'Lagos', country: 'Nigeria', date: '2026-11-08', dateLabel: '8 Nov 2026', day: '8', month: 'Nov', year: '2026', ticketUrl: '' },
    { name: 'Reign Live — European Debut', venue: 'O2 Academy Islington', city: 'London', country: 'United Kingdom', date: '2026-12-04', dateLabel: '4 Dec 2026', day: '4', month: 'Dec', year: '2026', ticketUrl: '' },
  ],

  /* ---------- GALLERY ---------- */
  gallery: [
    { src: '/picture/gallery-1.jpg', category: 'Photoshoot', title: 'KUDOOS' },
    { src: '/picture/gallery-2.jpg', category: 'Studio', title: 'Studio Session' },
    { src: '/picture/behind the scenes1.mp4', category: 'Behind The Scenes', title: 'Behind The Scenes', isVideo: true },
    { src: '/picture/behind the scenes 2.mp4', category: 'Behind The Scenes', title: 'Behind The Scenes 2', isVideo: true },
    { src: '/picture/studio recordings.mp4', category: 'Studio', title: 'Studio Recordings', isVideo: true },
    { src: '/picture/respectful awards.jpeg', category: 'Awards', title: 'Respectful Awards' },
    { src: '/picture/dance music video.mp4', category: 'Music Video', title: 'Dance Music Video', isVideo: true },
    { src: '/picture/recording music.jpeg', category: 'Studio', title: 'Recording Music' },
    { src: '/picture/dance moves.mp4', category: 'Performance', title: 'Dance Moves', isVideo: true },
  ],

  /* ---------- SOCIAL ---------- */
  socials: [
    { id: 'instagram', name: 'Instagram', handle: '@kudoosofficial', href: 'https://www.instagram.com/kudoosofficial?stkn=MWxmMjVkdWUxeXNpZQ%3D%3D&utm_source=qr', icon: 'instagram' },
    { id: 'tiktok', name: 'TikTok', handle: '@kudoosofficial', href: 'https://www.tiktok.com/@kudoosofficial', icon: 'tiktok' },
    { id: 'youtube', name: 'YouTube', handle: '@Kudoos - Topic', href: 'https://www.youtube.com/channel/UC5wMYbpon10DUGA-ZVb36oQ', icon: 'youtube' },
    { id: 'x', name: 'X', handle: '@kudoosofficial', href: 'https://x.com/kudoosofficial?s=11', icon: 'x' },
    { id: 'facebook', name: 'Facebook', handle: '@𝕂𝕦𝕕𝕠𝕠𝕤', href: 'https://www.facebook.com/share/1Dea4N6vxT/?mibextid=wwXIfr', icon: 'facebook' },
    { id: 'snapchat', name: 'Snapchat', handle: '@kudoosofficial', href: 'https://snapchat.com/t/C7DDviI9', icon: 'snapchat' },
  ],

  /* ---------- CONTACT ---------- */
  contact: {
    management: { label: 'Management', name: 'Ada Okonkwo', email: 'Kudosiib@gmail.com', extra: 'Marlowe Artist Group' },
    booking: { label: 'Booking', email: 'booking@novareign.com', extra: 'Worldwide, excluding EU' },
    press: { label: 'Press & Media', email: 'press@novareign.com', extra: 'Interviews and features' },
    phone: '+234 800 000 0000',
    city: 'Lagos, Nigeria',
  },

  /* ---------- NEWSLETTER + TICKER ---------- */
  ticker: [
    'New single — Dance out now',
    'Life Is Not Easy — Available on all platforms',
    'Seeing Is Believing — KUDOOS official website',
    'Afrobeats sensation from Lagos, Nigeria',
    'Booking open for shows and performances',
  ],
};

/* ---------- NAVIGATION ---------- */
export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#music', label: 'Music' },
  { href: '#biography', label: 'Biography' },
  { href: '#videos', label: 'Videos' },
  { href: '#shows', label: 'Shows' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export const SECTION_IDS = ['home', 'music', 'biography', 'videos', 'shows', 'gallery', 'contact'];

/* ---------- SMALL HELPERS ---------- */
export const isPlaceholder = (href) => !href || href === '#' || href.trim() === '';
export const link = (href) => (isPlaceholder(href) ? '#' : href);
export const trackById = (id) => SITE.tracks.find((t) => t.id === id);
export const fmtTime = (s) => {
  s = Math.max(0, Math.floor(s || 0));
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
};
