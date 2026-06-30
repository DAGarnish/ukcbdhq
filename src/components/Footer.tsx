import Link from 'next/link'

const footerLinks = {
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Cookie Policy', href: '#' },
  ],
  site: [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Spain', href: '#why-spain' },
    { label: 'Lab Reports', href: '#labs' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Waitlist', href: '#waitlist' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1c1c1c] text-white" aria-label="Site footer">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-5">
              <span className="font-display text-2xl font-semibold tracking-tight text-white">
                UKCBD
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight text-[#d4af7a]">
                HQ
              </span>
            </div>
            <p className="font-body text-white/55 text-sm leading-relaxed max-w-sm mb-6">
              A premium CBD topicals and patches brand, manufactured in Spain
              to EU standards, launching exclusively into the UK market. Built
              on strength, purity, and absolute transparency.
            </p>
            <p className="font-body text-white/40 text-xs leading-relaxed max-w-sm">
              External-use products only. Not medicines. This website does not
              constitute medical or legal advice. Products are not yet available
              for sale. UK compliance pathway in progress before launch.
            </p>
            <div className="mt-6">
              <a
                href="mailto:hello@ukcbdhq.com"
                className="font-body text-sm text-[#d4af7a] hover:text-white transition-colors"
              >
                hello@ukcbdhq.com
              </a>
            </div>
          </div>

          {/* Site links */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.site.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              Legal &amp; Compliance
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="#waitlist"
                id="footer-waitlist-cta"
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#d4af7a]/40 text-[#d4af7a] text-sm font-semibold hover:bg-[#d4af7a]/10 hover:border-[#d4af7a]/70 transition-all"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/08">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-body text-xs text-white/35">
            &copy; {year} UKCBDHQ. All rights reserved. Registered in Spain.
            Pre-launch — no products currently for sale.
          </p>
          <p className="font-body text-xs text-white/25">
            Formulated for UK market requirements · Third-party lab tested ·
            External use products only
          </p>
        </div>
      </div>
    </footer>
  )
}
