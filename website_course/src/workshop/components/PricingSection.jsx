import { pricing, tiers } from '../data';

function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Biaya</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary mb-4 tracking-tight">{pricing.title}</h2>
        <p className="text-text-secondary mb-12 max-w-2xl mx-auto text-sm">{pricing.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start text-left">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden border transition-all duration-300 ${
                tier.bestDeal
                  ? 'scale-105 shadow-glow border-brand-accent/40 bg-bg-surface z-10'
                  : 'border-border-default bg-bg-surface'
              }`}
            >
              {tier.bestDeal && (
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg z-20">BEST DEAL</div>
              )}

              <div className={`p-7 ${tier.bestDeal ? 'pt-10' : ''}`}>
                <h3 className={`font-display font-bold text-xl mb-1 ${tier.active ? 'text-text-primary' : 'text-text-muted'}`}>{tier.label}</h3>
                <p className="text-xs text-text-muted mb-5">{tier.date}</p>

                <div className="mb-6">
                  {tier.original && <span className="line-through text-xs block text-text-muted">{tier.original}</span>}
                  <span className={`font-extrabold text-3xl ${tier.active ? 'text-text-primary' : 'text-text-muted'}`}>{tier.price}</span>
                </div>

                {tier.features.length > 0 && (
                  <ul className="text-left text-sm text-text-secondary space-y-2.5 mb-7">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="#"
                  className={`block w-full text-center py-3 rounded-full font-bold text-sm transition-all ${
                    tier.active
                      ? 'bg-button-gradient text-white shadow-glow btn-premium'
                      : 'border border-border-default text-text-secondary hover:border-border-hover'
                  }`}
                >
                  {tier.bestDeal ? 'Daftar Sekarang' : 'Pelajari Selengkapnya'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
