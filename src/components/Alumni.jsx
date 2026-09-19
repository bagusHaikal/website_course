import { useState, useEffect, useCallback } from 'react';
import { alumniData } from '../data/courses';

function AlumniCard({ alum }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[rgba(30,27,75,0.4)] backdrop-blur-md p-6 flex flex-col justify-between h-full transition-all duration-300 hover:border-brand-accent/30">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={alum.image}
            alt={alum.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-brand-violet/30"
          />
          <div>
            <h4 className="font-bold text-white text-sm">{alum.name}</h4>
            <p className="text-xs text-brand-accent">{alum.program}</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 mt-2">
          <p className="text-xs text-gray-500 mb-1">now working at</p>
          <p className="text-white font-bold">{alum.company}</p>
          <a
            href={alum.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-gray-500 hover:text-brand-accent transition-colors"
            aria-label={`LinkedIn profile of ${alum.name}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

function Alumni() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(4);

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

  const maxIndex = Math.max(0, alumniData.length - perView);

  const next = useCallback(() => {
    setCurrent(prev => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent(prev => Math.max(prev - 1, 0));
  }, []);

  return (
    <section id="alumni" className="py-24 bg-gradient-to-b from-brand-dark to-[#15102C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mt-2 tracking-tight">
            Connect with Our Alumni
          </h2>
          <p className="text-[#D1D5DB] mt-4 leading-[1.6] max-w-2xl mx-auto">
            Mereka telah berhasil berkarir di perusahaan teknologi terkemuka setelah lulus dari Infinite Learning.
          </p>
        </div>

        <div className="relative">
          <div className="">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
            >
              {alumniData.map((alum, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                  style={{ width: `${100 / perView}%` }}
                >
                  <AlumniCard alum={alum} />
                </div>
              ))}
            </div>
          </div>

          {alumniData.length > perView && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                disabled={current === 0}
                className="btn-secondary w-10 h-10 rounded-full flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      current === i ? 'w-6 bg-brand-accent' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={current === maxIndex}
                className="btn-secondary w-10 h-10 rounded-full flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Alumni;
