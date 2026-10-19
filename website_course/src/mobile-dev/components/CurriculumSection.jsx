import { curriculum } from '../data';
import { FileDown } from 'lucide-react';

function CurriculumSection() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Kurikulum</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Apa Saja yang Akan Dipelajari?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {curriculum.map((item, i) => (
            <div
              key={i}
              className="border border-border-default bg-bg-surface rounded-2xl p-6 hover:border-brand-accent/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-button-gradient flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-primary text-sm mb-1.5">{item.title}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{item.output}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://docs.google.com/document/d/1MEVB_kneJfMo7Eq7kzsXzEfpqGIYQgc8gTbuVeSmiag/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:text-text-primary transition-colors border-b border-brand-accent/40 hover:border-brand-accent pb-1"
          >
            Download Syllabus Lengkap
            <FileDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CurriculumSection;
