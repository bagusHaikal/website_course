import { syllabus } from '../data';

function SyllabusSection() {
  return (
    <section id="syllabus" className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Syllabus</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">What will you learn?</h2>
          <p className="text-text-secondary mt-3 text-sm">Rangkaian materi 5 hari yang membawa kamu dari fundamental hingga Mini Capstone.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {syllabus.map((module) => (
            <div key={module.num} className="border border-border-default bg-bg-surface rounded-2xl p-7 hover:border-border-hover hover:-translate-y-1 hover:shadow-glow-hover transition-all duration-300">
              <div className="font-display font-extrabold text-4xl text-brand-accent/40 mb-4">{module.num}</div>
              <h3 className="font-display font-bold text-base text-text-primary mb-4 leading-snug">{module.title}</h3>
              <ul className="space-y-2">
                {module.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-text-muted text-sm mb-6">Untuk detail lebih lanjut mengenai Syllabus Data Science, download versi lengkap di sini</p>
          <a href="#" className="btn-premium bg-button-gradient text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-glow inline-flex items-center gap-3">
            Unduh Syllabus
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-6 0l-3 3m3-3l3 3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SyllabusSection;
