import { Code2, TrendingUp, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Belajar dari Nol, Langsung ke Industri',
    desc: 'Mulai dari Python dasar hingga membuat model machine learning dan deep learning. Cocok untuk pemula, diajarkan step by step oleh mentor profesional.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Skill High Demand, Karier High Return',
    desc: 'AI adalah salah satu skill dengan permintaan paling tinggi di dunia kerja saat ini. Bekal ini akan membuka peluang sebagai AI Engineer, Data Analyst, hingga Researcher.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
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
