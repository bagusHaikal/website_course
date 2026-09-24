import { useTheme } from '../../contexts/ThemeContext';

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
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl text-text-primary mb-6 tracking-tight">
          Siap Memulai Karir Digitalmu?
        </h2>
        <p className="text-text-secondary/80 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Jangan lewatkan kesempatan Early Bird. Kuota terbatas!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn-premium bg-white text-brand-purple px-8 py-4 rounded-full font-bold text-base shadow-lg hover:bg-gray-100 transition-colors">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
