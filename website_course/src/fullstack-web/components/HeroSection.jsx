const arrowSVG = (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-150 h-150 rounded-full -top-24 -right-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-125 h-125 rounded-full -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl animate-fade-slide-up">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight text-text-primary">
              Full-Stack Website<br />
              <span className={isLight ? 'text-gradient-dark' : 'text-gradient-gold'}>
                Development & UI/UX
              </span>
            </h1>

            <p className="text-text-secondary text-base lg:text-lg mb-4 leading-relaxed max-w-lg">
              Mulai karier digitalmu lewat Program Web Development Infinite Learning. Belajar dari nol, langsung dari mentor industri.
            </p>
            <p className="text-text-secondary text-base lg:text-lg mb-8 leading-relaxed max-w-lg border-l-2 border-brand-violet pl-6">
              Kuasai front-end, back-end, dan UI/UX design dalam satu program. Kamu nggak cuma belajar teori, tapi juga membangun proyek nyata yang bisa kamu tampilkan di portofolio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://s.id/Pre-RegistrationBatch10IL3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-glow flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                Daftar Sekarang
                {arrowSVG}
              </a>
              <a
                href="https://docs.google.com/document/d/1Cp7UYULYGn5uSZIsdqn6gs-EJw0vD0W8cTh9RkPe6LU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-premium px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 w-full sm:w-auto transition-all duration-300 ${
                  isLight
                    ? 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                    : 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Lihat Syllabus
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-border-default shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://course.infinitelearning.id/wp-content/uploads/2025/12/web-1.png"
                alt="Full-Stack Web Development"
                className="object-cover w-full h-full"
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
