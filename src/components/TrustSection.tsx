import { FlaskConical, FileText, Layers, MapPin, Shield, HeartHandshake } from 'lucide-react'

const trustItems = [
  {
    icon: FlaskConical,
    title: 'Independent Third-Party Testing',
    body: 'Every batch of UKCBDHQ products is tested by accredited third-party laboratories. We do not self-certify. Independent analysis confirms the composition, quality, and safety of what we manufacture.',
    highlight: false,
  },
  {
    icon: FileText,
    title: 'COAs Available at Launch',
    body: 'Certificates of Analysis for every product will be publicly accessible on our website from the moment we launch. Batch numbers will link directly to the corresponding laboratory documentation — no guesswork, no opacity.',
    highlight: false,
  },
  {
    icon: Layers,
    title: 'Clear Ingredient Transparency',
    body: 'Full INCI ingredient lists, clear labelling, and plain-English product descriptions. We will not obscure formulations behind proprietary blends or vague terminology. You will know exactly what is in every product.',
    highlight: false,
  },
  {
    icon: MapPin,
    title: 'Spanish Manufacturing — Verified',
    body: 'Our products are manufactured in Spain at facilities operating to EU cosmetic manufacturing standards. Manufacturing origin is documented, auditable, and reflected in our supply chain traceability records.',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'UK-Focused Compliance Pathway',
    body: 'We are preparing for the UK market through established cosmetic regulatory processes — UK Responsible Person arrangements, applicable product notifications, and external-use specific labelling. Our products will not go on sale until this process is complete.',
    highlight: false,
  },
  {
    icon: HeartHandshake,
    title: 'Customer-First Support',
    body: 'Our team is building the support infrastructure to back up our products — clear documentation, responsive communication, and an honest approach to any questions about our formulations or compliance status.',
    highlight: false,
  },
]

export default function TrustSection() {
  return (
    <section
      id="labs"
      className="py-28 lg:py-36 bg-[#f5f1ea]"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-body text-[#b8965a] text-sm font-semibold tracking-[0.18em] uppercase mb-5">
            Trust &amp; Transparency
          </p>
          <div className="section-divider mb-8" />
          <h2
            id="trust-heading"
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-light text-[#1a3329] leading-[1.1] tracking-tight mb-6"
          >
            You Should Know
            <br />
            <em className="font-medium">Exactly What You Are Buying.</em>
          </h2>
          <p className="font-body text-[#6b6b6b] text-lg leading-relaxed">
            Transparency is not a marketing value for us — it is an operational
            standard. Here is how we back that up.
          </p>
        </div>

        {/* Trust grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustItems.map(({ icon: Icon, title, body, highlight }) => (
            <div
              key={title}
              className={`p-7 rounded-2xl border transition-all duration-300 group ${
                highlight
                  ? 'bg-[#1a3329] border-[#1a3329] text-white'
                  : 'bg-white border-[#d6cfc4] hover:border-[#b8965a]/40 hover:shadow-[0_4px_24px_rgba(26,51,41,0.08)]'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                  highlight
                    ? 'bg-white/12 group-hover:bg-white/18'
                    : 'bg-[#1a3329]/07 group-hover:bg-[#1a3329]/12'
                }`}
              >
                <Icon
                  size={18}
                  className={highlight ? 'text-[#d4af7a]' : 'text-[#3d6b52]'}
                  aria-hidden="true"
                />
              </div>
              <h3
                className={`font-display text-lg font-semibold mb-3 leading-snug ${
                  highlight ? 'text-white' : 'text-[#1a3329]'
                }`}
              >
                {title}
              </h3>
              <p
                className={`font-body text-sm leading-relaxed ${
                  highlight ? 'text-white/65' : 'text-[#6b6b6b]'
                }`}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="p-8 lg:p-10 rounded-2xl bg-[#1a3329]/05 border border-[#1a3329]/12 flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-display text-2xl font-semibold text-[#1a3329] mb-2">
              Lab Reports — Published at Launch
            </h3>
            <p className="font-body text-[#6b6b6b] text-sm leading-relaxed max-w-xl">
              Our Certificates of Analysis will be accessible directly from each
              product page. Third-party tested. Batch-referenced. No exceptions.
              Join the waitlist to be the first to access the full documentation
              when we launch.
            </p>
          </div>
          <a
            href="#waitlist"
            className="shrink-0 inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1a3329] text-white text-sm font-semibold tracking-wide hover:bg-[#254a3b] transition-colors shadow-[0_4px_16px_rgba(26,51,41,0.2)]"
          >
            Get Lab Access at Launch
          </a>
        </div>
      </div>
    </section>
  )
}
