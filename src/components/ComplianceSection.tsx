import { UserCheck, Bell, Tag, Barcode, FolderOpen } from 'lucide-react'

const steps = [
  {
    icon: UserCheck,
    title: 'UK Responsible Person Arrangement',
    body: 'Before any UKCBDHQ product is made available for sale in the UK, we will have a designated UK Responsible Person in place. This is the legal requirement for cosmetic products placed on the UK market, and we will not take product to market without it.',
  },
  {
    icon: Bell,
    title: 'Cosmetic Product Notification Where Required',
    body: 'Where required under UK cosmetics regulations, our products will be formally notified through the appropriate UK authority portal before sale. We are not treating this as optional — it is part of our standard launch process.',
  },
  {
    icon: Tag,
    title: 'External-Use Labelling',
    body: 'All UKCBDHQ products will carry clear, accurate labelling specifying their intended use as external-use cosmetic products. Labels will include full ingredient lists (INCI nomenclature), net quantity, batch reference, country of manufacture, and responsible person details.',
  },
  {
    icon: Barcode,
    title: 'Batch Traceability',
    body: 'Every product batch will have a unique identifier linked to its complete production and testing record. This means that from the moment a product leaves our manufacturer to the moment it arrives with a customer, the supply chain is fully documented and auditable.',
  },
  {
    icon: FolderOpen,
    title: 'Transparent Documentation',
    body: 'We maintain a product information file for each formulation, in line with UK cosmetic regulation requirements. This includes safety assessments, manufacturing records, and third-party test results. Our intention is to be audit-ready from day one.',
  },
]

export default function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="py-28 lg:py-36 bg-[#1a3329]"
      aria-labelledby="compliance-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-2">
            <p className="font-body text-[#d4af7a] text-sm font-semibold tracking-[0.18em] uppercase mb-5">
              Compliance &amp; Market Preparation
            </p>
            <div
              className="w-12 h-0.5 rounded mb-8"
              style={{ background: 'linear-gradient(90deg, #b8965a, #d4af7a)' }}
            />
            <h2
              id="compliance-heading"
              className="font-display text-4xl sm:text-5xl font-light text-white leading-[1.1] tracking-tight mb-8"
            >
              Prepared for the
              <br />
              <em className="font-medium text-[#d4af7a]">UK Market.</em>
            </h2>
            <p className="font-body text-white/65 text-base leading-relaxed mb-8">
              This section is provided for transparency — it is not legal
              advice. We are describing the steps we are taking as part of our
              responsible market preparation, not making representations about
              the regulatory status of any specific product.
            </p>

            {/* Disclaimer box */}
            <div className="p-5 rounded-xl border border-white/10 bg-white/04">
              <p className="font-body text-white/50 text-xs leading-relaxed">
                <strong className="text-white/70 font-semibold">
                  Important Notice:
                </strong>{' '}
                UKCBDHQ is a pre-launch brand. No products are currently
                available for sale. All compliance steps described here are
                part of our launch preparation process. Products will only
                go on sale once all applicable requirements have been met.
              </p>
            </div>
          </div>

          {/* Right: steps */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="flex gap-5 group">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#b8965a]/15 flex items-center justify-center group-hover:bg-[#b8965a]/25 transition-colors">
                    <Icon
                      size={17}
                      className="text-[#d4af7a]"
                      aria-hidden="true"
                    />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="flex-1 w-px mt-4 min-h-6"
                      style={{ background: 'rgba(255,255,255,0.08)' }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-lg font-semibold text-white mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
