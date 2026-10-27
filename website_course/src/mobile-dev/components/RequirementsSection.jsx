import { Monitor, Cpu, Zap, HardDrive } from 'lucide-react';

function RequirementsSection() {
  const specs = [
    {
      icon: <Monitor className="w-5 h-5 text-brand-accent" />,
      feature: 'Operating System',
      min: 'Windows 10 64-bit / macOS 10.14 / Linux Kernel 5.0',
      rec: 'Windows 11 64-bit / macOS 12 / Linux Kernel 5.10',
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-accent" />,
      feature: 'Processor',
      min: 'Intel Core i5 Gen 6 / AMD Ryzen 3 Gen 1',
      rec: 'Intel Core i7 Gen 8 / AMD Ryzen 5 Gen 3 / M1 (Mac)',
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-accent" />,
      feature: 'RAM',
      min: '8 GB',
      rec: '16 GB (32 GB untuk emulator lebih lancar)',
    },
    {
      icon: <HardDrive className="w-5 h-5 text-brand-accent" />,
      feature: 'Free Storage',
      min: '32 GB',
      rec: '64 GB ++',
    },
  ];

  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Persyaratan</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Device Requirements
          </h2>
          <p className="text-text-secondary mt-3 text-sm">Pastikan perangkat kamu memenuhi spesifikasi minimal agar proses pembelajaran berjalan lancar.</p>
        </div>

        {/* ================= MOBILE VIEW (Card Stack Layout) ================= */}
        <div className="md:hidden space-y-4">
          {specs.map((row, i) => (
            <div key={i} className="border border-border-default bg-bg-surface rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border-default/60">
                <div className="w-10 h-10 rounded-xl bg-brand-violet/15 flex items-center justify-center shrink-0">
                  {row.icon}
                </div>
                <h3 className="font-display font-bold text-text-primary text-base">{row.feature}</h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div className="bg-bg-subtle p-3 rounded-xl border border-border-default/40">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-bg-surface text-text-muted mb-1 shadow-xs">
                    Minimum
                  </span>
                  <p className="text-xs text-text-secondary font-medium leading-relaxed">{row.min}</p>
                </div>

                <div className="bg-brand-violet/10 p-3 rounded-xl border border-brand-violet/30">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-brand-violet/20 text-brand-accent mb-1">
                    Direkomendasikan
                  </span>
                  <p className="text-xs text-text-primary font-semibold leading-relaxed">{row.rec}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW (Table Layout) ================= */}
        <div className="hidden md:block border border-border-default bg-bg-surface rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-brand-purple/10 border-b border-border-default">
            <div className="px-6 py-4 text-xs font-bold text-text-primary uppercase tracking-wider">Persyaratan</div>
            <div className="px-6 py-4 text-xs font-bold text-text-primary uppercase tracking-wider text-center">Minimum</div>
            <div className="px-6 py-4 text-xs font-bold text-brand-accent uppercase tracking-wider text-center">Direkomendasikan</div>
          </div>
          {specs.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 items-center ${i !== specs.length - 1 ? 'border-b border-divider' : ''}`}>
              <div className="px-6 py-5 text-sm font-semibold text-text-primary">{row.feature}</div>
              <div className="px-6 py-5 text-sm text-text-secondary text-center">{row.min}</div>
              <div className="px-6 py-5 text-sm text-text-primary font-medium text-center">{row.rec}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RequirementsSection;
