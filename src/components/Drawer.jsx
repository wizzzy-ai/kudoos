import { NAV_LINKS } from '../data/site';
import { ICONS } from './icons';
import Socials from './Socials';

const DELAYS = ['.05s', '.1s', '.15s', '.2s', '.25s', '.3s', '.35s', '.4s'];

export default function Drawer({ open, onClose }) {
  return (
    <div
      className={`drawer${open ? ' open' : ''}`}
      id="drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="drawer-links" id="drawerLinks">
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.href}
            className="drawer-link"
            href={l.href}
            style={{ transitionDelay: DELAYS[i] }}
            onClick={onClose}
          >
            <span>{l.label}</span>
            <span className="idx">{String(i + 1).padStart(2, '0')}</span>
          </a>
        ))}
      </div>
      <div className="drawer-foot">
        <a href="#music" className="btn btn-red btn-block" onClick={onClose}>
          {ICONS.play}
          Listen Now
        </a>
        <Socials />
      </div>
    </div>
  );
}
