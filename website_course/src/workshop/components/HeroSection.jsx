import { hero } from '../data';

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-[600px] h-[600px] rounded-full -top-24 -right-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-[500px] h-[500px] rounded-full -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl animate-fade-slide-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-light text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {hero.badge}
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.1] mb-6 tracking-tight text-text-primary">
              {hero.titlePre}<br />
              <span className={isLight ? 'text-gradient-dark' : 'text-gradient-gold'}>{hero.titleHighlight}</span>
            </h1>

            <p className="text-text-secondary text-base lg:text-lg mb-8 leading-relaxed max-w-lg border-l-2 border-brand-violet pl-5">
              {hero.subtitle}
            </p>

            <div className="flex items-end gap-10 mb-8">
              <div>
                <div className="font-display font-extrabold text-3xl text-text-primary">{hero.duration}</div>
                <p className="text-xs text-text-muted mt-1">Durasi Program</p>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl text-text-primary">{hero.time}</div>
                <p className="text-xs text-text-muted mt-1">Jadwal Sesi</p>
              </div>
            </div>

            <ul className="space-y-2.5 mb-8">
              {hero.highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#" className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
                {hero.ctaRegister}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-muted hidden sm:block">atau</span>
                <a href="#" className="border border-border-default text-text-primary px-6 py-4 rounded-full font-semibold text-sm hover:border-border-hover hover:bg-bg-subtle transition-all">{hero.ctaConsult}</a>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
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
