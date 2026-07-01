import { ShieldCheck, FileSpreadsheet, Layers, Compass, HelpCircle, HeartHandshake } from 'lucide-react';

export default function Trust() {
  return (
    <section id="labs" className="section">
      <div className="container">
        <div className="products-header">
          <span className="section-label">Quality First</span>
          <h2 className="section-title">Trust & Transparency</h2>
          <p>
            Operating in a highly regulated landscape means holding ourselves to superior standards. Here is how we build trust into every single formula we release.
          </p>
        </div>

        <div className="grid grid-3 trust-grid">
          <div className="trust-card">
            <div className="trust-icon-box">
              <ShieldCheck size={28} />
            </div>
            <h3 className="trust-title">Third-Party Lab Tested</h3>
            <p className="trust-desc">
              Every production batch undergoes independent validation to verify concentration profile, purity, and safety consistency before dispatch.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-box">
              <FileSpreadsheet size={28} />
            </div>
            <h3 className="trust-title">COAs Available at Launch</h3>
            <p className="trust-desc">
              Certificates of Analysis (COAs) will be fully accessible online, allowing you to trace your batch numbers directly to official laboratory reports.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-box">
              <Layers size={28} />
            </div>
            <h3 className="trust-title">Ingredient Traceability</h3>
            <p className="trust-desc">
              We list all inactive ingredients and botanical carriers in full. No hidden synthetic compounds, no artificial fillers, just pure botanical chemistry.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-box">
              <Compass size={28} />
            </div>
            <h3 className="trust-title">EU Sourced & Formulated</h3>
            <p className="trust-desc">
              Grown and processed in Spain under rigorous European agricultural and cosmetic laboratory criteria.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-box">
              <HelpCircle size={28} />
            </div>
            <h3 className="trust-title">UK Compliance Pathway</h3>
            <p className="trust-desc">
              Active regulatory coordination ensuring all packaging, labeling, and cosmetic files comply perfectly with UK standards.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-box">
              <HeartHandshake size={28} />
            </div>
            <h3 className="trust-title">Dedicated Support</h3>
            <p className="trust-desc">
              Our UK-focused team is ready to answer formatting, concentration, or tracking questions to ensure complete confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
