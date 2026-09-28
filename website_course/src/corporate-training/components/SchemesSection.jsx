const schemes = [
  {
    title: 'Basic Program',
    features: [
      'Berdurasi 1 - 3 bulan intensive',
      'Bisa dilakukan secara offline, online, maupun hybrid',
      'Cocok untuk: perusahaan yang belum mengetahui ranah yang ingin dituju',
    ],
  },
  {
    title: 'Personalized Training',
    features: [
      'Modul, jadwal, durasi dapat menyesuaikan',
      'Bisa hanya mengambil 1 bagian, maupun menggabung beberapa pelatihan',
      'Cocok untuk perusahaan yang sudah mengetahui skill yang ingin dikembangkan',
    ],
  },
];

function SchemesSection() {
  return (
    <section className="py-24 bg-bg-section relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Skema Pelatihan</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">Pilih Skema yang Cocok</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {schemes.map((scheme, i) => (
            <div
              key={i}
              className="border border-border-default bg-bg-surface rounded-2xl p-8 hover:border-border-hover hover:-translate-y-1 hover:shadow-glow-hover transition-all duration-300 flex flex-col"
            >
              <h3 className="font-display font-extrabold text-xl text-text-primary mb-5">{scheme.title}</h3>
              <ul className="space-y-3 flex-1">
                {scheme.features.map((feat, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-text-secondary text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 btn-secondary w-full py-3 rounded-xl font-semibold text-sm border border-border-default text-text-primary hover:border-border-hover transition-colors">
                Konsultasi dengan kami
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SchemesSection;
