import { SITE, isPlaceholder, link } from '../data/site';
import { ICONS } from './icons';

/* Row of square social icon links (hero / drawer / footer). */
export default function Socials({ style }) {
  return (
    <div className="socials" style={style}>
      {SITE.socials.map((s) => (
        <a
          key={s.id}
          className={`soc ${s.id}`}
          href={link(s.href)}
          {...(isPlaceholder(s.href) ? { 'data-placeholder': s.id } : {})}
          target="_blank"
          rel="noopener noreferrer"
          title={`${s.name} — ${s.handle}`}
          aria-label={s.name}
        >
          {ICONS[s.icon]}
        </a>
      ))}
    </div>
  );
}
