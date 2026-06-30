'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#why-spain', label: 'Why Spain' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#labs', label: 'Labs' },
  { href: '#waitlist', label: 'Waitlist' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(26,51,41,0.08)] border-b border-[#d6cfc4]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2 group"
            aria-label="UKCBDHQ home"
          >
            <span className="flex items-center gap-1.5">
              <span
                className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-[#1a3329]' : 'text-white drop-shadow-md'
                }`}
              >
                UKCBD
              </span>
              <span
                className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-[#b8965a]' : 'text-[#d4af7a] drop-shadow-md'
                }`}
              >
                HQ
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-[#b8965a] ${
                  isScrolled ? 'text-[#2e2e2e]' : 'text-white drop-shadow-md'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="#waitlist"
              id="header-waitlist-cta"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold tracking-wide rounded-full transition-all duration-200 bg-[#1a3329] text-white hover:bg-[#254a3b] hover:shadow-md active:scale-95"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-[#1a3329]' : 'text-white'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#d6cfc4] animate-slide-down">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={handleNavClick}
                className="text-base font-medium text-[#2e2e2e] hover:text-[#1a3329] transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="#waitlist"
              onClick={handleNavClick}
              id="mobile-waitlist-cta"
              className="mt-2 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide rounded-full bg-[#1a3329] text-white hover:bg-[#254a3b] transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
