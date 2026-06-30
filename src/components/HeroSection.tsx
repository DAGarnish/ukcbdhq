import Link from 'next/link'
import { FlaskConical, MapPin, Truck, ShieldCheck } from 'lucide-react'

const trustBullets = [
  { icon: MapPin, label: 'Manufactured in Spain' },
  { icon: FlaskConical, label: 'Third-party lab tested' },
  { icon: ShieldCheck, label: 'External-use formulas' },
  { icon: Truck, label: 'UK-focused launch' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-forest-gradient"
      aria-labelledby="hero-heading"
    >
      {/* Botanical texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Soft radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 65% 40%, rgba(61,107,82,0.35) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative arc — desktop only */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none"
        style={{
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.06) 100%)',
          borderLeft: '1px solid rgba(255,255,255,0.06)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          {/* Pre-title label */}
          <p className="animate-fade-up font-body text-[#d4af7a] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Pre-Launch — Join the VIP Waitlist
          </p>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="animate-fade-up delay-100 font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.08] tracking-tight mb-6"
          >
            High-Strength CBD
            <br />
            <em className="font-medium not-italic text-[#d4af7a]">
              Topicals &amp; Patches
            </em>
            <br />
            for the UK.
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up delay-200 font-body text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Premium external-use CBD formulations, crafted in Spain to rigorous
            EU standards. Designed for UK customers who expect more — more
            potency, more precision, more transparency.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="#waitlist"
              id="hero-primary-cta"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold tracking-wide rounded-full bg-[#b8965a] text-white hover:bg-[#d4af7a] hover:text-[#1a3329] transition-all duration-200 shadow-[0_4px_20px_rgba(184,150,90,0.35)] hover:shadow-[0_6px_28px_rgba(184,150,90,0.5)] active:scale-95"
            >
              Join the VIP Waitlist
            </Link>
            <Link
              href="#products"
              id="hero-secondary-cta"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold tracking-wide rounded-full border border-white/30 text-white/90 hover:bg-white/10 hover:border-white/50 transition-all duration-200 active:scale-95"
            >
              Explore the Range
            </Link>
          </div>

          {/* Trust bullets */}
          <div className="animate-fade-up delay-400 flex flex-wrap gap-3">
            {trustBullets.map(({ icon: Icon, label }) => (
              <span key={label} className="trust-badge">
                <Icon size={14} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade to page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(250,247,242,0.15))',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
