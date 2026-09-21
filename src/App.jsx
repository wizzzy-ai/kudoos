import { useEffect, useRef, useState } from 'react';
import { PlayerProvider } from './context/PlayerContext';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Music from './components/Music';
import Spotlight from './components/Spotlight';
import About from './components/About';
import Videos from './components/Videos';
import Events from './components/Events';
import Gallery from './components/Gallery';
import SocialGrid from './components/SocialGrid';
import Booking from './components/Booking';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackTop from './components/BackTop';
import Toast from './components/Toast';

const reduceMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  /* body scroll lock while the mobile drawer is open */
  useEffect(() => {
    document.body.classList.toggle('nav-open', drawerOpen);
    return () => document.body.classList.remove('nav-open');
  }, [drawerOpen]);

  /* close drawer on Escape / when resizing to desktop */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false); };
    const onResize = () => { if (window.innerWidth > 1080) setDrawerOpen(false); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  /* Placeholder-link guard: unset links show a toast instead of navigating. */
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[data-placeholder]');
      if (!a) return;
      e.preventDefault();
      const label = a.dataset.placeholder;
      setToast(`Placeholder link (“${label}”) — replace this URL in the SITE config with the real one.`);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  /* auto-dismiss toast */
  useEffect(() => {
    if (!toast) return undefined;
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3600);
    return () => clearTimeout(toastTimer.current);
  }, [toast]);

  /* Smooth-scroll for in-page anchors (respecting reduced motion) */
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY
        - (window.innerWidth > 1080 ? 76 : 66);
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  /* Boot log (parity with the original site) */
  useEffect(() => {
    console.log('%cNOVA REIGN — site config loaded', 'color:#E8112D;font-weight:700');
  }, []);

  return (
    <PlayerProvider>
      <Navbar drawerOpen={drawerOpen} onToggleDrawer={() => setDrawerOpen((o) => !o)} />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main>
        <Hero />
        <Ticker />
        <Music />
        <Spotlight />
        <About />
        <Videos />
        <Events />
        <Gallery />
        <SocialGrid />
        <Booking />
        <Newsletter />
      </main>

      <Footer />
      <BackTop />
      <Toast message={toast} />
    </PlayerProvider>
  );
}
