import { Code2, BookOpen, Lightbulb, Globe, BadgeCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Satu Kodebase, Dua Platform',
    desc: 'Bikin aplikasi Android & iOS sekaligus dari satu codebase Flutter. Nggak perlu tulis dua kali, tapi tetap terasa native di kedua platform.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Cocok Untuk Pemula',
    desc: 'Nggak perlu background IT atau pengalaman coding. Kamu dibimbing step-by-step dari nol, dari Dart pertama sampai aplikasi siap publish ke store.',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'UI/UX yang Keren & Gampang Dipakai',
    desc: 'Nggak cuma jago coding, kamu juga belajar desain UI/UX biar aplikasimu estetik, konsisten, dan enak dipakai — skill yang dicari semua tech company.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Real Project Sampai Rilis ke Store',
    desc: 'Semua materi langsung praktik di proyek nyata. Di akhir program, aplikasimu siap publish ke Google Play Store dan jadi portofolio kuatmu.',
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
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
