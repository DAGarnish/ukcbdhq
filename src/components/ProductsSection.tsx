import Link from 'next/link'
import { Clock } from 'lucide-react'

interface ProductCardProps {
  name: string
  tagline: string
  description: string
  potency: string
  format: string
  colorFrom: string
  colorTo: string
  accentColor: string
}

const products: ProductCardProps[] = [
  {
    name: 'Daily Patch',
    tagline: 'Sustained All-Day Comfort',
    description:
      'A low-profile transdermal patch designed for consistent, targeted external application throughout the day. Discreet, mess-free, and easy to incorporate into any routine.',
    potency: 'Standard Strength',
    format: 'Transdermal Patch',
    colorFrom: '#254a3b',
    colorTo: '#1a3329',
    accentColor: '#7a9e8a',
  },
  {
    name: 'Recovery Patch',
    tagline: 'Targeted Post-Activity Care',
    description:
      'A higher-strength patch developed for targeted external use after physical activity. Designed to stay in place and deliver concentrated topical comfort precisely where you need it.',
    potency: 'High Strength',
    format: 'Transdermal Patch',
    colorFrom: '#1e3d50',
    colorTo: '#162d3a',
    accentColor: '#6b9aae',
  },
  {
    name: 'Cooling Gel',
    tagline: 'Refreshing Topical Formula',
    description:
      'A lightweight, fast-absorbing gel with a cooling sensation on application. Formulated with menthol and botanical extracts alongside CBD for a refreshing external-use experience.',
    potency: 'High Strength',
    format: 'Topical Gel',
    colorFrom: '#1a3d45',
    colorTo: '#122d35',
    accentColor: '#5fb0c0',
  },
  {
    name: 'Warming Balm',
    tagline: 'Deep Comforting Warmth',
    description:
      'A rich, slow-absorbing balm that delivers a warming sensation to the skin. Blended with plant-derived oils and waxes for a nourishing, comfortable external-use formula.',
    potency: 'High Strength',
    format: 'Topical Balm',
    colorFrom: '#3d2a1a',
    colorTo: '#2a1e13',
    accentColor: '#c4875a',
  },
  {
    name: 'Skin Restore Cream',
    tagline: 'Nourishing Skin Recovery',
    description:
      'A luxurious daily cream enriched with CBD, hyaluronic acid, and botanical extracts. Formulated to nourish, soothe, and restore the skin\'s natural balance with everyday use.',
    potency: 'Standard Strength',
    format: 'Face & Body Cream',
    colorFrom: '#3d3a2a',
    colorTo: '#2a2820',
    accentColor: '#c4b55a',
  },
]

function ProductCard({ product }: { product: ProductCardProps }) {
  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden border border-[#d6cfc4] bg-white hover:shadow-[0_8px_32px_rgba(26,51,41,0.12)] hover:-translate-y-1 transition-all duration-300">
      {/* Product placeholder visual */}
      <div
        className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(140deg, ${product.colorFrom} 0%, ${product.colorTo} 100%)`,
        }}
        aria-hidden="true"
      >
        {/* Decorative packaging shape */}
        <div className="relative flex flex-col items-center gap-3">
          <div
            className="w-20 h-28 rounded-lg border-2 flex items-center justify-center"
            style={{
              borderColor: `${product.accentColor}40`,
              background: `${product.accentColor}18`,
            }}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-8 h-1.5 rounded-full"
                style={{ background: product.accentColor }}
              />
              <div
                className="w-6 h-1 rounded-full opacity-60"
                style={{ background: product.accentColor }}
              />
              <div
                className="w-5 h-1 rounded-full opacity-40"
                style={{ background: product.accentColor }}
              />
            </div>
          </div>
          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70"
            style={{ color: product.accentColor }}
          >
            UKCBDHQ
          </span>
        </div>

        {/* Coming soon badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#b8965a]/90 text-white text-[11px] font-semibold tracking-wide">
          <Clock size={10} aria-hidden="true" />
          Launching Soon
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-[#1a3329] leading-tight">
              {product.name}
            </h3>
            <p className="font-body text-[#b8965a] text-sm font-medium mt-0.5">
              {product.tagline}
            </p>
          </div>
          <span className="shrink-0 mt-0.5 px-2.5 py-1 text-[11px] font-semibold tracking-wide rounded-full bg-[#1a3329]/08 text-[#254a3b]">
            {product.format}
          </span>
        </div>

        <p className="font-body text-[#6b6b6b] text-sm leading-relaxed mb-5 flex-1">
          {product.description}
        </p>

        <div className="pt-4 border-t border-[#e8e2d8] flex items-center justify-between">
          <span className="font-body text-xs text-[#6b6b6b] tracking-wide">
            {product.potency} · External Use Only
          </span>
          <Link
            href="#waitlist"
            className="font-body text-xs font-semibold text-[#1a3329] hover:text-[#b8965a] transition-colors tracking-wide"
          >
            Get Early Access →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-28 lg:py-36 bg-[#f5f1ea]"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-body text-[#b8965a] text-sm font-semibold tracking-[0.18em] uppercase mb-5">
            Launch Range
          </p>
          <div className="section-divider mb-8" />
          <h2
            id="products-heading"
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-light text-[#1a3329] leading-[1.1] tracking-tight mb-6"
          >
            External-Use CBD,
            <br />
            <em className="font-medium">Engineered to Perform.</em>
          </h2>
          <p className="font-body text-[#6b6b6b] text-lg leading-relaxed">
            Our launch collection focuses exclusively on topical and transdermal
            formats — each formulated for targeted external application, with no
            ambiguity about how they are intended to be used.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="flex items-center gap-4 p-5 rounded-xl bg-[#1a3329]/05 border border-[#1a3329]/10">
          <Clock size={18} className="shrink-0 text-[#3d6b52]" aria-hidden="true" />
          <p className="font-body text-sm text-[#6b6b6b]">
            All products are currently in development. Full product details,
            specifications, and Certificates of Analysis will be published at
            launch.{' '}
            <Link
              href="#waitlist"
              className="font-semibold text-[#1a3329] hover:text-[#b8965a] transition-colors underline underline-offset-2"
            >
              Join the waitlist
            </Link>{' '}
            to be notified first.
          </p>
        </div>
      </div>
    </section>
  )
}
