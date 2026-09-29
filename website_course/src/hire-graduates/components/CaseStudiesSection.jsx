import { caseStudies } from '../data';

function CaseCard({ cs }) {
  return (
    <article className="group border border-border-default bg-bg-surface rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow-hover">
      <div className="flex flex-col sm:flex-row min-h-[240px]">
        {/* Left gradient panel */}
        <div className="relative shrink-0 sm:w-48 md:w-56 w-full h-40 sm:h-auto bg-button-gradient flex items-center justify-center p-6 overflow-hidden">
          <span className="font-display font-extrabold text-3xl tracking-tight text-white/90 select-none">{cs.monogram}</span>
          <span className="absolute -bottom-2 -right-2 text-6xl font-display font-extrabold text-white/10 select-none pointer-events-none">{cs.monogram}</span>
        </div>
        {/* Right content */}
        <div className="flex-1 p-6 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display font-bold text-lg text-text-primary leading-tight">{cs.partner}</h3>
            <span className="px-2.5 py-1 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0">{cs.role}</span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">{cs.description}</p>
          <button className="self-start mt-auto text-sm font-semibold text-text-muted hover:text-brand-accent transition-colors inline-flex items-center gap-1.5 group-btn">
            Read More
            <svg className="w-4 h-4 transition-transform group-hover-btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </article>
  );
}

function CaseStudiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">Kasus Nyata</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-5">Bagaimana Kami Berkolaborasi dengan Partner</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {caseStudies.map((cs) => <CaseCard key={cs.id} cs={cs} />)}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
