'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    id: 'faq-shipping',
    question: 'Are you currently shipping to the UK?',
    answer:
      'Not yet. UKCBDHQ is a pre-launch brand — no products are currently available for sale or delivery. We are in the final stages of product development and compliance preparation. When we launch, we will be shipping directly to UK customers. Join the waitlist to be notified the moment we go live.',
  },
  {
    id: 'faq-topicals',
    question: 'Why are you starting with topicals and patches only?',
    answer:
      'We have made a deliberate decision to specialise in external-use CBD formats at launch. Topicals and patches are a well-defined cosmetic category, which gives us a clear product identity and a straightforward compliance pathway. Launching as a specialist — not a generalist — also means we can focus every resource on getting this category right before expanding. You can read more in our Why Topicals section.',
  },
  {
    id: 'faq-lab-reports',
    question: 'Will lab reports be available when you launch?',
    answer:
      'Yes — all products will have associated Certificates of Analysis (COAs) from accredited third-party laboratories, published on our website from launch day. These will be batch-referenced so you can verify the exact testing documentation for any product you purchase. No exceptions.',
  },
  {
    id: 'faq-spain',
    question: 'Are your products made in Spain?',
    answer:
      'Yes. All UKCBDHQ products are manufactured in Spain at facilities operating to EU cosmetic production standards. We chose Spain deliberately for the quality of its cosmetic manufacturing ecosystem and the rigour of European regulatory compliance. Manufacturing origin will be clearly stated on all product labels.',
  },
  {
    id: 'faq-launch',
    question: 'When do you launch?',
    answer:
      'We are targeting a UK launch date that we will confirm to waitlist members first. We are not rushing to market — we will not launch until all products are fully tested, all compliance steps are complete, and we are confident in everything we are putting forward. The exact date will be communicated to our waitlist before any public announcement.',
  },
  {
    id: 'faq-waitlist',
    question: 'Can I join the waitlist now?',
    answer:
      'Absolutely — that is exactly what we are here for. Scroll down to the waitlist section or click any "Join Waitlist" button on this page. Waitlist members will receive first access to products at launch, early-access pricing, and exclusive updates about our progress. There is no obligation and no purchase required.',
  },
  {
    id: 'faq-compliance-status',
    question: 'What is the compliance status of your products?',
    answer:
      'We are a pre-launch brand actively preparing for UK market entry. This includes arranging a UK Responsible Person, completing applicable cosmetic product notifications, and ensuring all labelling meets UK cosmetic regulation requirements. No products will be sold until these steps are complete. Please note that the information on this website is not legal advice.',
  },
]

function FaqItem({ item }: { item: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#d6cfc4] last:border-b-0">
      <button
        id={item.id}
        aria-expanded={open}
        aria-controls={`${item.id}-answer`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="font-display text-lg font-medium text-[#1a3329] group-hover:text-[#254a3b] transition-colors leading-snug">
          {item.question}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-[#d6cfc4] flex items-center justify-center group-hover:border-[#b8965a] group-hover:bg-[#b8965a]/08 transition-all">
          {open ? (
            <ChevronUp size={15} className="text-[#b8965a]" />
          ) : (
            <ChevronDown size={15} className="text-[#6b6b6b] group-hover:text-[#b8965a]" />
          )}
        </span>
      </button>
      {open && (
        <div
          id={`${item.id}-answer`}
          role="region"
          aria-labelledby={item.id}
          className="pb-6"
        >
          <p className="font-body text-[#6b6b6b] text-sm leading-relaxed max-w-2xl">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="py-28 lg:py-36 bg-[#faf7f2]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left label */}
          <div className="lg:col-span-2">
            <p className="font-body text-[#b8965a] text-sm font-semibold tracking-[0.18em] uppercase mb-5">
              Frequently Asked
            </p>
            <div className="section-divider mb-8" />
            <h2
              id="faq-heading"
              className="font-display text-4xl sm:text-5xl font-light text-[#1a3329] leading-[1.1] tracking-tight"
            >
              Your Questions,
              <br />
              <em className="font-medium">Answered Honestly.</em>
            </h2>
            <p className="font-body text-[#6b6b6b] text-base leading-relaxed mt-6">
              If you have a question that is not covered here, you are welcome
              to contact us directly — details in the footer.
            </p>
          </div>

          {/* Right: FAQ accordion */}
          <div className="lg:col-span-3">
            {faqs.map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
