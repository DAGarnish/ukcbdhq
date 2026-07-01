'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Are you shipping to the United Kingdom?",
    answer: "Yes. UKCBDHQ is specifically designed to service the UK market. All customs clearances, import duties, and local logistics will be fully managed by us using a Delivered Duty Paid (DDP) shipping pathway, ensuring a seamless delivery directly to your door."
  },
  {
    question: "Why do you specialize in topicals and patches instead of CBD oils?",
    answer: "By focusing strictly on external-use cosmetics (patches, gels, and balms), we can specialize in targeted relief and superior skin absorption. Additionally, topical products follow a clear, trusted cosmetic safety pathway rather than the complex, changing regulations associated with ingestible novel foods."
  },
  {
    question: "Will third-party lab reports be available?",
    answer: "Absolutely. Transparency is our core value. Certificates of Analysis (COAs) from independent ISO-certified testing laboratories will be published online for every single manufacturing batch. You will be able to search your batch code to view the profile of your product."
  },
  {
    question: "Are all products manufactured in Spain?",
    answer: "Yes, all of our cosmetic formulations are developed and packaged in certified laboratory facilities in Spain. Spain has a world-class dermo-cosmetic ecosystem and offers ideal agricultural conditions for sourcing pure, high-grade botanical extracts."
  },
  {
    question: "When is the official UK product launch?",
    answer: "We are currently completing our final UK compliance registrations and stability testing. We expect to begin shipping our first batch of products to our VIP waitlist members in the coming months. Joining the waitlist ensures you get first access to our limited initial inventory."
  },
  {
    question: "Is joining the waitlist free, and what does it include?",
    answer: "Yes, joining the waitlist is completely free. By signing up, you will secure exclusive launch discounts, early notification before the public release, and priority allocation of our high-strength patches and topicals."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container faq-container">
        <div className="faq-header">
          <span className="section-label">Common Queries</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
            Everything you need to know about our sourcing, compliance, and upcoming UK launch.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${activeIndex === idx ? 'active' : ''}`}
            >
              <button 
                className="faq-question-btn" 
                onClick={() => toggleFaq(idx)}
                aria-expanded={activeIndex === idx}
              >
                <span>{faq.question}</span>
                <Plus size={18} className="faq-icon" />
              </button>
              
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p style={{ marginBottom: 0 }}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
