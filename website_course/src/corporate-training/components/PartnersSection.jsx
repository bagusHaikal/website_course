const partners = [
  {
    name: 'PLN',
    tagline: 'Pelatihan Digital & Bootcamp',
    description: 'Infinite Learning dipercaya oleh PLN untuk melatih karyawannya. Kita telah menjalankan 3 batch bootcamp dan beberapa seminar tentang digitalisasi.',
  },
  {
    name: 'Taspen',
    tagline: 'Digital Marketing Strategy',
    description: 'Infinite Learning membantu Taspen meningkatkan efektivitas digital marketing melalui pelatihan strategi konten kepada karyawannya.',
  },
  {
    name: 'Imigrasi',
    tagline: 'Cybersecurity Partnership',
    description: 'Infinite Learning bersama dengan RMIT menjalin kemitraan strategis untuk meningkatkan kemampuan Cybersecurity di Imigrasi Kota Batam.',
  },
  {
    name: 'Bank Indonesia',
    tagline: 'Content Marketing untuk GenBI',
    description: 'Bank Indonesia memilih Infinite Learning untuk memberikan pelatihan content marketing kepada Generasi Baru Indonesia (GenBI).',
  },
];

function PartnersSection() {
  return (
    <section className="py-24 bg-bg-section relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-purple/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Partners</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Bagaimana Kami Membantu Partner
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="border border-border-default bg-bg-surface rounded-2xl overflow-hidden hover:border-border-hover hover:-translate-y-0.5 hover:shadow-glow-hover transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/partner.webp"
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-block text-xs font-semibold text-brand-accent uppercase tracking-wider bg-bg-base/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {partner.tagline}
                  </span>
                </div>
              </div>
              <div className="p-5 pt-4">
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{partner.description}</p>
                <button className="text-sm font-semibold text-text-muted hover:text-brand-accent transition-colors inline-flex items-center gap-1.5 group">
                  Read More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
