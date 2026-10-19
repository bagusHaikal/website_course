import { Link } from 'react-router-dom';
import { Code2, Smartphone, BrainCircuit, ArrowRight } from 'lucide-react';

const programs = [
  {
    href: '/full-stack-web',
    icon: <Code2 className="w-10 h-10" />,
    title: 'Full-Stack Website Development & UI/UX',
    desc: 'Kuasai front-end, back-end, dan desain UI/UX dalam satu program. Bangun aplikasi web modern dari nol hingga deploy.',
  },
  {
    href: '/mobile-dev',
    icon: <Smartphone className="w-10 h-10" />,
    title: 'Mobile Development with Flutter & UI/UX',
    desc: 'Bikin aplikasi Android & iOS dari nol bareng mentor industri. Pakai Flutter & Dart plus desain UI/UX biar aplikasimu keren, gampang dipakai, dan siap rilis ke store.',
  },
  {
    href: '/ai-dev',
    icon: <BrainCircuit className="w-10 h-10" />,
    title: 'Artificial Intelligence Development',
    desc: 'Pelajari konsep AI, machine learning, deep learning, dan aplikasikan pada proyek nyata dengan dataset dunia sesungguhnya.',
  },
];

function ProgramCard({ program }) {
  return (
    <Link
      to={program.href}
      className="group flex flex-col items-center text-center p-8 rounded-2xl border border-border-default bg-bg-surface hover:border-brand-accent/40 hover:shadow-glow-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-16 h-16 rounded-2xl bg-brand-violet/15 text-brand-accent flex items-center justify-center mb-6 group-hover:bg-brand-violet/25 transition-colors duration-300">
        {program.icon}
      </div>
      <h3 className="font-display font-bold text-text-primary text-base leading-snug mb-3">
        {program.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {program.desc}
      </p>
      <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Lihat detail</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

function ProgramChoiceSection() {
  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Spesialisasi</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Pilih Program yang Sesuai dengan Tujuan Karirmu
          </h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
            Setiap program dirancang untuk membawa kamu ke jalur karier yang spesifik. Tentukan arahmu sekarang.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <ProgramCard key={i} program={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramChoiceSection;
