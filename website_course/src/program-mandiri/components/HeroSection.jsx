
const verifiedSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
const arrowSVG = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>;

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
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-border-default shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="/hero-program-mandiri.webp"
                alt="Students collaborating on real projects"
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-5 rounded-2xl flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400 shrink-0">
                  {verifiedSVG}
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">Konversi hingga 20 SKS</p>
                  <p className="text-xs text-text-secondary">Sertifikat Resmi & Magang Industri</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-brand-violet/20 blur-[100px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
