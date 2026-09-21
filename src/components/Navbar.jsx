import { NAV_LINKS, SECTION_IDS, SITE } from '../data/site';
import { ICONS } from './icons';
import useActiveSection from '../hooks/useActiveSection';
import useScrollY from '../hooks/useScrollY';

export default function Navbar({ drawerOpen, onToggleDrawer }) {
  const scrolled = useScrollY() > 40;
  const active = useActiveSection(SECTION_IDS);
  const a = SITE.artist;

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <a href="#home" className="logo" aria-label={`${a.name} — home`}>
          <span className="logo-mark" aria-hidden="true">
            {ICONS.note}
          </span>
          <span className="logo-text">
            <span className="logo-name artist-name">{a.name}</span>
            <span className="logo-sub">Official Site</span>
          </span>
        </a>

        <nav className="nav-links" id="navLinks" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              className={`nav-link${active === l.href.slice(1) ? ' active' : ''}`}
              href={l.href}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#music" className="btn btn-red btn-sm btn-nav">
            {ICONS.play}
            Listen Now
          </a>
          <button
            className="burger"
            id="burger"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            aria-controls="drawer"
            onClick={onToggleDrawer}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
