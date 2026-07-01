import { Landmark, Compass, Zap } from 'lucide-react';

export default function WhySpain() {
  return (
    <section id="why-spain" className="section">
      <div className="container">
        <div className="grid grid-2 why-spain-grid">
          <div>
            <span className="section-label">Strategic Sourcing</span>
            <h2 className="section-title-left" style={{ textAlign: 'left' }}>The Spanish Advantage</h2>
            <p style={{ marginTop: '1.5rem' }}>
              Spain has emerged as a premier hub for high-end cosmetic and dermatological formulations in Europe. Sourcing our products here guarantees more than raw quality—it builds compliance, consistency, and operational strength directly into our brand DNA.
            </p>
            
            <div className="spain-features">
              <div className="spain-feature-item">
                <div className="spain-feature-icon">
                  <Landmark size={20} />
                </div>
                <div>
                  <h3 className="spain-feature-title">European Manufacturing Standards</h3>
                  <p className="spain-feature-desc">
                    Produced under strict European Good Manufacturing Practices (GMP) and European cosmetic formulation regulations, ensuring unmatched quality control and safety.
                  </p>
                </div>
              </div>

              <div className="spain-feature-item">
                <div className="spain-feature-icon">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="spain-feature-title">Dermatological Innovation</h3>
                  <p className="spain-feature-desc">
                    Access to Spain’s sophisticated cosmetic and biological formulation ecosystem, allowing for superior ingredient absorption, premium texture, and high-strength concentration.
                  </p>
                </div>
              </div>

              <div className="spain-feature-item">
                <div className="spain-feature-icon">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="spain-feature-title">DDP-Ready Operational Logistics</h3>
                  <p className="spain-feature-desc">
                    With import pipelines prepared under Delivered Duty Paid (DDP) terms, our logistics channel is optimized for seamless, hassle-free customs handling into the UK.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-spain-visual">
            <div className="why-spain-visual-stamp">
              <span>Formulated In</span>
              <span>Barcelona</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--color-gold)', marginTop: '0.5rem', letterSpacing: '0.15em' }}>EUROPEAN UNION</span>
            </div>
            <p style={{ textAlign: 'center', color: 'rgba(250,248,245,0.7)', fontSize: '0.85rem', marginTop: '2rem', marginBottom: 0, padding: '0 2rem' }}>
              Strategic manufacturing proximity to key raw ingredients and specialized laboratory partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
