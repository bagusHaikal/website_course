import { steps } from '../data';

function StepsSection() {
  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Panduan</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Langkah-Langkah Pendaftaran
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-button-gradient flex items-center justify-center text-white font-bold text-sm shadow-glow">
                {s.num}
              </div>
              <div>
                <h4 className="font-display font-bold text-text-primary text-base mb-1">{s.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
