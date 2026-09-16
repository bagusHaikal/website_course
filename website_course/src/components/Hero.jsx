function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-[600px] h-[600px] rounded-full top-[-100px] right-[-100px]"></div>
        <div className="blob bg-brand-violet w-[500px] h-[500px] rounded-full bottom-[-100px] left-[-100px]"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content — PRD 16.5: fade-in + slide-up 600ms */}
          <div className="max-w-2xl animate-fade-slide-up">

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-8 tracking-tight">
              Belajar Tanpa Batas,<br />
              <span className="text-gradient-gold">
                Kapan Pun & Dimana Pun
              </span>
            </h1>

            <p className="text-lg text-[#D1D5DB] mb-10 leading-[1.6] max-w-lg border-l-2 border-brand-violet pl-6">
              Platform pembelajaran online yang menyatukan seluruh kebutuhanmu untuk belajar vokasi dan upskilling digital — dari kampus merdeka hingga belajar mandiri.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="btn-premium bg-button-gradient text-white px-8 py-4 rounded-full font-bold text-lg shadow-glow flex items-center justify-center gap-3">
                Temukan Programmu
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://lms.infinitelearningstudent.id/pluginfile.php/1/theme_trema/loginbackgroundimage/1768987444/Mentors%20and%20students3.JPG"
                alt="Students collaborating"
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-5 rounded-2xl flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Sertifikat Resmi Terakreditasi</p>
                  <p className="text-xs text-gray-400">Diakui oleh 50+ Perusahaan Partner</p>
                </div>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-brand-violet/30 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
