import { hero } from '../data';
import { Check, ArrowRight } from 'lucide-react';

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-[600px] h-[600px] rounded-full -top-24 -right-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-[500px] h-[500px] rounded-full -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl animate-fade-slide-up text-center lg:text-left">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.2] mb-6 tracking-tight text-text-primary">
              {hero.titlePre}{' '}
              <span className={isLight ? 'text-gradient-dark' : 'text-gradient-gold'}>{hero.titleHighlight}</span>
            </h1>

            <p className="text-text-secondary text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-2 lg:border-brand-violet lg:pl-5">
              {hero.subtitle}
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-10 mb-8">
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">{hero.duration}</div>
                <p className="text-xs text-text-muted mt-1">Durasi Program</p>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">{hero.time}</div>
                <p className="text-xs text-text-muted mt-1">Jadwal Sesi</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 max-w-md mx-auto lg:mx-0 text-left">
              {hero.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#" className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
                {hero.ctaRegister}
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-muted hidden sm:block">atau</span>
                <a href="#" className="border border-border-default text-text-primary px-6 py-4 rounded-full font-semibold text-sm hover:border-border-hover hover:bg-bg-subtle transition-all">{hero.ctaConsult}</a>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <img
              src={hero.image}
              alt="Workshop Data Science"
              className="w-full h-auto object-cover rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-brand-violet/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
