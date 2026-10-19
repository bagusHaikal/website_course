import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../data';
import { LinkedInIcon } from '../../hire-graduates/components/icons';
import aiaLogo from '../../assets/AIA_Logo.jpg';
import bercaLogo from '../../assets/Logo_PT-Berca-Hardayaperkasa.png';
import elabramLogo from '../../assets/Elabram-Group.png';
import kartinisLogo from '../../assets/KARTINIS-LABEL.png';
import msGlowLogo from '../../assets/MS Glow.png';
import epsonLogo from '../../assets/epson_logo.png';
import constellarLogo from '../../assets/Constellar.png';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

const companyColors = {
  'AIA Singapore': 'from-blue-500 to-cyan-500',
  'PT Berca Hardayaperkasa': 'from-emerald-500 to-teal-500',
  'PT. Berca Hardayaperkasa': 'from-emerald-500 to-teal-500',
  'Elabram Group': 'from-orange-500 to-amber-500',
  "Kartini's Label": 'from-pink-500 to-rose-500',
  'MS Glow Beauty': 'from-purple-500 to-violet-500',
  'Seiko Epson Corporation': 'from-sky-500 to-blue-500',
  'Constellar': 'from-indigo-500 to-purple-500',
};

const companyLogos = {
  'AIA Singapore': aiaLogo,
  'PT Berca Hardayaperkasa': bercaLogo,
  'PT. Berca Hardayaperkasa': bercaLogo,
  'Elabram Group': elabramLogo,
  "Kartini's Label": kartinisLogo,
  'MS Glow Beauty': msGlowLogo,
  'Seiko Epson Corporation': epsonLogo,
  'Constellar': constellarLogo,
};

const companyBadgeColors = {
  'AIA Singapore': { backgroundColor: '#C40F3C', borderColor: 'rgba(255,255,255,0.25)' },
  'PT Berca Hardayaperkasa': { backgroundColor: '#CC252D', borderColor: 'rgba(255,255,255,0.25)' },
  'PT. Berca Hardayaperkasa': { backgroundColor: '#CC252D', borderColor: 'rgba(255,255,255,0.25)' },
  'Elabram Group': { backgroundColor: '#252460', borderColor: 'rgba(255,255,255,0.25)' },
  "Kartini's Label": { backgroundColor: '#000000', borderColor: 'rgba(255,255,255,0.25)' },
  'MS Glow Beauty': { backgroundColor: '#5E5F5A', borderColor: 'rgba(255,255,255,0.25)' },
  'Seiko Epson Corporation': { backgroundColor: '#172584', borderColor: 'rgba(255,255,255,0.25)' },
  'Constellar': { backgroundColor: '#7F2A90', borderColor: 'rgba(255,255,255,0.25)' },
};

function CompanyBadge({ company }) {
  const logo = companyLogos[company];
  const brandStyle = companyBadgeColors[company];
  const color = companyColors[company] || 'from-brand-violet to-brand-purple';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
        brandStyle ? 'border' : `bg-gradient-to-r ${color}`
      } text-white text-[11px] font-semibold tracking-wide`}
      style={brandStyle}
    >
      {logo && (
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-4 h-4 rounded-full object-contain bg-white shrink-0"
        />
      )}
      {company}
    </span>
  );
}

function useImageTint(src) {
  const [tint, setTint] = useState(null);
  useEffect(() => {
    let alive = true;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      if (!alive) return;
      const size = 24;
      const c = document.createElement('canvas');
      c.width = c.height = size;
      const ctx = c.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, size, size);
      let d;
      try { d = ctx.getImageData(0, 0, size, size).data; } catch { return; }
      let r = 0, g = 0, b = 0, n = 0;
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const cx = Math.abs(x - (size - 1) / 2) / (size / 2);
          const cy = Math.abs(y - (size - 1) / 2) / (size / 2);
          const w = 1 - Math.max(cx, cy) * 0.55;
          const i = (y * size + x) * 4;
          r += d[i] * w; g += d[i + 1] * w; b += d[i + 2] * w; n += w;
        }
      }
      if (n > 0) setTint(`rgb(${Math.round(r / n)}, ${Math.round(g / n)}, ${Math.round(b / n)})`);
    };
    img.src = src;
    return () => { alive = false; };
  }, [src]);
  return tint;
}

function TestimonialCard({ person }) {
  const tint = useImageTint(person.image);
  return (
    <div className="group relative flex flex-col items-center p-3 rounded-2xl border border-border-default bg-bg-surface transition-all duration-300 hover:border-border-hover hover:shadow-glow-hover hover:-translate-y-1 text-center min-h-[260px]">
      <div className="relative mb-2">
        <div
          className={`absolute inset-0 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300 ${tint ? '' : 'bg-button-gradient'}`}
          style={tint ? { backgroundColor: tint } : undefined}
        ></div>
        <img
          src={person.image}
          alt={person.name}
          className="relative w-20 h-20 rounded-full object-cover border-[3px] border-bg-section shadow-md"
        />
        <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-brand-violet/90 flex items-center justify-center border-2 border-bg-section opacity-90" title="Verified Hire">
          <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
        </div>
      </div>

      <h3 className="font-display font-bold text-text-primary text-base mb-1">{person.name}</h3>
      <p className="text-xs text-brand-accent font-medium mb-2">{person.program}</p>

      <div className="mt-auto w-full flex flex-col items-center gap-2">
        <CompanyBadge company={person.company} />
        {person.linkedin ? (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-default text-xs font-semibold text-text-muted hover:text-brand-accent hover:border-border-hover transition-all duration-200"
            aria-label={`LinkedIn profile of ${person.name}`}
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-text-muted opacity-50">
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </span>
        )}
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 768) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  const next = useCallback(() => {
    setCurrent(prev => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent(prev => Math.max(prev - 1, 0));
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Testimonials</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Suara Nyata dari Alumni Kami
          </h2>
          <p className="text-text-secondary text-base leading-[1.6] mt-4">
            Mereka telah merasakan manfaat bootcamp Infinite Learning dan kini berkarir di berbagai perusahaan terkemuka.
          </p>
        </div>

        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
          >
            {testimonials.map((person) => (
              <div
                key={person.name}
                className="px-2 shrink-0"
                style={{ width: `${100 / perView}%` }}
              >
                <TestimonialCard person={person} />
              </div>
            ))}
          </div>

          {testimonials.length > perView && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                disabled={current === 0}
                className="btn-secondary w-10 h-10 rounded-full flex items-center justify-center text-text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      current === i ? 'w-6 bg-brand-accent' : 'bg-border-default hover:bg-brand-accent/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={current === maxIndex}
                className="btn-secondary w-10 h-10 rounded-full flex items-center justify-center text-text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
