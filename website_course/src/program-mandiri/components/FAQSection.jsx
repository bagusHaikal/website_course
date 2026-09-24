import { faqs } from '../data';
import { useState } from 'react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section id="faq" className="py-24 bg-bg-base">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl text-text-primary tracking-tight">Frequently Asked Questions</h2>
          <p className="text-text-secondary mt-3 text-sm">Pertanyaan umum seputar Program Mandiri Batch 10.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-300 hover:border-border-hover"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-bg-subtle transition-colors focus-visible:outline-none"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-text-primary text-sm leading-snug">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-brand-accent shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className="px-6 pb-4 pt-3 border-t border-divider text-text-secondary text-sm leading-relaxed prose-sm"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
