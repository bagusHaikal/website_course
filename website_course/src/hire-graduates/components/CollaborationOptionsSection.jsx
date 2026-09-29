import { collabOptions } from '../data';
import { LocalIcon } from './icons';

function CollabOptionCard({ item, large }) {
  return (
    <div className={`group border border-border-default bg-bg-surface rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-hover hover:shadow-glow-hover ${large ? 'md:col-span-2' : ''}`}>
      <div className="flex items-start gap-5">
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-button-gradient text-white flex items-center justify-center shadow-glow">
          <LocalIcon name={item.icon} className="w-7 h-7" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-text-primary mb-2">{item.title}</h3>
          <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function CollaborationOptionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">Forma Kolaborasi</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-5">Apa yang Bisa Dikolaborasikan?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {collabOptions.map((opt, i) => (
            <CollabOptionCard key={opt.id} item={opt} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollaborationOptionsSection;
