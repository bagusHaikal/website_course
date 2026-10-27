import { useState } from 'react';
import { mentors } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

function MentorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const len = mentors.length;

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const activePos = ((activeIndex % len) + len) % len;

  return (
    <section className="py-24 bg-bg-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Tim Pengajar</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Meet the Mentors
          </h2>
          <p className="text-text-secondary mt-3 text-sm max-w-xl mx-auto">
            Dibimbing langsung oleh mentor-mentor berpengalaman di industri teknologi.
          </p>
        </div>

        {/* 3D Coverflow */}
        <div className="relative w-full max-w-4xl mx-auto h-[320px] sm:h-[280px] flex items-center justify-center" style={{ perspective: '1200px' }}>
          {mentors.map((m, i) => {
            const mod = (((i - activeIndex) % len) + len) % len;
            const dist = mod <= len / 2 ? mod : len - mod;
            const isRight = mod <= len / 2;
            const isActive = dist === 0;
            const isVisible = dist <= 2;

            if (!isVisible) return null;

            const translateX = (isRight ? 1 : -1) * dist * 240;
            const scale = isActive ? 1 : 0.85;
            const rotateY = isActive ? 0 : isRight ? -25 : 25;
            const opacity = isActive ? 1 : 0.5;
            const zIndex = isActive ? 30 : 10 - dist;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`absolute transition-all duration-500 ease-out cursor-pointer w-full max-w-md sm:max-w-lg rounded-3xl border p-5 sm:p-6 flex items-center gap-5 shadow-xl ${
                  isLight ? 'bg-white/90 border-gray-200' : 'bg-[#121024]/90 border-white/10'
                }`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  zIndex: zIndex,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shrink-0 bg-brand-violet/15 border border-border-default">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-text-primary text-lg sm:text-xl mb-1">
                    {m.name}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm font-medium">
                    {m.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            aria-label="Mentor sebelumnya"
            className="w-12 h-12 rounded-full border border-border-default bg-bg-surface flex items-center justify-center text-text-primary hover:border-brand-accent hover:text-brand-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {mentors.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Lihat mentor ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activePos ? 'w-8 bg-brand-accent' : 'w-2 bg-text-muted/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Mentor berikutnya"
            className="w-12 h-12 rounded-full border border-border-default bg-bg-surface flex items-center justify-center text-text-primary hover:border-brand-accent hover:text-brand-accent transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MentorsSection;
