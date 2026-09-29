import { processSteps } from '../data';

const checkSVG = <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>;

function Card({ step, title, desc }) {
  return (
    <div className="group rounded-2xl border border-border-default bg-bg-base p-6 transition-all duration-300 hover:border-border-hover hover:shadow-glow-hover hover:-translate-y-0.5">
      <span className="inline-block px-2.5 py-1 rounded-full bg-brand-violet/15 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-4">Step {step}</span>
      <h3 className="font-display font-extrabold text-lg text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

function ProcessTimelineSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-section relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">Roadmap</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-5">Jalan Rekrutmen Bersama Kami</h2>
          <p className="text-text-secondary text-base md:text-lg">Dari konsultasi awal hingga kandidat resmi bergabung — ikuti prosesnya bersama tim HR Infinite Learning.</p>
        </div>

        {/* Desktop zig-zag timeline */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-brand-violet/50 via-brand-purple/30 to-transparent pointer-events-none"></div>

          <ol className="space-y-0">
            {processSteps.map((s, i) => {
              const left = i % 2 === 0;
              const cellCls = left
                ? 'md:col-start-1 md:row-start-1 md:justify-self-end md:pr-1'
                : 'md:col-start-2 md:row-start-1 md:justify-self-start md:pl-1';
              return (
                <li key={s.step} className="relative grid grid-cols-1 md:grid-cols-2 md:gap-x-12 pb-16 last:pb-0">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-button-gradient shadow-glow ring-4 ring-bg-section flex items-center justify-center">
                    <span className="font-display font-extrabold text-white text-sm">{s.step}</span>
                  </div>
                  <div className={cellCls}>
                    <Card step={s.step} title={s.title} desc={s.description} />
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex justify-center mt-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-brand-accent/50 bg-bg-base flex items-center justify-center shadow-glow">
                {checkSVG}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">Rekrutmen Selesai</span>
            </div>
          </div>
        </div>

        {/* Mobile left-rail timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-violet/50 via-brand-purple/30 to-transparent pointer-events-none"></div>
          <ol className="space-y-8">
            {processSteps.map((s) => (
              <li key={s.step} className="relative pl-16">
                <div className="absolute left-5 -translate-x-1/2 top-0 z-10 w-10 h-10 rounded-full bg-button-gradient shadow-glow ring-4 ring-bg-section flex items-center justify-center">
                  <span className="font-display font-extrabold text-white text-xs">{s.step}</span>
                </div>
                <Card step={s.step} title={s.title} desc={s.description} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ProcessTimelineSection;
