import { prospect, benefits } from '../data';

function WhySection() {
  return (
    <section id="why" className="py-24 bg-bg-section relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">{prospect.label}</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight mb-4">{prospect.title}</h2>
          <p className="text-text-secondary text-sm">{prospect.desc}</p>
        </div>

        <div className="max-w-xl mx-auto mb-14 border border-border-default bg-bg-surface rounded-2xl p-8 text-center">
          <div className="font-display font-extrabold text-5xl text-brand-accent mb-2">{prospect.stat}</div>
          <p className="text-text-secondary text-sm">{prospect.statLabel}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="border border-border-default bg-bg-surface rounded-2xl p-7 hover:border-border-hover hover:-translate-y-1 hover:shadow-glow-hover transition-all duration-300">
              <div className="w-11 h-11 bg-brand-violet/20 rounded-lg flex items-center justify-center text-xl mb-5">{b.icon}</div>
              <h3 className="font-display font-bold text-lg text-text-primary mb-2">{b.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;
