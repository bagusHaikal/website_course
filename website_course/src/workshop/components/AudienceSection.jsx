import { audiences } from '../data';

function AudienceSection() {
  return (
    <section id="audience" className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Target Peserta</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">Kelas ini Cocok Buat Kamu yang</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <div key={i} className="border border-border-default bg-bg-surface rounded-2xl p-6 hover:border-border-hover hover:-translate-y-1 hover:shadow-glow-hover transition-all duration-300">
              <div className="w-11 h-11 bg-brand-violet/20 rounded-full flex items-center justify-center text-xl mb-4">{a.icon}</div>
              <h4 className="font-display font-bold text-text-primary text-base mb-2">{a.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;
