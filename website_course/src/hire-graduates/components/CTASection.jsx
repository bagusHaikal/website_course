import { DotMesh } from './icons';
import { Check } from 'lucide-react';

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
                  <Check className="w-4 h-4 text-brand-accent" />
                </div>
                <span className="font-display font-bold text-text-primary text-sm">{item.title}</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CTASection;
