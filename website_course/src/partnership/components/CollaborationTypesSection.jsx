import { collaborationTypes } from '../data';
import { PartnerIcon } from './icons';

function CollaborationTypesSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">Area Kemitraan</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-5">Apa yang Bisa Dikolaborasikan?</h2>
          <p className="text-text-secondary text-base md:text-lg">Dari CSR pendidikan hingga rekrutmen talenta, temukan area kolaborasi yang paling relevan untuk perusahaan Anda.</p>
        </div>

        {/* Mobile: Horizontal scrollable snap carousel; Desktop: Grid */}
        <div 
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-x-visible pb-6 sm:pb-0 px-2 sm:px-0 -mx-4 sm:mx-0 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {collaborationTypes.map((item) => (
            <div 
              key={item.id} 
              className="group relative border border-border-default bg-bg-surface rounded-2xl p-5 sm:p-6 transition-colors duration-300 hover:border-border-hover shrink-0 w-[82vw] sm:w-auto snap-center sm:snap-start flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-center sm:justify-start mb-4 sm:mb-5">
                  <div className="w-12 h-12 rounded-xl bg-button-gradient text-white flex items-center justify-center shadow-glow">
                    <PartnerIcon name={item.icon} className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-text-primary mb-2 text-center sm:text-left">{item.title}</h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed text-center sm:text-left">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollaborationTypesSection;
