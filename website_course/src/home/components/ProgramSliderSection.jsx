import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const programs = [
  { title: 'Kampus Merdeka', desc: 'Cocok untuk kamu yang ingin magang, konversi SKS, dibimbing mentor, dapat sertifikat resmi, dan siap terjun ke dunia kerja.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>), image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/919b2232-0ceb-4499-c13c-113ea327b400/public', href: '/program-mandiri' },
  { title: 'Workshop', tagline: 'Kuasai Skill Baru, Pas Buat Kamu yang Mau Sat Set!', desc: 'Ingin belajar spesifik di bidang tertentu atau mencoba dulu sebelum mendalami suatu tanpa harus berkomitmen jangka panjang.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>), image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/299a854a-069b-4146-7cb3-8ebecd0cce00/public', href: '/workshop' },
  { title: 'Bootcamp', tagline: 'Kuasai Skill Baru, Pas Buat Kamu yang Mau Sat Set!', desc: 'Sedang mencari pekerjaan atau opportunity baru dan ingin mendalami atau upskill di bidang tertentu dengan pembelajaran dan bimbingan yang intensive.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>), image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/64243dca-6975-4f19-8152-24260fb38700/public', href: '/bootcamp' },
  { title: 'Belajar Mandiri', tagline: 'Belajar Mandiri? Kami Punya Solusinya!', desc: 'Lebih senang belajar mandiri tanpa tekanan, mengikuti pace dan timeline diri sendiri.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/d4efac1d-4618-46a4-cfb3-fecce046f000/public', href: '/belajar-mandiri' }
];

const navIcons = {
  prev: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>,
  next: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
};

function ProgramCard({ program }) {
  return (
    <div className="rounded-2xl border border-border-default bg-bg-surface flex w-full h-85 shrink-0 transition-all duration-300 hover:border-brand-accent/30 hover:shadow-glow-hover hover:-translate-y-1 overflow-hidden relative">
      <div className="w-[45%] h-full shrink-0 relative bg-bg-section/50">
        <img src={program.image} alt={program.title} className="w-full h-full object-contain p-6" />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-semibold text-brand-accent mb-1 block uppercase tracking-wider">{program.tag}</span>
          <h3 className="font-display font-bold text-xl text-text-primary mb-1 tracking-tight">{program.title}</h3>
          {program.tagline && (<p className="text-sm font-medium text-brand-light mb-2">{program.tagline}</p>)}
          <p className="text-text-secondary text-sm leading-[1.6] line-clamp-3">{program.desc}</p>
        </div>
        <Link to={program.href} className="btn-premium bg-button-gradient text-white px-5 py-2.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 self-start">
          Pelajari Selanjutnya
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </Link>
      </div>
    </div>
  );
}

function ProgramSliderSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const total = programs.length;
  const slides = [programs[total - 1], ...programs, programs[0]];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setCurrent(prev => prev + 1), 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (current === 0) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(-${total * 100}%)`;
        }
        setCurrent(total);
      }, 50);
    } else if (current === total + 1) {
      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = 'translateX(-100%)';
        }
        setCurrent(1);
      }, 50);
    }
  }, [current, total]);

  const next = () => {
    if (current === slides.length - 1) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = 'translateX(-100%)';
      setIsPaused(true); setCurrent(1); setTimeout(() => setIsPaused(false), 50);
    } else { setIsPaused(true); setCurrent(prev => prev + 1); setTimeout(() => setIsPaused(false), 500); }
  };
  const prev = () => {
    if (current === 0) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${total * 100}%)`;
      setIsPaused(true); setCurrent(total); setTimeout(() => setIsPaused(false), 50);
    } else { setIsPaused(true); setCurrent(prev => prev - 1); setTimeout(() => setIsPaused(false), 500); }
  };

  // Show only real programs for dots (ignore cloned slides)
  const visibleIndices = Array.from({ length: total }, (_, i) => i + 1);
  const dotIndex = visibleIndices.indexOf(current);

  return (
    <section className="py-24 relative bg-bg-base overflow-hidden">
      {/* Subtle glow blob decoration - left side */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-purple/8 blur-3xl pointer-events-none" aria-hidden="true" />
      {/* Subtle glow blob decoration - right side */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-violet/6 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with eyebrow + subtitle */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-accent" style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)', borderColor: 'rgba(124, 58, 237, 0.2)' }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            Program Kami
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight mb-4">
            Temukan Program yang Sesuai<br className="hidden md:block" /> dengan Kebutuhanmu
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Pilih jalur belajar yang paling cocok \u2014 dari intensif bootcamp hingga fleksibel mandiri \u2014 dan mulai wujudkan potensimu hari ini.
          </p>
        </div>

        {/* Slider */}
        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border-default bg-bg-surface/80 flex items-center justify-center text-text-primary hover:border-brand-accent/40 hover:text-brand-accent hover:bg-bg-subtle transition-all duration-200"
            style={{ boxShadow: 'var(--shadow-glass)' }}
            aria-label="Previous slide"
          >
            {navIcons.prev}
          </button>
          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border-default bg-bg-surface/80 flex items-center justify-center text-text-primary hover:border-brand-accent/40 hover:text-brand-accent hover:bg-bg-subtle transition-all duration-200"
            style={{ boxShadow: 'var(--shadow-glass)' }}
            aria-label="Next slide"
          >
            {navIcons.next}
          </button>

          {/* Slider track */}
          <div className="overflow-hidden rounded-2xl">
            <div ref={trackRef} className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slides.map((program, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Program slides">
            {visibleIndices.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsPaused(true); setCurrent(i + 1); setTimeout(() => setIsPaused(false), 500); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === dotIndex ? 'w-8 bg-brand-violet' : 'w-2 bg-border-default hover:bg-brand-accent/40'}`}
                role="tab"
                aria-selected={i === dotIndex}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramSliderSection;
