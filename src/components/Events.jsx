import { SITE, isPlaceholder } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';

export default function Events() {
  const events = SITE.events;

  return (
    <section className="section" id="shows">
      <div className="container">
        <div className="section-head">
          <Reveal className="sh-left">
            <span className="eyebrow">Live</span>
            <h2 className="display h-lg">Upcoming Shows</h2>
            <p className="lead">Tour dates, festival slots and intimate sessions. Tap any date for tickets.</p>
          </Reveal>
        </div>

        <Reveal>
          {events.length === 0 ? (
            <div className="event-empty">
              <span className="ic">{ICONS.calendar}</span>
              <h3>New Shows Coming Soon</h3>
              <p>Stay tuned. Tour dates, festival slots and pop-up sessions will be announced here first — follow on socials so you don't miss the drop.</p>
              <a href="#social" className="btn btn-blue btn-sm">Follow For Updates</a>
            </div>
          ) : (
            <>
              <div className="event-list">
                {events.map((e) => {
                  const saleLive = !isPlaceholder(e.ticketUrl);
                  return (
                    <article className="event" key={`${e.date}-${e.name}`}>
                      <div className="event-date">
                        <span className="m">{e.month}</span>
                        <span className="d">{e.day}</span>
                        <span className="y">{e.year}</span>
                      </div>
                      <div>
                        <h3 className="event-name">{e.name}</h3>
                        <p className="event-venue">{e.venue}</p>
                      </div>
                      <div className="event-loc">
                        {ICONS.pin}
                        <span>{e.city}, {e.country}</span>
                      </div>
                      <div className="event-actions">
                        <a
                          className="btn btn-red btn-sm"
                          href={saleLive ? e.ticketUrl : '#contact'}
                          {...(saleLive
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : { 'data-placeholder': 'tickets' })}
                        >
                          {ICONS.ticket} {saleLive ? 'Get Tickets' : 'Ticket Info'}
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
              <p className="form-note" style={{ marginTop: '18px' }}>
                Ticket links are placeholders — replace <code style={{ color: '#9AA1B0' }}>&nbsp;ticketUrl&nbsp;</code> in the events data with real URLs to enable direct purchase.
              </p>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
