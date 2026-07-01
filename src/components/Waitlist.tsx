'use client';

import { useState } from 'react';
import { MailCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [queuePosition, setQueuePosition] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !consent) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, interest, consent }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setQueuePosition(Math.floor(Math.random() * 400) + 102);
      setSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="section waitlist-section">
      <div className="container">
        <div className="waitlist-card">
          {!submitted ? (
            <>
              <h2 className="waitlist-headline">Request Launch Invitation</h2>
              <p className="waitlist-sub">
                Our initial batch is strictly limited due to precise laboratory scheduling. Secure your place now to lock in priority access and member-only pricing.
              </p>

              {error && (
                <div style={{ color: '#ff6b6b', backgroundColor: 'rgba(255, 107, 107, 0.1)', padding: '0.95rem 1.25rem', borderRadius: '3px', marginBottom: '1.75rem', fontSize: '0.9rem', border: '1px solid rgba(255, 107, 107, 0.2)', textAlign: 'left', fontFamily: 'var(--font-sans)' }}>
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="waitlist-form-wrapper">
                <div className="form-group-grid">
                  <div className="form-group">
                    <label htmlFor="waitlist-name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="waitlist-name"
                      className="form-input" 
                      placeholder="e.g. Alexander Mercer" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="waitlist-email" className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      id="waitlist-email"
                      className="form-input" 
                      placeholder="name@domain.co.uk" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="waitlist-interest" className="form-label">Primary Product Interest (Optional)</label>
                  <select 
                    id="waitlist-interest" 
                    className="form-select"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option value="">Select a formulation category...</option>
                    <option value="patches">Daily & Overnight Transdermal Patches</option>
                    <option value="gels">Cryo-Cooling Topical Gels</option>
                    <option value="balms">Thermo-Warming Botanical Balms</option>
                    <option value="creams">Dermatological Recovery Creams</option>
                    <option value="all">Interested in the Entire Launch Range</option>
                  </select>
                </div>

                <div className="form-checkbox-group">
                  <input 
                    type="checkbox" 
                    id="waitlist-consent" 
                    className="form-checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                  />
                  <label htmlFor="waitlist-consent" className="form-checkbox-label">
                    I agree to receive pre-launch notifications, laboratory updates, and exclusive VIP offers from UKCBDHQ. I understand that I can unsubscribe at any time.
                  </label>
                </div>

                <button type="submit" className="btn btn-gold waitlist-submit-btn" disabled={loading}>
                  <span className="flex items-center justify-center" style={{ gap: '0.5rem' }}>
                    {loading ? "Requesting Access..." : "Request Priority Access"} <ArrowRight size={16} />
                  </span>
                </button>
              </form>
            </>
          ) : (
            <div className="success-card">
              <div className="success-icon-box">
                <MailCheck size={32} />
              </div>
              <h2 className="success-title">Invitation Request Received</h2>
              <p className="success-message">
                Thank you, <strong>{name}</strong>. We have registered <strong>{email}</strong> for our VIP pre-launch allocation pool.
              </p>
              <div className="success-share">
                <span className="flex items-center justify-center" style={{ gap: '0.5rem' }}>
                  <ShieldCheck size={16} /> Queue Position: #{queuePosition.toLocaleString()} | VIP Priority Status Activated
                </span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(250,248,245,0.5)', marginTop: '1.5rem', marginBottom: 0 }}>
                We will email you as soon as our laboratory completes batch clearance for shipping into the UK.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
