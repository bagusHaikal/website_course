import { useState } from 'react';
import { collaborationForms } from '../data';
import { PartnerIcon } from './icons';

function CollaborationFormsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = collaborationForms[activeIndex];

  return (
    <section id="bentuk-kolaborasi" className="py-20 lg:py-28 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">Program Kolaborasi</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-5">Bagaimana Bentuk Kolaborasinya?</h2>
          <p className="text-text-secondary text-base md:text-lg">Pilih kategori untuk melihat rincian program kemitraan yang tersedia.</p>
        </div>
        <div role="tablist" className="flex flex-wrap justify-center gap-3 mb-12">
          {collaborationForms.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={i === activeIndex}
              aria-controls={`panel-${cat.id}`}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 outline-none ${
                i === activeIndex
                  ? 'btn-premium bg-button-gradient text-white shadow-glow'
                  : 'border border-border-default text-text-secondary hover:border-border-hover hover:text-text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div key={active.id} id={`panel-${active.id}`} className="animate-fade-slide-up">
          <div className={`grid gap-5 ${active.programs.length === 1 ? 'grid-cols-1 sm:max-w-2xl sm:mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {active.programs.map((p) => (
              <div key={p.id} className="group flex gap-4 sm:gap-5 border border-border-default bg-bg-surface rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-glow-hover">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-violet/15 border border-brand-violet/20 text-brand-accent flex items-center justify-center">
                  <PartnerIcon name={p.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-text-primary mb-1.5">{p.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollaborationFormsSection;
