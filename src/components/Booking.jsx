import { useRef, useState } from 'react';
import { SITE } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';

const EVENT_TYPES = [
  'Festival / Concert',
  'Club / Nightlife',
  'Private Event',
  'Corporate Event',
  'Feature / Collaboration',
  'Brand Campaign',
  'Interview / Press',
  'Other',
];

/* Same validation rules as the original site. */
const RULES = {
  name: (v) => v.trim().length >= 2 || 'Please enter your name.',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address.',
  eventType: (v) => v !== '' || 'Please choose an event type.',
  message: (v) => v.trim().length >= 10 || 'Please add at least 10 characters.',
};

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  location: '',
  message: '',
};

export default function Booking() {
  const c = SITE.contact;
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { ok, content }
  const refs = useRef({});

  const check = (id, v) => {
    const rule = RULES[id];
    if (!rule) return true;
    const res = rule(v);
    if (res === true) {
      setErrors((e) => (e[id] ? { ...e, [id]: undefined } : e));
      return true;
    }
    setErrors((e) => ({ ...e, [id]: res }));
    return false;
  };

  const onChange = (id) => (e) => {
    const v = e.target.value;
    setValues((s) => ({ ...s, [id]: v }));
    // re-validate live once a field is already marked invalid
    if (errors[id]) check(id, v);
  };

  const onBlur = (id) => () => check(id, values[id]);

  const submit = (e) => {
    e.preventDefault();
    let ok = true;
    let firstBad = null;
    Object.keys(RULES).forEach((id) => {
      if (!check(id, values[id])) {
        ok = false;
        if (!firstBad) firstBad = refs.current[id];
      }
    });

    if (!ok) {
      setStatus({
        ok: false,
        content: (
          <>
            {ICONS.warn}
            <span style={{ display: 'block' }}>Please fix the highlighted fields and try again.</span>
          </>
        ),
      });
      if (firstBad) firstBad.focus({ preventScroll: false });
      return;
    }

    setStatus({
      ok: true,
      content: (
        <>
          {ICONS.check}
          <span style={{ display: 'block' }}>
            <strong>Request received.</strong>
            <br />
            Thanks — management will reply within 48 hours. (Demo: this form is not yet connected to a booking inbox.)
          </span>
        </>
      ),
    });
    setValues(INITIAL);
  };

  const field = (id, label, required, node) => (
    <div className={`field${errors[id] ? ' invalid' : ''}`}>
      <label className="label" htmlFor={`bk-${id}`}>
        {label} {required && <span className="req">*</span>}
      </label>
      {node}
      <span className="err" data-err>
        {ICONS.warn}
        <span>{errors[id] || ''}</span>
      </span>
    </div>
  );

  return (
    <section className="section booking" id="contact">
      <div className="container">
        <div className="section-head">
          <Reveal className="sh-left">
            <span className="eyebrow">Bookings &amp; Enquiries</span>
            <h2 className="display h-lg">Book The Artist</h2>
            <p className="lead">For headline shows, festivals, features, brand campaigns and press — send the details below and management will respond within 48 hours.</p>
          </Reveal>
        </div>

        <div className="booking-grid">
          <Reveal className="d1">
            <div className="contact-cards">
              <div className="ccard">
                <span className="ic red">{ICONS.mail}</span>
                <div>
                  <div className="l">{c.booking.label}</div>
                  <div className="v"><a href={`mailto:${c.booking.email}`}>{c.booking.email}</a></div>
                  <div className="s">{c.booking.extra}</div>
                </div>
              </div>
              <div className="ccard">
                <span className="ic blue">{ICONS.mail}</span>
                <div>
                  <div className="l">{c.management.label}</div>
                  <div className="v"><a href={`mailto:${c.management.email}`}>{c.management.email}</a></div>
                  <div className="s">{c.management.extra}</div>
                </div>
              </div>
              <div className="ccard">
                <span className="ic">{ICONS.mail}</span>
                <div>
                  <div className="l">{c.press.label}</div>
                  <div className="v"><a href={`mailto:${c.press.email}`}>{c.press.email}</a></div>
                  <div className="s">{c.press.extra}</div>
                </div>
              </div>
              <div className="ccard">
                <span className="ic blue">{ICONS.pin}</span>
                <div>
                  <div className="l">Based In</div>
                  <div className="v">{c.city}</div>
                  <div className="s">Available worldwide for touring</div>
                </div>
              </div>
              <div className="rep-card">
                <div className="l">Management Representative</div>
                <div className="n">{c.management.name}</div>
                <div className="s">
                  {c.management.extra} · <a href={`mailto:${c.management.email}`} style={{ color: '#fff' }}>{c.management.email}</a>
                </div>
                <div className="s" style={{ marginTop: '8px' }}>
                  Phone: <a href={`tel:${c.phone.replace(/\s/g, '')}`} style={{ color: '#fff' }}>{c.phone}</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="form-card d2">
            <form id="bookingForm" noValidate onSubmit={submit}>
              <div className="form-grid">
                {field('name', 'Full Name', true, (
                  <input
                    ref={(el) => { refs.current.name = el; }}
                    className="input"
                    type="text"
                    id="bk-name"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange('name')}
                    onBlur={onBlur('name')}
                    required
                  />
                ))}

                {field('email', 'Email', true, (
                  <input
                    ref={(el) => { refs.current.email = el; }}
                    className="input"
                    type="email"
                    id="bk-email"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange('email')}
                    onBlur={onBlur('email')}
                    required
                  />
                ))}

                <div className="field">
                  <label className="label" htmlFor="bk-phone">Phone</label>
                  <input
                    className="input"
                    type="tel"
                    id="bk-phone"
                    name="phone"
                    placeholder="+234 800 000 0000"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={onChange('phone')}
                  />
                </div>

                {field('eventType', 'Event Type', true, (
                  <select
                    ref={(el) => { refs.current.eventType = el; }}
                    className="select"
                    id="bk-type"
                    name="eventType"
                    value={values.eventType}
                    onChange={onChange('eventType')}
                    onBlur={onBlur('eventType')}
                    required
                  >
                    <option value="">Select an option</option>
                    {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                ))}

                <div className="field">
                  <label className="label" htmlFor="bk-date">Event Date</label>
                  <input
                    className="input"
                    type="date"
                    id="bk-date"
                    name="eventDate"
                    value={values.eventDate}
                    onChange={onChange('eventDate')}
                  />
                </div>

                <div className="field">
                  <label className="label" htmlFor="bk-location">Location</label>
                  <input
                    className="input"
                    type="text"
                    id="bk-location"
                    name="location"
                    placeholder="City, Country"
                    value={values.location}
                    onChange={onChange('location')}
                  />
                </div>

                <div className={`field span-2${errors.message ? ' invalid' : ''}`}>
                  <label className="label" htmlFor="bk-msg">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    ref={(el) => { refs.current.message = el; }}
                    className="textarea"
                    id="bk-msg"
                    name="message"
                    placeholder="Tell us about the event, budget range, expected audience and any other details…"
                    value={values.message}
                    onChange={onChange('message')}
                    onBlur={onBlur('message')}
                    required
                  />
                  <span className="err" data-err>
                    {ICONS.warn}
                    <span>{errors.message || ''}</span>
                  </span>
                </div>
              </div>

              <button type="submit" className="btn btn-red btn-block" style={{ marginTop: '22px' }}>
                {ICONS.send}
                Send Booking Request
              </button>

              <p className="form-note">
                This form is front-end only. Connect it to your booking inbox (or a service like Formspree / Netlify Forms) to receive real submissions.
              </p>

              <div
                className={`form-status${status ? ' show' : ''}${status?.ok ? ' ok' : ''}`}
                id="formStatus"
                role="status"
                aria-live="polite"
              >
                {status?.content}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
