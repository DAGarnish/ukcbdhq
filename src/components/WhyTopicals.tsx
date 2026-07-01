export default function WhyTopicals() {
  return (
    <section id="why-topicals" className="section section-dark">
      <div className="container">
        <div className="grid grid-2 why-topicals-grid">
          <div>
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>Expert Focus</span>
            <h2 className="section-title-left" style={{ textAlign: 'left' }}>Why Topicals & Patches?</h2>
            <p style={{ marginTop: '1.5rem', color: 'rgba(250, 248, 245, 0.8)' }}>
              Instead of diluting our efforts with oils, drops, and ingestible products, UKCBDHQ focuses exclusively on targeted, external application. We believe the future of CBD is localized, accessible, and integrated smoothly into daily wellness routines.
            </p>

            <div className="topicals-arguments" style={{ marginTop: '2rem' }}>
              <div className="argument-card">
                <h3 className="argument-title">1. Target-Specific Sensation</h3>
                <p className="argument-desc">
                  Unlike oils that distribute throughout the entire body system, topicals allow you to apply active ingredients exactly where you want to comfort, cool, or warm your skin.
                </p>
              </div>

              <div className="argument-card">
                <h3 className="argument-title">2. Straightforward Integration</h3>
                <p className="argument-desc">
                  Patches and gels fit seamlessly into your existing skincare, recovery, or morning prep. There are no unpleasant tastes, complex measurements, or droppers involved.
                </p>
              </div>

              <div className="argument-card">
                <h3 className="argument-title">3. Simplified Regulatory Path</h3>
                <p className="argument-desc">
                  External cosmetics bypass the complex ingestible food regulations, ensuring a more transparent, highly reliable, and faster pathway to launch under UK cosmetic laws.
                </p>
              </div>
            </div>
          </div>

          <div className="topicals-graphic">
            <h3 style={{ color: 'var(--color-cream)', fontSize: '1.25rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
              Formulation Application Focus
            </h3>
            
            <div className="graphic-comparison">
              <div className="graphic-row">
                <span className="graphic-label">Ingestibles</span>
                <div className="graphic-bar-container">
                  <div className="graphic-bar graphic-bar-oils">
                    <span className="graphic-bar-text graphic-bar-text-white">Diffuse</span>
                  </div>
                </div>
              </div>

              <div className="graphic-row">
                <span className="graphic-label">Topicals</span>
                <div className="graphic-bar-container">
                  <div className="graphic-bar graphic-bar-topicals">
                    <span className="graphic-bar-text">Targeted Focus (95%)</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="graphic-note">
              *Comparison represents target concentration focus on external skin application versus systemic full-body distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
