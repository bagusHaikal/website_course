import { useTheme } from '../../contexts/ThemeContext';
import { hero } from '../data';

const arrowSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;

function scrollToCourses() {
  document.getElementById('all-programs')?.scrollIntoView({ behavior: 'smooth' });
}

function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className={`relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-[600px] h-[600px] rounded-full -top-24 -right-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-[500px] h-[500px] rounded-full -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
        <div
          className="absolute inset-0"
          style={{
            opacity: isLight ? 0.08 : 0.2,
            backgroundImage: `url("data:image/svg+xml;base64,${btoa(`<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="1" cy="1" r="1" fill="${isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'}"/></svg>`)}")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl animate-fade-slide-up">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight text-text-primary">
              {hero.titlePre}<br />
              <span className={isLight ? 'text-gradient-dark' : 'text-gradient-gold'}>
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="text-text-secondary text-base lg:text-lg mb-4 leading-relaxed max-w-lg">{hero.desc}</p>
            <p className="text-text-secondary text-base lg:text-lg mb-8 leading-relaxed max-w-lg border-l-2 border-brand-violet pl-5">{hero.descDetail}</p>

            <button onClick={scrollToCourses} className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
              {hero.cta}
              {arrowSVG}
            </button>
          </div>

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <img
              src={hero.image}
              alt="Semua Program Infinite Learning"
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
