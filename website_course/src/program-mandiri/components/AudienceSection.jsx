const audiences = [
  { icon: '🎓', title: 'Mahasiswa', desc: 'Kamu nggak harus dari jurusan tertentu. Program ini bantu kamu belajar skill digital dari dasar dan siapin karier profesional.' },
  { icon: '📈', title: 'Entrepreneur', desc: 'Punya bisnis atau baru mau mulai? Pahami cara mengembangkan bisnis lewat strategi digital dan inovasi teknologi.' },
  { icon: '🔄', title: 'Career Switcher', desc: 'Ingin transisi karier ke bidang digital? Program ini jadi jembatan realistis untuk upgrade skill tanpa kuliah ulang.' },
  { icon: '🌍', title: 'Freelancer', desc: 'Kerja fleksibel dari mana aja? Tingkatkan kemampuan digital dan bangun portofolio untuk proyek global.' },
];

function AudienceSection() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">Syarat Mengikuti Program</h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto text-sm">Program ini dirancang untuk berbagai latar belakang yang ingin upgrade skill digital.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <div key={i} className="border border-border-default bg-bg-surface rounded-2xl p-6 hover:border-border-hover hover:-translate-y-1 hover:shadow-glow-hover transition-all duration-300">
              <div className="w-11 h-11 bg-brand-violet/20 rounded-full flex items-center justify-center text-brand-accent mb-4 text-xl">{a.icon}</div>
              <h4 className="font-display font-bold text-text-primary text-base mb-2">{a.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;

