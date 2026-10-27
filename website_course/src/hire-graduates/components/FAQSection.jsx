import { useState } from 'react';
import { faqs } from '../data';
import { ChevronDown } from 'lucide-react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <section className="py-20 lg:py-28 bg-bg-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight">Pertanyaan yang Sering Diajukan</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={i} className={`border border-border-default bg-bg-surface rounded-xl overflow-hidden transition-all duration-200 ${open ? 'border-border-hover' : ''}`}>
                <button onClick={() => toggle(i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-bg-subtle transition-colors focus:outline-none" aria-expanded={open}>
                  <span className="font-display font-bold text-text-primary text-sm md:text-base pr-4">{faq.q}</span>
                  <span className={`shrink-0 text-brand-accent transition-transform duration-200 ${open ? 'rotate-180' : ''}`}><ChevronDown className="w-5 h-5 shrink-0" /></span>
                </button>
                {open && (
                  <div className="px-6 pb-5 animate-fade-slide-up">
                    <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
