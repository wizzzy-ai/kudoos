import { useState } from 'react';
import { SITE } from '../data/site';
import { ICONS } from './icons';
import Reveal from './Reveal';

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="nl-inner">
          <Reveal className="nl-copy">
            <span className="nl-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}><path d="M4 4h16v16H4z" /><path d="m4 6 8 6 8-6" /></svg>
              No spam, ever
            </span>
            <h2 className="display h-md">Stay In The Loop</h2>
            <p>Get new music, show announcements and exclusive updates directly in your inbox.</p>
          </Reveal>

          <Reveal className="d1">
            <NewsletterForm />
            <p className="nl-priv">By subscribing you agree to receive occasional emails from Kudoos. Unsubscribe anytime.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState(null); // { ok, text }

  const submit = (e) => {
    e.preventDefault();
    const val = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) {
      setMsg({ ok: false, text: 'Please enter a valid email address.' });
      return;
    }
    setMsg({ ok: true, text: "You're on the list. Welcome to the movement." });
    setEmail('');
  };

  return (
    <>
      <form className="nl-form" id="nlForm" noValidate onSubmit={submit}>
        <label className="sr-only" htmlFor="nl-email">Email address</label>
        <input
          className="nl-input"
          type="email"
          id="nl-email"
          placeholder="Enter your email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="nl-btn" type="submit">
          Subscribe
          {ICONS.arrowRight}
        </button>
      </form>
      <div
        className={`nl-msg${msg ? ' show' : ''}`}
        id="nlMsg"
        role="status"
        aria-live="polite"
      >
        {msg && (msg.ok ? ICONS.check : ICONS.warn)}
        {msg && <span>{msg.text}</span>}
      </div>
    </>
  );
}
