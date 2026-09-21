import { SITE, isPlaceholder, link } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';

export default function News() {
  return (
    <section className="section" id="news">
      <div className="container">
        <div className="section-head">
          <Reveal className="sh-left">
            <span className="eyebrow blue">Journal</span>
            <h2 className="display h-lg">Latest News</h2>
            <p className="lead">Release announcements, interviews, collaborations and updates straight from the studio.</p>
          </Reveal>
        </div>

        <Reveal className="news-grid">
          {SITE.news.map((n) => (
            <article className="news" key={n.title}>
              <div className="news-img">
                <img src={n.image} alt={n.title} loading="lazy" />
                <span className={`news-cat ${n.tone}`}>{n.category}</span>
              </div>
              <div className="news-body">
                <span className="news-date">{n.date}</span>
                <h3 className="news-title">{n.title}</h3>
                <p className="news-ex">{n.excerpt}</p>
                <a
                  className="link-arrow"
                  href={link(n.href)}
                  {...(isPlaceholder(n.href) ? { 'data-placeholder': 'news' } : {})}
                >
                  Read More {ICONS.ext}
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
