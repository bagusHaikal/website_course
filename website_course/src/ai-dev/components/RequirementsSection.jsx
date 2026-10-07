function RequirementsSection() {
  const specs = [
    { feature: 'Operating System', min: 'Windows 10 64-bit / macOS 10.14 / Linux Kernel 5.0', rec: 'Windows 11 64-bit / macOS 12 / Linux Kernel 5.10' },
    { feature: 'Processor', min: 'Intel Core i3 Gen 8 / AMD Ryzen 3 Gen 1', rec: 'Intel Core i5 Gen 8 / AMD Ryzen 5 Gen 3 / M1 (Mac)' },
    { feature: 'RAM', min: '8 GB', rec: '16 GB' },
    { feature: 'Free Storage', min: '32 GB', rec: '64 GB ++' },
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
        <div className="border border-border-default bg-bg-surface rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-brand-purple/10 border-b border-border-default">
            <div className="px-6 py-4 text-xs font-bold text-text-primary uppercase tracking-wider">Persyaratan</div>
            <div className="px-6 py-4 text-xs font-bold text-text-primary uppercase tracking-wider text-center">Minimum</div>
            <div className="px-6 py-4 text-xs font-bold text-brand-accent uppercase tracking-wider text-center">Direkomendasikan</div>
          </div>
          {specs.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i !== specs.length - 1 ? 'border-b border-divider' : ''}`}>
              <div className="px-6 py-4 text-sm font-semibold text-text-primary">{row.feature}</div>
              <div className="px-6 py-4 text-sm text-text-secondary text-center">{row.min}</div>
              <div className="px-6 py-4 text-sm text-text-secondary text-center">{row.rec}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RequirementsSection;
