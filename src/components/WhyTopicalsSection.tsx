import { Target, Eye, Award, ArrowRight } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: 'Targeted Application',
    body: 'Topicals and transdermal patches are applied directly to specific areas of the skin. This makes it straightforward for consumers to understand exactly how the product is used and what it is intended for — targeted external application, without ambiguity.',
  },
  {
    icon: Eye,
    title: 'Product Clarity',
    body: 'External-use formats are simpler for consumers to evaluate and for brands to communicate clearly. There is no dosage uncertainty, no question of ingestion, and no complexity around systemic absorption. The product does what it says on the label.',
  },
  {
    icon: Award,
    title: 'Specialist Brand Focus',
    body: 'By concentrating entirely on topicals and patches at launch, UKCBDHQ is able to build genuine expertise in a single product category. We are not a generalist CBD brand trying to do everything. We are specialists in external-use CBD — and that focus will be evident in every formula we produce.',
  },
  {
    icon: ArrowRight,
    title: 'A Cleaner Launch Pathway',
    body: 'Cosmetic-category CBD topicals operate on a different regulatory pathway from ingestible products in the UK. By launching exclusively with external-use products, we are able to follow established cosmetic notification and responsible person processes — a well-defined route that supports a compliant, credible market entry.',
  },
]

export default function WhyTopicalsSection() {
  return (
    <section
      id="why-topicals"
      className="py-28 lg:py-36 bg-[#faf7f2]"
      aria-labelledby="why-topicals-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading + intro */}
          <div className="lg:sticky lg:top-28">
            <p className="font-body text-[#b8965a] text-sm font-semibold tracking-[0.18em] uppercase mb-5">
              Category Focus
            </p>
            <div className="section-divider mb-8" />
            <h2
              id="why-topicals-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-light text-[#1a3329] leading-[1.1] tracking-tight mb-8"
            >
              Why Topicals
              <br />
              <em className="font-medium">— Not Oils.</em>
            </h2>
            <p className="font-body text-[#6b6b6b] text-base leading-relaxed mb-6">
              You might wonder why UKCBDHQ is launching without CBD oils. The
              answer is intentional, not incidental. We have made a deliberate
              decision to specialise in external-use CBD formats at launch — and
              here is why that choice reflects sound commercial and product
              thinking.
            </p>
            <p className="font-body text-[#6b6b6b] text-base leading-relaxed">
              This is not about avoiding complexity — it is about doing one
              thing exceptionally well before doing two things adequately.
            </p>

            {/* Highlighted callout */}
            <div className="mt-10 p-6 rounded-2xl bg-[#1a3329] text-white">
              <p className="font-display text-xl font-medium leading-snug mb-2">
                &ldquo;We are specialists in external-use CBD — and that focus will be
                evident in every formula we produce.&rdquo;
              </p>
              <p className="font-body text-white/60 text-sm mt-3">
                UKCBDHQ Brand Positioning Statement
              </p>
            </div>
          </div>

          {/* Right: reasons */}
          <div className="flex flex-col gap-8">
            {reasons.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="flex gap-5 group"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-[#1a3329]/08 flex items-center justify-center group-hover:bg-[#1a3329]/14 transition-colors">
                    <Icon
                      size={18}
                      className="text-[#3d6b52]"
                      aria-hidden="true"
                    />
                  </div>
                  {i < reasons.length - 1 && (
                    <div className="flex-1 w-px bg-[#d6cfc4] mt-4 min-h-8" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-xl font-semibold text-[#1a3329] mb-2 leading-snug">
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
