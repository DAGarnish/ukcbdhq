'use client'

import { useState, useRef } from 'react'
import { CheckCircle, Loader2 } from 'lucide-react'

const productOptions = [
  'Not sure yet — show me everything',
  'CBD Daily Patch',
  'CBD Recovery Patch',
  'CBD Cooling Gel',
  'CBD Warming Balm',
  'CBD Skin Restore Cream',
  'All topicals / general interest',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function WaitlistSection() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {}
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const consent = data.get('consent')

    if (!name || name.length < 2) errs.name = 'Please enter your name.'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = 'Please enter a valid email address.'
    if (!consent) errs.consent = 'Please confirm your consent to continue.'

    return errs
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setFormState('submitting')

    // Simulate async submission (replace with real endpoint)
    await new Promise((r) => setTimeout(r, 1400))
    setFormState('success')
  }

  return (
    <section
      id="waitlist"
      className="py-28 lg:py-36 bg-[#f5f1ea] relative overflow-hidden"
      aria-labelledby="waitlist-heading"
    >
      {/* Background gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, #1a3329, #3d6b52, #b8965a, #3d6b52, #1a3329)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: messaging */}
          <div>
            <p className="font-body text-[#b8965a] text-sm font-semibold tracking-[0.18em] uppercase mb-5">
              VIP Waitlist
            </p>
            <div className="section-divider mb-8" />
            <h2
              id="waitlist-heading"
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-light text-[#1a3329] leading-[1.1] tracking-tight mb-6"
            >
              Be First.
              <br />
              <em className="font-medium">Unlock Launch Access.</em>
            </h2>
            <p className="font-body text-[#6b6b6b] text-base leading-relaxed mb-8">
              UKCBDHQ is building something that the UK CBD market has been
              missing: a truly premium, specialist external-use brand with the
              transparency and compliance credentials to match. Our waitlist is
              how we will announce the launch — and how we will reward the people
              who believed in us early.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                'First access to products when we launch',
                'Exclusive early-access pricing for waitlist members',
                'Lab reports and product updates before the public',
                'A direct line to our team',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="shrink-0 mt-0.5 text-[#3d6b52]"
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm text-[#2e2e2e] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div>
            {formState === 'success' ? (
              <div
                role="alert"
                className="flex flex-col items-center text-center p-10 rounded-2xl bg-[#1a3329] text-white"
              >
                <div className="w-16 h-16 rounded-full bg-[#3d6b52] flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <h3 className="font-display text-3xl font-medium mb-3">
                  You Are on the List.
                </h3>
                <p className="font-body text-white/70 text-base leading-relaxed max-w-sm">
                  Thank you for joining the UKCBDHQ VIP waitlist. We will be in
                  touch before we launch — with first access, lab reports, and
                  everything you need to know. Watch your inbox.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="p-8 lg:p-10 rounded-2xl bg-white border border-[#d6cfc4] shadow-[0_4px_32px_rgba(26,51,41,0.06)]"
                aria-label="Waitlist signup form"
              >
                <h3 className="font-display text-2xl font-semibold text-[#1a3329] mb-6">
                  Join the Waitlist
                </h3>

                {/* Name */}
                <div className="mb-5">
                  <label
                    htmlFor="waitlist-name"
                    className="block font-body text-sm font-medium text-[#2e2e2e] mb-1.5"
                  >
                    Full Name <span className="text-[#b8965a]">*</span>
                  </label>
                  <input
                    id="waitlist-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-body text-[#1c1c1c] placeholder:text-[#b0a898] bg-[#faf7f2] focus:outline-none focus:border-[#1a3329] focus:ring-2 focus:ring-[#1a3329]/12 transition-all ${
                      errors.name ? 'border-red-400' : 'border-[#d6cfc4]'
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label
                    htmlFor="waitlist-email"
                    className="block font-body text-sm font-medium text-[#2e2e2e] mb-1.5"
                  >
                    Email Address <span className="text-[#b8965a]">*</span>
                  </label>
                  <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.co.uk"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-body text-[#1c1c1c] placeholder:text-[#b0a898] bg-[#faf7f2] focus:outline-none focus:border-[#1a3329] focus:ring-2 focus:ring-[#1a3329]/12 transition-all ${
                      errors.email ? 'border-red-400' : 'border-[#d6cfc4]'
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Product interest */}
                <div className="mb-6">
                  <label
                    htmlFor="waitlist-interest"
                    className="block font-body text-sm font-medium text-[#2e2e2e] mb-1.5"
                  >
                    Product Interest{' '}
                    <span className="text-[#6b6b6b] font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="waitlist-interest"
                      name="interest"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl border border-[#d6cfc4] text-sm font-body text-[#1c1c1c] bg-[#faf7f2] appearance-none focus:outline-none focus:border-[#1a3329] focus:ring-2 focus:ring-[#1a3329]/12 transition-all pr-10"
                    >
                      <option value="" disabled>
                        Select a product category…
                      </option>
                      {productOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1l5 5 5-5"
                          stroke="#6b6b6b"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="mb-7">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      id="waitlist-consent"
                      name="consent"
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 rounded border-[#d6cfc4] text-[#1a3329] focus:ring-[#1a3329]/20 accent-[#1a3329]"
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                    />
                    <span className="font-body text-xs text-[#6b6b6b] leading-relaxed">
                      I agree to receive email communications from UKCBDHQ about
                      the brand launch, product updates, and early-access offers.
                      I understand I can unsubscribe at any time. We will never
                      share your data with third parties.{' '}
                      <a
                        href="#"
                        className="underline hover:text-[#1a3329] transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  id="waitlist-submit"
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1a3329] text-white font-body text-sm font-semibold tracking-wide hover:bg-[#254a3b] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_4px_20px_rgba(26,51,41,0.22)] hover:shadow-[0_6px_28px_rgba(26,51,41,0.3)] active:scale-[0.98]"
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Securing your place…
                    </>
                  ) : (
                    'Unlock Launch Access'
                  )}
                </button>

                <p className="font-body text-xs text-[#b0a898] text-center mt-4 leading-relaxed">
                  No purchase required. No spam. Unsubscribe any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
