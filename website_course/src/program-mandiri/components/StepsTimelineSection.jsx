import { steps, tiers } from '../data';

const calendarSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>;

function StepsTimelineSection() {
  return (
    <section className="py-24 bg-bg-section relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14">

          {/* Steps */}
          <div>
            <h2 className="font-display font-extrabold text-2xl text-text-primary mb-8 tracking-tight">Langkah Pendaftaran</h2>
            <div className="space-y-7">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center text-brand-accent font-bold text-sm">
                    {s.num}
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-base">{s.title}</h4>
                    <p className="text-text-secondary text-sm mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="border border-border-default bg-bg-surface rounded-3xl p-7">
            <h2 className="font-display font-extrabold text-xl text-text-primary mb-7 border-b border-divider pb-4 tracking-tight">Periode Pendaftaran</h2>
            <div className="space-y-5">
              {tiers.filter(t => t.active || t.soldOut).map((tier, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${tier.active ? 'text-brand-accent' : 'text-text-muted'}`}>{tier.label}</span>
                    <p className="text-text-primary text-sm mt-0.5">{tier.date}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-text-muted line-through text-xs block">{tier.original}</span>
                    <span className={`font-bold text-lg ${tier.active ? 'text-text-primary' : 'text-text-muted'}`}>{tier.price}</span>
                  </div>
                </div>
              ))}
              <div className="mt-7 pt-5 border-t border-divider flex items-center gap-3 text-brand-light">
                {calendarSVG}
                <span className="font-bold text-sm">Timeline Program:</span>
                <span className="text-sm text-text-secondary">Februari – Juni 2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StepsTimelineSection;
