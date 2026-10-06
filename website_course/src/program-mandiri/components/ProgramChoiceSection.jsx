import { Link } from 'react-router-dom';

const programs = [
  {
    href: '/full-stack-website-development',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Full-Stack Website Development & UI/UX',
    desc: 'Kuasai front-end, back-end, dan desain UI/UX dalam satu program. Bangun aplikasi web modern dari nol hingga deploy.',
  },
  {
    href: '/mobile-development',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile Development with Flutter & UI/UX',
    desc: 'Bangun aplikasi mobile cross-platform untuk Android dan iOS dengan Flutter. Desain antarmuka memikat hingga published.',
  },
  {
    href: '/ai-development',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
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
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
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
