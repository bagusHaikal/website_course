import { WA_LINK } from '../data';
import { DotMesh } from './icons';
import partnershipImg from '../../assets/partnership.webp';
import { ArrowRight, ArrowDown } from 'lucide-react';

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-150 h-150 rounded-full -top-24 -right-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-125 h-125 rounded-full -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
        <DotMesh isLight={isLight} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="max-w-xl animate-fade-slide-up">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight text-text-primary">
              Kolaborasi untuk Masa Depan,<br/>Menciptakan <span className="text-gradient-gold">Dampak Positif</span>
            </h1>

            <p className="text-text-secondary text-base lg:text-lg mb-8 leading-relaxed max-w-lg border-l-2 border-brand-violet pl-5">
              Ingin berkontribusi pada masa depan Indonesia melalui pendidikan? Infinite Learning membuka pintu kolaborasi bagi perusahaan yang ingin berinvestasi dalam pengembangan talent dan pendidikan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => document.getElementById('bentuk-kolaborasi')?.scrollIntoView({ behavior: 'smooth' })}
                className={`btn-secondary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-colors w-full sm:w-auto ${isLight ? 'border border-border-default text-gray-600 hover:bg-bg-section' : 'border border-white/20 text-text-secondary hover:bg-white/5'}`}
              >
                Lihat Bentuk Kolaborasi
                <ArrowDown className="w-5 h-5 rotate-90" />
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
