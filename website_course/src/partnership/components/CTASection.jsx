import { WA_LINK, EMAIL_LINK, consultationBenefits } from '../data';
import { DotMesh } from './icons';
import modelImg from '../../assets/model-for-corporate-training.webp';

const arrowSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
const mailSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 8.9 5.5a2 2 0 0 0 2.2 0L22 7"/></svg>;

function CTASection({ isLight }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className={`absolute inset-0 ${isLight ? 'bg-cta-gradient-light' : 'bg-hero-gradient'}`}></div>
      <DotMesh isLight={isLight} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <img
              src={modelImg}
              alt="Konsultasi Partnership"
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-brand-violet/20 blur-[100px] -z-10 rounded-full"></div>
          </div>

          <div className="animate-fade-slide-up">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">Mulai Kolaborasi</span>

            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-5 tracking-tight">
              Konsultasi Gratis untuk Mendapatkan Solusi yang Tepat!
            </h2>
            <p className="text-text-secondary/80 text-base md:text-lg mb-10">Jadwalkan konsultasi dengan tim kami dan dapatkan manfaat berikut:</p>

            <div className="space-y-4 mb-10">
              {consultationBenefits.map((b) => (
                <div key={b.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl border border-border-default bg-bg-surface flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-text-primary text-base mb-0.5">{b.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
                Jadwalkan Konsultasi
                {arrowSVG}
              </a>
              <a href={EMAIL_LINK} className={`btn-secondary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-colors w-full sm:w-auto ${isLight ? 'border border-border-default text-gray-600 hover:bg-bg-section' : 'border border-white/20 text-text-secondary hover:bg-white/5'}`}>
                {mailSVG}
                Email Kami
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTASection;
