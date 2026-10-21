import { ArrowRight, Compass } from 'lucide-react';
import slideHeaderUngu from '../../assets/slide_header_ungu.png';

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-10 pb-12 lg:pt-32 lg:pb-32 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-violet w-150 h-150 rounded-full -top-25 -right-25"></div>
        <div className="blob bg-brand-purple w-100 h-100 rounded-full -bottom-25 -left-25"></div>
        <div
          className="absolute inset-0"
          style={{
            opacity: isLight ? 0.08 : 0.15,
            backgroundImage: `url("data:image/svg+xml;base64,${btoa(`<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><circle cx="1" cy="1" r="1" fill="${isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)'}"/></svg>`)}")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ================= CONTENT (Desktop & Soft Mobile Layout) ================= */}
          <div className="max-w-2xl animate-fade-slide-up">
            
            {/* Soft Mobile Tagline Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-medium mb-4 lg:hidden tracking-wide">
              <Compass className="w-3.5 h-3.5" />
              <span>Pusat Pembelajaran Vokasi Digital</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-6xl lg:text-7xl leading-[1.25] lg:leading-[1.1] mb-5 sm:mb-8 tracking-tight text-text-primary">
              Belajar Tanpa Batas,<br />
              <span className={isLight ? 'text-gradient-dark' : 'text-gradient-gold'}>
                Kapan Pun & Dimana Pun
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-text-secondary mb-8 sm:mb-10 leading-[1.7] max-w-lg border-l border-brand-violet/60 pl-4 sm:pl-6 font-normal">
              Platform pembelajaran online yang menyatukan seluruh kebutuhanmu untuk belajar vokasi dan upskilling digital secara terstruktur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/all-programs" className="btn-premium bg-button-gradient text-white px-7 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-glow flex items-center justify-center gap-2.5 w-full sm:w-auto">
                Temukan Programmu
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* ================= DESKTOP ILLUSTRATION ================= */}
          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <div className="relative z-10 w-full flex items-center justify-center">
              <img
                src={slideHeaderUngu}
                alt="Slide Header Ungu"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-brand-violet/20 blur-[100px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
