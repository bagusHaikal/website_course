import { WA_LINK } from '../data';
import partnershipImg from '../../assets/partnership.webp';
import { DotMesh } from './icons';
import { ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-8 pb-20 lg:pt-20 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-[600px] h-[600px] rounded-full -top-24 -left-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-[500px] h-[500px] rounded-full -bottom-24 -right-24 opacity-20" style={{ animationDelay: '2s' }}></div>
        <DotMesh isLight={isLight} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          <div className="max-w-xl animate-fade-slide-up text-center lg:text-left mx-auto lg:mx-0">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-6xl leading-[1.2] mb-6 tracking-tight text-text-primary">
              Temukan Digital Talent yang Ideal untuk <span className="text-gradient-gold">Perusahaan Anda</span>
            </h1>

            <p className="text-text-secondary text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Ingin merekrut talent digital tanpa ribet? Infinite Learning menjadi hiring partner Anda — akses kandidat terbaik dari talent pool lebih dari 5.000 lulusan dan mentee kami.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
                Hubungi Kami
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => document.getElementById('konsultasi')?.scrollIntoView({ behavior: 'smooth' })}
                className={`btn-secondary px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-colors w-full sm:w-auto ${isLight ? 'border border-border-default text-gray-600 hover:bg-bg-section' : 'border border-white/20 text-text-secondary hover:bg-white/5'}`}
              >
                Lihat Proses Rekrutmen
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <img src={partnershipImg} alt="Partnership" className="w-full h-auto rounded-3xl shadow-2xl border border-border-default" />
            <div className="absolute top-6 right-4 rounded-full px-5 py-2.5 flex items-center gap-2.5 animate-float z-20" style={{ background: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(30,27,75,0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)'}` }}>
              <span className="font-display font-extrabold text-lg" style={{ color: isLight ? '#1a1a2e' : '#f0f0f0' }}>5.000+</span>
              <span className="text-xs font-medium leading-tight" style={{ color: isLight ? '#555' : '#ccc' }}>Talent Pool<br />Terhubung</span>
            </div>
            <div className="absolute bottom-6 left-6 rounded-2xl px-4 py-3 flex items-center gap-3 animate-float z-20" style={{ background: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(30,27,75,0.8)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: `1px solid ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)'}`, animationDelay: '4s' }}>
              <div className="w-10 h-10 rounded-xl bg-button-gradient text-white flex items-center justify-center shadow-glow shrink-0">
                <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-display font-bold" style={{ color: isLight ? '#1a1a2e' : '#f0f0f0' }}>Diserap Perusahaan Global</p>
                <p className="text-xs" style={{ color: isLight ? '#666' : '#aaa' }}>AIA Singapore · Seiko Epson · Airbus</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
