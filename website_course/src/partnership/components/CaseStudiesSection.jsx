import { caseStudies } from '../data';

function CaseStudiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">Studi Kasus</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-5">Terbukti Bersama Partner Terkemuka</h2>
          <p className="text-text-secondary text-base md:text-lg">Lihat bagaimana Infinite Learning membantu partner kami menghadirkan dampak nyata.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="flex flex-col border border-border-default bg-bg-surface rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-glow-hover">
              <div className="bg-button-gradient p-8 relative overflow-hidden min-h-[140px] flex items-end">
                <span className="font-display font-extrabold text-4xl tracking-tight text-white/95 select-none">{cs.monogram}</span>
                <span className="absolute -right-2 -bottom-3 text-7xl font-display font-extrabold text-white/15 select-none pointer-events-none">{cs.monogram}</span>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-lg text-text-primary leading-tight">{cs.partner}</h3>
                  <span className="px-2.5 py-1 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0">{cs.role}</span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{cs.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
