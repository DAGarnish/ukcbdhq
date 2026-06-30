import { Leaf, Award, Users } from 'lucide-react'

const pillars = [
  {
    icon: Award,
    title: 'Strength Without Compromise',
    body: 'We refuse to dilute. Our formulations are developed to deliver the levels of CBD that discerning UK consumers are increasingly seeking — concentrated, consistent, and credible.',
  },
  {
    icon: Leaf,
    title: 'Purity as Standard',
    body: 'Every product is built from the ground up with ingredient transparency as a non-negotiable. Clean formulas, clearly labelled, batch-traceable from manufacture to customer.',
  },
  {
    icon: Users,
    title: 'A Brand Built on Trust',
    body: 'We are entering the UK market carefully, compliantly, and with a commitment to doing things properly — not quickly. Because in this category, trust is the only currency that matters.',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 lg:py-36 bg-[#faf7f2]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: brand story */}
          <div>
            <p className="font-body text-[#b8965a] text-sm font-semibold tracking-[0.18em] uppercase mb-5">
              Our Story
            </p>
            <div className="section-divider mb-8" />

            <h2
              id="about-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-light text-[#1a3329] leading-[1.12] tracking-tight mb-8"
            >
              Strength, Purity, and
              <br />
              <em className="font-medium">Trust — Never Compromised.</em>
            </h2>

            <p className="font-body text-[#2e2e2e] text-base leading-relaxed mb-6">
              At UKCBDHQ, we believe that strength, purity, and trust should
              never be compromised. We are building a premium range of
              high-strength CBD topicals and patches, crafted in Spain under
              rigorous European manufacturing conditions, specifically for UK
              customers who want more than the usual low-dose offerings that
              currently dominate the market.
            </p>
            <p className="font-body text-[#6b6b6b] text-base leading-relaxed mb-6">
              The UK CBD topicals space has grown rapidly — but it remains
              cluttered with underdosed, unverified products. UKCBDHQ was
              founded to change that. We are specialists, not generalists. Our
              entire focus is on external-use CBD formats: patches, gels, balms,
              and creams that are formulated with purpose and positioned with
              precision.
            </p>
            <p className="font-body text-[#6b6b6b] text-base leading-relaxed">
              We are not launching until we are ready — and ready means every
              formula tested, every batch traceable, every claim defensible.
              That is the standard we hold ourselves to.
            </p>
          </div>

          {/* Right: three pillar cards */}
          <div className="flex flex-col gap-6">
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-[#d6cfc4] hover:border-[#b8965a]/40 hover:shadow-[0_4px_24px_rgba(26,51,41,0.08)] transition-all duration-300 group"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#1a3329]/08 flex items-center justify-center group-hover:bg-[#1a3329]/12 transition-colors">
                  <Icon
                    size={20}
                    className="text-[#3d6b52]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#1a3329] mb-1.5 leading-snug">
                    {title}
                  </h3>
                  <p className="font-body text-[#6b6b6b] text-sm leading-relaxed">
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
