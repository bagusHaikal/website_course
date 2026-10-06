import { tiers } from '../data';

function PricingSection() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Investasi</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Daftar Harga Program
          </h2>
          <p className="text-text-secondary mt-3 text-sm">Harga normal Rp 6.500.000. Ambil Early Bird sekarang sebelum kehabisan!</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden border transition-all duration-300 ${
                tier.bestDeal
                  ? 'scale-105 shadow-glow border-brand-accent/40 bg-bg-surface z-10'
                  : tier.soldOut
                  ? 'opacity-60 grayscale border-border-default bg-bg-surface'
                  : 'border-border-default bg-bg-surface'
              }`}
            >
              {tier.bestDeal && (
                <div className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg z-20">
                  BEST DEAL
                </div>
              )}
              {tier.soldOut && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <span className="bg-red-600/90 text-white font-bold text-sm px-5 py-2 rounded-full transform -rotate-12 border-2 border-white/20 shadow-lg">
                    SOLD OUT
                  </span>
                </div>
              )}
              <div className={`p-7 ${tier.bestDeal ? 'pt-10' : ''}`}>
                <h3 className={`font-display font-bold text-xl mb-1 ${tier.active ? 'text-text-primary' : 'text-text-muted'}`}>
                  {tier.label}
                </h3>
                <p className="text-xs text-text-muted mb-5">{tier.date}</p>
                <div className="mb-6">
                  <span className={`line-through text-xs block ${tier.soldOut ? 'text-text-muted/50' : 'text-text-muted'}`}>
                    {tier.original}
                  </span>
                  <span className={`font-extrabold text-3xl ${tier.active ? 'text-text-primary' : 'text-text-muted'}`}>
                    {tier.price}
                  </span>
                </div>
                <a
                  href={tier.active ? 'https://s.id/Pre-RegistrationBatch10IL3' : '#'}
                  target={tier.active ? '_blank' : undefined}
                  rel={tier.active ? 'noopener noreferrer' : undefined}
                  className={`w-full block text-center py-3 rounded-full font-bold text-sm transition-all ${
                    tier.active
                      ? 'bg-button-gradient text-white shadow-glow btn-premium'
                      : 'bg-gray-800 text-text-muted cursor-not-allowed border border-gray-700'
                  }`}
                >
                  {tier.soldOut ? 'Habis Terjual' : 'Daftar Sekarang'}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-xs text-text-muted">Timeline Program: <span className="text-text-secondary font-semibold">Februari – Juni 2026</span></p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
