import { useState, useEffect, useRef } from 'react';

const programs = [
  { title: 'Kampus Merdeka', desc: 'Cocok untuk kamu yang ingin magang, konversi SKS, dibimbing mentor, dapat sertifikat resmi, dan siap terjun ke dunia kerja.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>), image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/919b2232-0ceb-4499-c13c-113ea327b400/public', href: '/program/kampus-merdeka' },
  { title: 'Workshop', tagline: 'Kuasai Skill Baru, Pas Buat Kamu yang Mau Sat Set!', desc: 'Ingin belajar spesifik di bidang tertentu atau mencoba dulu sebelum mendalami suatu tanpa harus berkomitmen jangka panjang.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>), image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/299a854a-069b-4146-7cb3-8ebecd0cce00/public', href: '/program/workshop' },
  { title: 'Bootcamp', tagline: 'Kuasai Skill Baru, Pas Buat Kamu yang Mau Sat Set!', desc: 'Sedang mencari pekerjaan atau opportunity baru dan ingin mendalami atau upskill di bidang tertentu dengan pembelajaran dan bimbingan yang intensive.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>), image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/64243dca-6975-4f19-8152-24260fb38700/public', href: '/program/bootcamp' },
  { title: 'Belajar Mandiri', tagline: 'Belajar Mandiri? Kami Punya Solusinya!', desc: 'Lebih senang belajar mandiri tanpa tekanan, mengikuti pace dan timeline diri sendiri.', icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/d4efac1d-4618-46a4-cfb3-fecce046f000/public', href: '/program/belajar-mandiri' }
];

function ProgramCard({ program }) {
  return (
    <div className="rounded-2xl border border-border-default bg-bg-surface backdrop-blur-md flex w-full h-85 shrink-0 transition-all duration-300 hover:border-brand-accent/30 overflow-hidden">
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
        <a href={program.href} className="btn-premium bg-button-gradient text-white px-5 py-2.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 self-start">
          Pelajari Selanjutnya
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </a>
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

  return (
    <section className="py-20 relative bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">Temukan Program yang Sesuai dengan Kebutuhanmu</h2>
        </div>
        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border-default flex items-center justify-center text-text-primary hover:bg-bg-subtle transition-colors" aria-label="Previous slide">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-border-default flex items-center justify-center text-text-primary hover:bg-bg-subtle transition-colors" aria-label="Next slide">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className="overflow-hidden rounded-2xl">
            <div ref={trackRef} className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slides.map((program, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramSliderSection;
