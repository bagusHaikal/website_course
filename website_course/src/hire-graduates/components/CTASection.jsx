import { WA_LINK, EMAIL_LINK } from '../data';
import { DotMesh } from './icons';

const arrowSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
const mailSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 8.9 5.5a2 2 0 0 0 2.2 0L22 7"/></svg>;

const consultItems = [
  { title: 'Analisis Kebutuhan', desc: 'Memahami tantangan dan target atau goals perusahaan.' },
  { title: 'Rekomendasi Program', desc: 'Dapatkan rekomendasi program rekrutmen yang paling sesuai.' },
];

function CTASection({ isLight }) {
  return (
    <section id="konsultasi" className="relative py-24 lg:py-32 overflow-hidden">
      <div className={`absolute inset-0 ${isLight ? 'bg-cta-gradient-light' : 'bg-hero-gradient'}`}></div>
      <DotMesh isLight={isLight} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">Mulai Rekrutmen</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-5 tracking-tight">
          Konsultasi Gratis Mendapatkan Solusi Tepat!
        </h2>
        <p className="text-text-secondary text-base md:text-lg mb-12">Jadwalkan konsultasi dengan tim kami dan dapatkan:</p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {consultItems.map((item) => (
            <div key={item.title} className={`rounded-xl border px-6 py-4 text-left max-w-xs ${isLight ? 'border-black/10 bg-white/50' : 'border-white/10 bg-white/5'}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-brand-violet/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="font-display font-bold text-text-primary text-sm">{item.title}</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
            Jadwalkan Konsultasi
            {arrowSVG}
          </a>
          <a href={EMAIL_LINK} className={`btn-secondary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-colors w-full sm:w-auto ${isLight ? 'border border-black/20 text-gray-600 hover:bg-bg-section' : 'border border-white/20 text-text-secondary hover:bg-white/5'}`}>
            {mailSVG}
            Email Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
