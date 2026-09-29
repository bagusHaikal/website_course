import { timeline } from '../data';

function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-bg-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Timeline</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight mb-12">Periode &amp; Timeline Program</h2>

        <div className="border border-border-default bg-bg-surface rounded-2xl p-8 text-left">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <h3 className="font-display font-bold text-lg text-text-primary">{timeline.nextBatch}</h3>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-sm text-text-muted sm:w-32 shrink-0">{timeline.registration.label}</span>
              <span className="text-sm font-semibold text-text-secondary">{timeline.registration.value}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="text-sm text-text-muted sm:w-32 shrink-0">{timeline.learning.label}</span>
              <span className="text-sm font-semibold text-text-secondary">{timeline.learning.value}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <a href="#" className="btn-premium bg-button-gradient text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-glow">Daftar Sekarang</a>
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-muted">atau</span>
            <a href="#" className="border border-border-default text-text-primary px-6 py-3.5 rounded-full font-semibold text-sm hover:border-border-hover hover:bg-bg-subtle transition-all">Konsultasi Gratis</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
