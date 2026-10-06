import { WA_LINK } from '../data';
import { DotMesh } from './icons';
import partnershipImg from '../../assets/partnership.webp';

const arrowSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
const downSVG = <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>;

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-150 h-150 rounded-full -top-24 -right-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-125 h-125 rounded-full -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
        <DotMesh isLight={isLight} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="max-w-xl animate-fade-slide-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-light text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Program Kemitraan
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight text-text-primary">
              Kolaborasi untuk Masa Depan,<br/>Menciptakan <span className="text-gradient-gold">Dampak Positif</span>
            </h1>

            <p className="text-text-secondary text-base lg:text-lg mb-8 leading-relaxed max-w-lg border-l-2 border-brand-violet pl-5">
              Ingin berkontribusi pada masa depan Indonesia melalui pendidikan? Infinite Learning membuka pintu kolaborasi bagi perusahaan yang ingin berinvestasi dalam pengembangan talent dan pendidikan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
                Konsultasi Gratis
                {arrowSVG}
              </a>
              <button
                onClick={() => document.getElementById('bentuk-kolaborasi')?.scrollIntoView({ behavior: 'smooth' })}
                className={`btn-secondary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-colors w-full sm:w-auto ${isLight ? 'border border-border-default text-gray-600 hover:bg-bg-section' : 'border border-white/20 text-text-secondary hover:bg-white/5'}`}
              >
                Lihat Bentuk Kolaborasi
                {downSVG}
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <img
              src={partnershipImg}
              alt="Partnership"
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-brand-violet/20 blur-[100px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
