import { Clock } from 'lucide-react';

interface ProductItem {
  category: string;
  title: string;
  potency: string;
  description: string;
  format: string;
  volume: string;
  ingredients: string;
  mockClass: string;
}

const products: ProductItem[] = [
  {
    category: "Targeted Patches",
    title: "Daily Transdermal Patch",
    potency: "30mg CBD per patch",
    description: "Designed for steady, slow-release application throughout the day. Sleek, waterproof, and near-invisible on the skin.",
    format: "Slow-Release Adhesive",
    volume: "30 Patches per pack",
    ingredients: "Pure CBD Isolate, Hypoallergenic Carrier adhesive",
    mockClass: "product-mockup-patch"
  },
  {
    category: "Targeted Patches",
    title: "Overnight Recovery Patch",
    potency: "50mg CBD per patch",
    description: "A higher-strength release formulation to comfort and restore your skin and muscles while you rest.",
    format: "Extended-Release Adhesive",
    volume: "15 Patches per pack",
    ingredients: "Pure CBD Isolate, Lavender oil extract, Carrier adhesive",
    mockClass: "product-mockup-patch"
  },
  {
    category: "Topical Gels",
    title: "Cryo-Cooling Gel",
    potency: "2000mg Active CBD",
    description: "Delivers an immediate cooling sensation to soothe fatigued areas. Perfect for post-workout application.",
    format: "Fast-Absorbing Hydrogel",
    volume: "100ml Airless Pump",
    ingredients: "Broad-Spectrum CBD, Menthol, Eucalyptus extract",
    mockClass: "product-mockup-gel"
  },
  {
    category: "Topical Balms",
    title: "Thermo-Warming Balm",
    potency: "1500mg Active CBD",
    description: "Provides deep warming comfort to promote ease of movement. Formulated with rich, skin-nourishing butter.",
    format: "Rich Salve / Balm",
    volume: "50ml Amber Jar",
    ingredients: "Broad-Spectrum CBD, Capsicum, Shea Butter, Beeswax",
    mockClass: "product-mockup-balm"
  },
  {
    category: "Recovery Creams",
    title: "Skin Restore Cream",
    potency: "1000mg Active CBD",
    description: "A nourishing botanical cream formulated to hydrate, protect, and restore dry or sensitive skin surfaces.",
    format: "Dermatological Cream",
    volume: "75ml Tube",
    ingredients: "Pure CBD, Rosehip seed oil, Calendula, Vitamin E",
    mockClass: "product-mockup-cream"
  }
];

export default function Products() {
  return (
    <section id="products" className="section section-alt">
      <div className="container">
        <div className="products-header">
          <span className="section-label">Selected Formulations</span>
          <h2 className="section-title">The Launch Range</h2>
          <p>
            An elite collection of high-strength external application formats. Zero ingestibles. Zero compromises. Prepared under cosmetic standards for precise targeted skin absorption.
          </p>
        </div>

        <div className="grid grid-3">
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              <div className="product-visual-wrapper">
                <span className="product-badge">
                  <span className="flex items-center" style={{ gap: '0.25rem' }}>
                    <Clock size={12} /> Launching Soon
                  </span>
                </span>
                <div className={`product-mockup ${product.mockClass}`}>
                  <span className="product-mockup-logo">UKCBDHQ</span>
                  <div>
                    <div className="product-mockup-potency">{product.potency.split(' ')[0]}</div>
                    <div className="product-mockup-label">{product.title.split(' ').slice(0, 2).join(' ')}</div>
                  </div>
                  <div className="product-mockup-spec">
                    <span>Cosmetic Grade</span>
                    <span>EU-Made</span>
                  </div>
                </div>
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-specs">
                  <div className="product-spec-item">
                    <span className="product-spec-label">Potency:</span>
                    <span className="product-spec-value">{product.potency}</span>
                  </div>
                  <div className="product-spec-item">
                    <span className="product-spec-label">Format / Qty:</span>
                    <span className="product-spec-value">{product.format} ({product.volume})</span>
                  </div>
                  <div className="product-spec-item">
                    <span className="product-spec-label">Key Actives:</span>
                    <span className="product-spec-value" style={{ textAlign: 'right', maxWidth: '60%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={product.ingredients}>
                      {product.ingredients.split(',')[0]}
                    </span>
                  </div>
                </div>

                <a href="#waitlist" className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto', textAlign: 'center' }}>
                  Notify Me At Launch
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
