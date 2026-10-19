import { Code2, BookOpen, Lightbulb, Globe, BadgeCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Belajar Coding & Design Sekaligus',
    desc: 'Dapatkan dua skill paling dicari industri: membangun website dari nol dan mendesain pengalaman pengguna. Cocok buat kamu yang ingin jadi all-around digital talent.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Cocok Untuk Pemula',
    desc: 'Nggak perlu background IT. Program ini dirancang dari dasar, dengan pendampingan mentor dan fasilitator di setiap langkah.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Problem Solving & UI Thinking',
    desc: 'Bukan hanya jago coding, kamu juga akan diajarkan berpikir sebagai problem solver dan UX thinker — skill yang dibutuhkan semua tech company.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Skill Fleksibel & Bisa Dipakai di Mana Saja',
    desc: 'Ingin jadi front-end dev? UI/UX designer? Freelance web dev? Semua pintu terbuka dengan bekal skill dari program ini.',
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: 'Sertifikat + Portofolio = Siap Bersaing',
    desc: 'Gabungan antara sertifikat kelulusan resmi dan portofolio profesional bikin kamu lebih percaya diri melangkah ke dunia industri.',
  },
];

function BenefitsSection() {
  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Keunggulan</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Kenapa Pilih Program Full-Stack Website Development?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="border border-border-default bg-bg-surface rounded-2xl p-7 hover:border-brand-accent/40 hover:-translate-y-1 hover:shadow-glow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-violet/15 rounded-xl flex items-center justify-center text-brand-accent mb-5">
                {b.icon}
              </div>
              <h3 className="font-display font-bold text-text-primary text-base mb-2">{b.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
