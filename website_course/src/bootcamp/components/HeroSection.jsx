import { hero, waLink } from '../data';
import bootcampImg from '../../assets/bootcamp.png';

const arrowSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
const waSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.664l1.497 2.99a1 1 0 01-.532 1.33l-2.121 1.061a10.01 10.01 0 005.572 5.572l1.061-2.121a1 1 0 011.33-.532l2.99 1.497A1 1 0 0121 18.72V21a2 2 0 01-2 2h-1.28a1 1 0 01-.948-.664l-1.497-2.99a1 1 0 01-1.33.532l-2.121 1.061A10.01 10.01 0 014 18.604V5z" /></svg>;

function scrollToDetail() {
  document.getElementById('detail-bootcamp')?.scrollIntoView({ behavior: 'smooth' });
}

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
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

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToDetail} className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
                {hero.ctaDetail}
                {arrowSVG}
              </button>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-text-primary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                {hero.ctaConsult}
                {waSVG}
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <div className="relative z-10 w-full h-auto rounded-3xl overflow-hidden border border-border-default shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src={bootcampImg}
                alt="Peserta bootcamp belajar bersama mentor"
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
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
