import { Shield, Check } from 'lucide-react';

export default function Compliance() {
  return (
    <section id="compliance" className="section section-alt">
      <div className="container compliance-container">
        <div className="compliance-info">
          <span className="section-label">Regulatory Standards</span>
          <h2 className="section-title-left" style={{ textAlign: 'left' }}>Compliant by Design</h2>
          <p style={{ marginTop: '1.5rem' }}>
            We do not believe in regulatory shortcuts. UKCBDHQ approaches the UK market with structured pathways, building security and consumer safety directly into our logistics and packaging designs.
          </p>
          <p>
            By designing our formulations exclusively as cosmetics and targeted topicals, we follow clear, established UK legislative pathways. Our Spanish manufacturing facilities work hand-in-hand with cosmetic scientists to compile full technical dossiers prior to distribution.
          </p>
        </div>

        <div className="compliance-box">
          <h3 className="compliance-title">
            <span className="flex items-center" style={{ gap: '0.5rem' }}>
              <Shield size={20} className="compliance-check" /> UK Compliance Checklist
            </span>
          </h3>
          
          <ul className="compliance-list">
            <li className="compliance-item">
              <span className="compliance-check"><Check size={18} /></span>
              <div>
                <h4 className="compliance-item-title">UK Responsible Person (RP)</h4>
                <p className="compliance-item-desc">
                  An designated UK legal entity will hold our product dossiers and ensure ongoing safety alignment before any commercial sale begins.
                </p>
              </div>
            </li>

            <li className="compliance-item">
              <span className="compliance-check"><Check size={18} /></span>
              <div>
                <h4 className="compliance-item-title">Cosmetic Product Notification Portal (CPNP/SCPN)</h4>
                <p className="compliance-item-desc">
                  All formulations will be officially notified through the UK cosmetics portal prior to shipping to ensure formal state traceability.
                </p>
              </div>
            </li>

            <li className="compliance-item">
              <span className="compliance-check"><Check size={18} /></span>
              <div>
                <h4 className="compliance-item-title">Clear External-Use Labelling</h4>
                <p className="compliance-item-desc">
                  Every product is strictly designated, labelled, and instructed for topical/external applications only, in accordance with cosmetic guidelines.
                </p>
              </div>
            </li>

            <li className="compliance-item">
              <span className="compliance-check"><Check size={18} /></span>
              <div>
                <h4 className="compliance-item-title">Full Batch Traceability</h4>
                <p className="compliance-item-desc">
                  Advanced batch-coding allows for precise tracking from raw organic Spanish harvest to the final packaged topical container.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
