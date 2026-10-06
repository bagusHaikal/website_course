
const arrowSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;
import heroProgramMandiriImg from '../../assets/hero-program-mandiri.webp';

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-150 h-150 rounded-full -top-24 -right-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-125 h-125 rounded-full -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
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

          {/* Left – Text */}
          <div className="max-w-xl animate-fade-slide-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-light text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Kuota Terbatas Batch 10
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight text-text-primary">
              Mulai dari nol,<br />
              <span className={isLight ? 'text-gradient-dark' : 'text-gradient-gold'}>
                Siap Kerja di Industri Digital.
              </span>
            </h1>

            <p className="text-text-secondary text-base lg:text-lg mb-8 leading-relaxed max-w-lg border-l-2 border-brand-violet pl-5">
              Di Infinite Learning, kamu nggak cuma diajarin coding atau desain. Kamu akan dibimbing langsung ngerjain project dan membangun produk digital, berkolaborasi bareng tim, dan menyelesaikan tantangan dunia nyata.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto">
                Daftar Sekarang
                {arrowSVG}
              </button>
            </div>
          </div>

          {/* Right – Image */}
          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <img
              src={heroProgramMandiriImg}
              alt="Students collaborating on real projects"
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
