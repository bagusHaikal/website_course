import { comingSoon, waLink } from '../data';
import { MessageCircle } from 'lucide-react';

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
                  <MessageCircle className="w-4 h-4" />
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
