const benefits = [
  { icon: '✅', title: '2 Sertifikat Sekaligus', desc: 'Dapatkan Sertifikat Studi Independen & Magang Industri yang diakui perusahaan partner.' },
  { icon: '📁', title: 'Portfolio Real Project', desc: 'Bangun portofolio nyata dari proyek kolaboratif yang bisa langsung kamu tunjukkan ke recruiter.' },
  { icon: '👥', title: 'Mentor Industri Ahli', desc: 'Bimbingan langsung dari mentor teknikal dan profesional yang berpengalaman di bidangnya.' },
  { icon: '💼', title: 'Persiapan Karir', desc: 'Review CV, simulasi interview, dan akses ke jaringan hiring partner kami.' },
  { icon: '📖', title: 'Konversi hingga 20 SKS', desc: 'Program ini dapat dikonversikan menjadi SKS sesuai kebijakan kampus masing-masing.' },
  { icon: '🌐', title: 'Jaringan Profesional', desc: 'Kesempatan bekerja di perusahaan internasional dan multinasional melalui koneksi alumni.' },
];

function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-bg-section relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Why Join Us</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">Keuntungan yang Kamu Dapatkan</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="border border-border-default bg-bg-surface rounded-2xl p-7 hover:border-border-hover hover:-translate-y-1 hover:shadow-glow-hover transition-all duration-300">
              <div className="w-11 h-11 bg-brand-violet/20 rounded-lg flex items-center justify-center text-brand-accent mb-5 text-xl">{b.icon}</div>
              <h3 className="font-display font-bold text-lg text-text-primary mb-2">{b.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

