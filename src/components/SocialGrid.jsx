import { SITE, isPlaceholder, link } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';

export default function SocialGrid() {
  return (
    <section className="section social-section" id="social">
      <div className="container">
        <Reveal className="social-head">
          <span className="eyebrow">Follow</span>
          <h2 className="display h-lg">Join The Movement</h2>
          <p>New music, behind-the-scenes content and tour announcements land on socials first.</p>
        </Reveal>

        <Reveal className="social-grid d1">
          {SITE.socials.map((s) => (
            <a
              key={s.id}
              className={`social-card ${s.id}`}
              href={link(s.href)}
              {...(isPlaceholder(s.href) ? { 'data-placeholder': s.id } : {})}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ICONS[s.icon]}
              <span className="nm">{s.name}</span>
              <span className="hd">{s.handle}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
