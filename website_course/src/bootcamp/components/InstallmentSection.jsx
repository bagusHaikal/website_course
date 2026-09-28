import { installment, waLink } from '../data';

const checkSVG = <svg className="w-4 h-4 shrink-0 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

function InstallmentSection() {
  return (
    <section id="cicilan" className="py-24 bg-bg-section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Pembayaran</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight mb-3">
              {installment.title}
            </h2>
            <p className="text-brand-accent font-semibold text-base mb-4">{installment.subtitle}</p>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-lg">{installment.desc}</p>
            <ul className="space-y-3 mb-8 max-w-lg">
              {installment.points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                  {checkSVG}
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow inline-flex items-center justify-center gap-3"
            >
              Konsultasi Pembayaran
            </a>
          </div>

          <div className="relative">
            <div className="relative z-10 w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-border-default shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img
                src={installment.image}
                alt="Skema cicilan program bootcamp"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstallmentSection;
