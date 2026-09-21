import { SITE, isPlaceholder, link } from '../data/site';
import { ICONS } from './icons';
import Socials from './Socials';

export default function Footer() {
  const c = SITE.contact;
  const phoneHref = `tel:${c.phone.replace(/\s/g, '')}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="f-about">
            <a href="#home" className="logo" aria-label={`${SITE.artist.name} — home`}>
              <span className="logo-mark" aria-hidden="true">
                {ICONS.note}
              </span>
              <span className="logo-text">
                <span className="logo-name artist-name">{SITE.artist.name}</span>
                <span className="logo-sub">{SITE.artist.role}</span>
              </span>
            </a>
            <p>{SITE.artist.bioShort}</p>
            <div className="footer-social">
              <Socials />
            </div>
          </div>

          <div>
            <h4>Navigate</h4>
            <ul className="f-links">
              <li><a href="#music">Music</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#shows">Shows</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4>Listen</h4>
            <ul className="f-links">
              {SITE.platforms.map((p) => (
                <li key={p.id}>
                  <a
                    href={link(p.href)}
                    {...(isPlaceholder(p.href) ? { 'data-placeholder': p.id } : {})}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="f-contact">
              <li>
                {ICONS.mail}
                <span>
                  <a href={`mailto:${c.booking.email}`}>{c.booking.email}</a>
                  <br />
                  <span style={{ fontSize: '.78rem', color: '#6C7382' }}>Booking</span>
                </span>
              </li>
              <li>
                {ICONS.mail}
                <span>
                  <a href={`mailto:${c.management.email}`}>{c.management.email}</a>
                  <br />
                  <span style={{ fontSize: '.78rem', color: '#6C7382' }}>Management</span>
                </span>
              </li>
              <li>
                {ICONS.phone}
                <span><a href={phoneHref}>{c.phone}</a></span>
              </li>
              <li>
                {ICONS.pin}
                <span>{c.city}</span>
              </li>
            </ul>
            <div className="f-plat">
              {SITE.socials.slice(0, 4).map((s) => (
                <a
                  key={s.id}
                  href={link(s.href)}
                  {...(isPlaceholder(s.href) ? { 'data-placeholder': s.id } : {})}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="f-copy">© 2026 {SITE.artist.name}. All Rights Reserved.</p>
          <nav className="f-legal" aria-label="Legal">
            <a href="#" data-placeholder="privacy">Privacy Policy</a>
            <a href="#" data-placeholder="terms">Terms of Use</a>
            <a href="#contact">Booking</a>
            <a href="#home">Back to top</a>
          </nav>
        </div>

        <div className="footer-creator">
          <a href="https://chisomfy.netlify.app/" target="_blank" rel="noopener noreferrer" className="creator-link">
            <span className="creator-text">Website created by</span>
            <img src="/picture/chisomfy.png" alt="Chisomfy" className="creator-logo" />
            <span className="creator-name">Chisomfy</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
