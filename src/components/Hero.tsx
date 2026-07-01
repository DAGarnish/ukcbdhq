// No imports needed

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-shapes">
        <div className="hero-shape-1"></div>
        <div className="hero-shape-2"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tagline">Premium European Formulation</span>
          <h1 className="hero-headline">
            High-Strength CBD Topicals & Patches.<br />
            <span style={{ color: 'var(--color-gold)' }}>Refined for the UK.</span>
          </h1>
          <p className="hero-subheadline">
            Introducing a premium range of external-use formulas, meticulously crafted in Spain. Engineered to strict EU quality standards for targeted, everyday physical comfort and skin nourishment.
          </p>
          <div className="hero-ctas">
            <a href="#waitlist" className="btn btn-gold">Join the VIP Waitlist</a>
            <a href="#products" className="btn btn-secondary">Explore the Range</a>
          </div>
          <div className="hero-bullets">
            <div className="hero-bullet-item">
              <span className="hero-bullet-label">Origin</span>
              <span className="hero-bullet-desc">Spanish Manufactured</span>
            </div>
            <div className="hero-bullet-item">
              <span className="hero-bullet-label">Testing</span>
              <span className="hero-bullet-desc">Third-Party Lab Tested</span>
            </div>
            <div className="hero-bullet-item">
              <span className="hero-bullet-label">Application</span>
              <span className="hero-bullet-desc">External Use Only</span>
            </div>
            <div className="hero-bullet-item">
              <span className="hero-bullet-label">Standards</span>
              <span className="hero-bullet-desc">UK-Focused Launch</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card">
            <div className="flex justify-between items-center" style={{ width: '100%' }}>
              <span className="hero-visual-logo">UKCBDHQ</span>
              <span className="hero-visual-tag">Pre-Release</span>
            </div>
            
            <div className="hero-visual-main">
              <div className="hero-visual-potency">2000mg</div>
              <div className="hero-visual-title">Targeted Relief Gel</div>
              <p style={{ color: 'rgba(250,248,245,0.6)', fontSize: '0.75rem', marginTop: '0.5rem', marginBottom: 0 }}>
                High-Potency External Application
              </p>
            </div>

            <div className="hero-visual-footer">
              <span>50ml e</span>
              <span>Made in Spain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
