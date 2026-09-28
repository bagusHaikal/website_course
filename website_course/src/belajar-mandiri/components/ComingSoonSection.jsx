import { comingSoon, waLink } from '../data';

const waSVG = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.664l1.497 2.99a1 1 0 01-.532 1.33l-2.121 1.061a10.01 10.01 0 005.572 5.572l1.061-2.121a1 1 0 011.33-.532l2.99 1.497A1 1 0 0121 18.72V21a2 2 0 01-2 2h-1.28a1 1 0 01-.948-.664l-1.497-2.99a1 1 0 01-1.33-.532l-2.121 1.061A10.01 10.01 0 014 18.604V5z" /></svg>;

function ComingSoonSection() {
  return (
    <section className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {comingSoon.map((item) => (
            <div key={item.id} className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-300 hover:border-brand-accent/30 hover:shadow-glow-hover flex flex-col">
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Coming Soon</span>
                <h3 className="font-display font-bold text-xl text-text-primary mb-3 tracking-tight">{item.title}</h3>
                <p className="text-text-secondary text-sm mb-2 leading-[1.6]">{item.desc}</p>
                <p className="text-text-muted text-xs mb-6 leading-[1.6]">{item.descDetail}</p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium bg-button-gradient text-white px-6 py-3 rounded-full font-semibold text-sm shadow-glow inline-flex items-center justify-center gap-2 self-start mt-auto"
                >
                  {item.cta}
                  {waSVG}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComingSoonSection;
