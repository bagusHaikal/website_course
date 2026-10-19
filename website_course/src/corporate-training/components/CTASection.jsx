import { useTheme } from '../../contexts/ThemeContext';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const consultationBenefits = [
  { title: 'Analisis Kebutuhan', desc: 'Memahami tantangan dan target atau goals yang ingin dicapai.' },
  { title: 'Rekomendasi Program', desc: 'Dapatkan rekomendasi program yang paling sesuai dengan kebutuhan dan tingkat keahlian tim.' },
  { title: 'Personalized Roadmap', desc: 'Berdasarkan hasil diskusi, kami akan menyusun roadmap yang dipersonalisasi berdasarkan kebutuhan.' },
];

function CTASection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="py-24 relative overflow-hidden">
      <div className={`absolute inset-0 ${isLight ? 'bg-cta-gradient-light' : 'bg-hero-gradient'}`}></div>
      <div
        className="absolute inset-0"
        style={{
          opacity: isLight ? 0.08 : 0.2,
          backgroundImage: `url("data:image/svg+xml;base64,${btoa(`<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="1" cy="1" r="1" fill="${isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)'}"/></svg>`)}")`,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="animate-fade-slide-up">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 tracking-tight">
              Konsultasi Gratis<br />untuk Mendapatkan<br />Solusi yang Tepat!
            </h2>
            <p className="text-text-secondary/80 text-base md:text-lg mb-8">
              Jadwalkan konsultasi dengan tim kami dan dapatkan manfaat berikut:
            </p>
            <div className="space-y-4">
              {consultationBenefits.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl border border-border-default bg-bg-surface flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-text-primary text-base mb-0.5">{item.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow">
                Jadwalkan Konsultasi
              </button>
              <a
                href="https://wa.me/6282387597266"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-secondary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-colors ${
                  isLight
                    ? 'border border-border-default text-gray-600 hover:bg-bg-section'
                    : 'border border-white/20 text-text-secondary hover:bg-white/5'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Kami
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <img
              src="/model-for-corporate-training.webp"
              alt="Consultation"
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="absolute -inset-4 bg-brand-violet/20 blur-[80px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTASection;
