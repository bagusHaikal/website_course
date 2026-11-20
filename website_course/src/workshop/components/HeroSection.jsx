import { hero } from '../data';
<<<<<<< HEAD
import { Check, ArrowRight, Clock, CalendarClock } from 'lucide-react';
=======
import { Check } from 'lucide-react';
import ProgramCta from '../../shared/ProgramCta';
>>>>>>> 7ec4cb1dbb1f1cd3f65165fefe05983f598d54de

function HeroSection({ isLight }) {
  return (
    <section className={`relative pt-16 pb-20 lg:pt-20 lg:pb-28 overflow-hidden ${isLight ? 'bg-hero-gradient-light' : 'bg-hero-gradient'}`}>
      <div className="mesh-bg">
        <div className="blob bg-brand-purple w-[600px] h-[600px] rounded-full -top-24 -right-24 opacity-20"></div>
        <div className="blob bg-brand-violet w-[500px] h-[500px] rounded-full -bottom-24 -left-24 opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl animate-fade-slide-up text-center lg:text-left">
            <h1 className="font-display font-extrabold text-[1.65rem] leading-[1.15] min-[400px]:text-3xl min-[400px]:leading-[1.2] sm:text-4xl lg:text-5xl mb-6 tracking-tight text-text-primary">
              {hero.titlePre}{' '}
              <span className={isLight ? 'text-gradient-dark' : 'text-gradient-gold'}>{hero.titleHighlight}</span>
            </h1>

            <p className="text-text-secondary text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-0 lg:border-l-2 lg:border-brand-violet lg:pl-5">
              {hero.subtitle}
            </p>

            {/* Mobile: card 2 kolom */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-8 lg:hidden">
              <div className="rounded-2xl border border-border-default bg-bg-surface p-3.5 text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock className="w-4 h-4 text-brand-accent shrink-0" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Durasi Program</span>
                </div>
                <p className="font-display font-extrabold text-base text-text-primary whitespace-nowrap">{hero.duration}</p>
              </div>
              <div className="rounded-2xl border border-border-default bg-bg-surface p-3.5 text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <CalendarClock className="w-4 h-4 text-brand-accent shrink-0" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Jadwal Sesi</span>
                </div>
                <p className="font-display font-extrabold text-base text-text-primary whitespace-nowrap">{hero.time}</p>
              </div>
            </div>

            {/* Desktop: layout asli */}
            <div className="hidden lg:flex items-center justify-start gap-10 mb-8">
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">{hero.duration}</div>
                <p className="text-xs text-text-muted mt-1">Durasi Program</p>
              </div>
              <div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-text-primary">{hero.time}</div>
                <p className="text-xs text-text-muted mt-1">Jadwal Sesi</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8 max-w-md mx-auto lg:mx-0 text-left">
              {hero.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <ProgramCta program="workshop" label={hero.ctaRegister} className="px-8 py-4 text-base w-full sm:w-auto" />
              <div className="flex items-center gap-3">
                <span className="text-xs text-text-muted hidden sm:block">atau</span>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="Konsultasi belum tersedia"
                  className="border border-border-default text-text-muted px-6 py-4 rounded-full font-semibold text-sm cursor-not-allowed bg-bg-subtle"
                >
                  {hero.ctaConsult}
                </button>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-slide-up" style={{ animationDelay: '150ms' }}>
            <img
              src={hero.image}
              alt="Workshop Data Science"
              width={679}
              height={396}
              className="w-full h-auto object-cover rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-brand-violet/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
