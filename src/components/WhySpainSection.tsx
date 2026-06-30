import { Sun, Package, Globe, Zap, CheckCircle } from 'lucide-react'

const advantages = [
  {
    icon: Globe,
    title: 'European Manufacturing Standards',
    body: 'Spain operates within the EU regulatory framework for cosmetic manufacturing — some of the most rigorous in the world. Our Spanish production partners adhere to EU Good Manufacturing Practice standards, delivering a consistency and quality benchmark that outpaces many non-EU alternatives.',
  },
  {
    icon: Sun,
    title: 'A Mature Cosmetic Formulation Ecosystem',
    body: 'Spain has a deep-rooted cosmetic and skincare manufacturing heritage. The infrastructure — from raw material sourcing to specialist formulators and certified labs — is world-class. This enables UKCBDHQ to partner with established experts rather than pioneering from scratch.',
  },
  {
    icon: Package,
    title: 'Premium Brand Perception',
    body: 'European provenance matters to UK consumers, particularly in the premium wellness and skincare segments. "Made in Spain" carries connotations of quality, Mediterranean natural ingredients, and European sophistication — a meaningful differentiator in an increasingly crowded CBD market.',
  },
  {
    icon: Zap,
    title: 'Efficient Export & UK Logistics',
    body: 'With established freight corridors between Spain and the UK, our logistics model is built for efficiency. Supply chain integrity, cold-chain capability where required, and reliable lead times mean we can maintain product quality from production to doorstep.',
  },
  {
    icon: CheckCircle,
    title: 'DDP-Ready Operational Model',
    body: 'We operate a Delivered Duty Paid (DDP) model, meaning all applicable import costs and documentation are managed on our side. UK customers and retail partners experience seamless, transparent supply with no hidden cross-border complexity.',
  },
]

export default function WhySpainSection() {
  return (
    <section
      id="why-spain"
      className="py-28 lg:py-36 bg-[#1a3329] relative overflow-hidden"
      aria-labelledby="why-spain-heading"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-body text-[#d4af7a] text-sm font-semibold tracking-[0.18em] uppercase mb-5">
            Manufacturing Origin
          </p>
          <div
            className="w-12 h-0.5 rounded mb-8"
            style={{
              background:
                'linear-gradient(90deg, #b8965a, #d4af7a)',
            }}
          />
          <h2
            id="why-spain-heading"
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-light text-white leading-[1.1] tracking-tight mb-6"
          >
            Why We Manufacture
            <br />
            <em className="font-medium text-[#d4af7a]">in Spain.</em>
          </h2>
          <p className="font-body text-white/65 text-lg leading-relaxed">
            Our decision to manufacture in Spain is a deliberate strategic and
            quality choice — not a convenience. Here is why it matters for
            every product we produce and every customer we serve.
          </p>
        </div>

        {/* Advantage grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className={`p-7 rounded-2xl border border-white/10 bg-white/04 hover:bg-white/07 hover:border-white/18 transition-all duration-300 group ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#b8965a]/15 flex items-center justify-center mb-5 group-hover:bg-[#b8965a]/22 transition-colors">
                <Icon
                  size={18}
                  className="text-[#d4af7a]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-3 leading-snug">
                {title}
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
