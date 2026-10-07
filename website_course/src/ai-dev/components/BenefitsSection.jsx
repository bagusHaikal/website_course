const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Belajar dari Nol, Langsung ke Industri',
    desc: 'Mulai dari Python dasar hingga membuat model machine learning dan deep learning. Cocok untuk pemula, diajarkan step by step oleh mentor profesional.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Skill High Demand, Karier High Return',
    desc: 'AI adalah salah satu skill dengan permintaan paling tinggi di dunia kerja saat ini. Bekal ini akan membuka peluang sebagai AI Engineer, Data Analyst, hingga Researcher.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Real-World Projects, Real Impact',
    desc: 'Kamu akan membangun proyek AI berbasis kasus nyata: analisis data, klasifikasi, NLP, hingga image recognition. Proyekmu bisa langsung jadi bagian dari portofolio profesional.',
  },
];

function BenefitsSection() {
  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Kenapa Pilih Program Artificial Intelligence di Infinite Learning?
          </h2>
          <p className="text-text-secondary mt-3 text-sm">AI adalah Masa Depan. Kamu Bisa Jadi Pelopornya.</p>
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
