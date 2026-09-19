import { faqs } from '../data/courses';
import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-white text-sm">{item.q}</span>
                <svg
                  className={`w-5 h-5 text-brand-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`px-6 border-t border-white/5 pt-4 bg-black/20 text-[#D1D5DB] text-sm leading-[1.6] overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
