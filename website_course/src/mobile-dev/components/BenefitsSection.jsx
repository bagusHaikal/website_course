const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Satu Kodebase, Dua Platform',
    desc: 'Bikin aplikasi Android & iOS sekaligus dari satu codebase Flutter. Nggak perlu tulis dua kali, tapi tetap terasa native di kedua platform.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Cocok Untuk Pemula',
    desc: 'Nggak perlu background IT atau pengalaman coding. Kamu dibimbing step-by-step dari nol, dari Dart pertama sampai aplikasi siap publish ke store.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'UI/UX yang Keren & Gampang Dipakai',
    desc: 'Nggak cuma jago coding, kamu juga belajar desain UI/UX biar aplikasimu estetik, konsisten, dan enak dipakai — skill yang dicari semua tech company.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Real Project Sampai Rilis ke Store',
    desc: 'Semua materi langsung praktik di proyek nyata. Di akhir program, aplikasimu siap publish ke Google Play Store dan jadi portofolio kuatmu.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Sertifikat + Portofolio = Siap Bersaing',
    desc: 'Gabungan antara sertifikat kelulusan resmi dan portofolio aplikasi mobile nyata bikin kamu lebih percaya diri melangkah ke dunia industri.',
  },
];

function BenefitsSection() {
  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Kenapa Pilih Program Mobile Development with Flutter & UI/UX?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12">
          {benefits.map((b, i) => {
            const isLast = i === benefits.length - 1;
            return (
              <div
                key={i}
                className={`py-6 ${isLast ? 'md:col-span-2' : 'border-b border-divider'}`}
              >
                <div className={`flex items-start gap-4 ${isLast ? 'mx-auto max-w-md' : ''}`}>
                  <div className="w-10 h-10 bg-brand-violet/15 rounded-lg flex items-center justify-center text-brand-accent shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-base mb-1">{b.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
