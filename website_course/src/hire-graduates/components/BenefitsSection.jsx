import { benefits } from '../data';
import { LocalIcon } from './icons';

function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">Nilai Lebih</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight">Keuntungan dari Kolaborasi Ini</h2>
        </div>
        <div className="space-y-0 divide-y divide-divider">
          {benefits.map((b, i) => (
            <div key={b.id} className={`grid grid-cols-[auto_1fr] gap-6 py-10 first:pt-0 last:pb-0 first:border-t-0 last:border-b-0 border-t border-divider transition-all duration-200 hover:bg-bg-subtle -mx-4 px-4 rounded-xl`}>
              <span className="font-display font-extrabold text-5xl md:text-6xl text-brand-violet/20 select-none leading-none">{String(i + 1).padStart(2, '0')}</span>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-violet/15 text-brand-accent shrink-0 flex items-center justify-center mt-1">
                  <LocalIcon name={b.id === 'profiles' ? 'badge' : b.id === 'mentorship' ? 'briefcase' : 'layers'} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-primary text-lg md:text-xl mb-2">{b.title}</h3>
                  <p className="text-text-secondary text-base leading-relaxed">{b.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
