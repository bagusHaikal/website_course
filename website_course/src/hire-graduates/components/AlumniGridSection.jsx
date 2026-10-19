import { useEffect, useState } from 'react';
import { alumniHires } from '../data';
import { LinkedInIcon } from './icons';

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

const companyColors = {
  'AIA Singapore': 'from-blue-500 to-cyan-500',
  'PT Berca Hardayaperkasa': 'from-emerald-500 to-teal-500',
  'Elabram Group': 'from-orange-500 to-amber-500',
  "Kartini's Label": 'from-pink-500 to-rose-500',
  'MS Glow Beauty': 'from-purple-500 to-violet-500',
  'Seiko Epson Corporation': 'from-sky-500 to-blue-500',
  'Constellar': 'from-indigo-500 to-purple-500',
};

function CompanyBadge({ company }) {
  const color = companyColors[company] || 'from-brand-violet to-brand-purple';
  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r ${color} bg-opacity-15 text-white text-[11px] font-semibold tracking-wide`}>
      {company}
    </span>
  );
}

function AlumniCard({ alum }) {
  const tint = useImageTint(alum.image);
  return (
    <div className="group relative flex flex-col items-center p-3 rounded-2xl border border-border-default bg-bg-surface transition-all duration-300 hover:border-border-hover hover:shadow-glow-hover hover:-translate-y-1 text-center min-h-[260px]">
      {/* Avatar ring */}
      <div className="relative mb-2">
        <div
          className={`absolute inset-0 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-opacity duration-300 ${tint ? '' : 'bg-button-gradient'}`}
          style={tint ? { backgroundColor: tint } : undefined}
        ></div>
        <img
          src={alum.image}
          alt={alum.name}
          className="relative w-20 h-20 rounded-full object-cover border-[3px] border-bg-section shadow-md"
        />
        <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-brand-violet/90 flex items-center justify-center border-2 border-bg-surface opacity-90" title="Verified Hire">
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
        </div>
      </div>

      <h3 className="font-display font-bold text-text-primary text-base mb-1">{alum.name}</h3>
      <p className="text-xs text-brand-accent font-medium mb-2">{alum.program}</p>

      <div className="mt-auto w-full">
        <CompanyBadge company={alum.company} />
        <div className="mt-4 flex justify-center">
          <a
            href={alum.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-default text-xs font-semibold text-text-muted hover:text-brand-accent hover:border-border-hover transition-all duration-200"
            aria-label={`LinkedIn profile of ${alum.name}`}
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function AlumniGridSection() {
  return (
    <section className="py-20 lg:py-28 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-violet/15 text-brand-accent text-xs font-bold uppercase tracking-wider mb-5">Jejak Karir</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight mb-5">Talent Infinite Learning Sudah Diserap oleh</h2>
          <p className="text-text-secondary text-base md:text-lg">Lulusan program kami telah berkarir di berbagai perusahaan terkemuka di Indonesia dan Asia Tenggara.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {alumniHires.map((a) => (<AlumniCard key={a.id} alum={a} />))}
        </div>
      </div>
    </section>
  );
}

export default AlumniGridSection;
