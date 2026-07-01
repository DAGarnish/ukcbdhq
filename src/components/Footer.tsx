export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">UKCBDHQ</span>
            <p className="footer-summary">
              Specializing in high-strength, targeted external-use CBD formulations. Meticulously sourced and manufactured in Spain to meet strict European standards.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-links-title">Information</h4>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#why-spain" className="footer-link">The Spanish Sourcing</a></li>
              <li><a href="#products" className="footer-link">Launch Range</a></li>
              <li><a href="#why-topicals" className="footer-link">Why External CBD</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-links-title">Contact & Support</h4>
            <div className="footer-contact" style={{ marginBottom: '1rem' }}>
              <span className="footer-contact-label">Pre-Launch Queries</span>
              <a href="mailto:hello@ukcbdhq.co.uk" className="footer-contact-value">hello@ukcbdhq.co.uk</a>
            </div>
            <div className="footer-contact">
              <span className="footer-contact-label">Laboratory Sourcing</span>
              <span className="footer-contact-value">Barcelona, Spain</span>
            </div>
          </div>
        </div>

        <div style={{ margin: '2rem 0', padding: '1.5rem', backgroundColor: 'rgba(250,248,245,0.02)', borderRadius: '2px', border: '1px solid rgba(250,248,245,0.05)', fontSize: '0.8rem', color: 'rgba(250, 248, 245, 0.5)', lineHeight: '1.5' }}>
          <strong>Compliance Disclaimer:</strong> UKCBDHQ products are registered cosmetic formulations designed strictly for external/topical application only. They are not intended to diagnose, treat, cure, or prevent any physical ailment, disease, or medical condition. All manufacturing processes align with European Good Manufacturing Practices (GMP) and UK regulatory pathways.
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} UKCBDHQ. All rights reserved.</p>
          <ul className="footer-legal-links">
            <li><a href="#" className="footer-legal-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-legal-link">Terms & Conditions</a></li>
            <li><a href="#compliance" className="footer-legal-link">Compliance Dossier</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
