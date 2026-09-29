import { useState } from 'react';
import { courses } from '../../data/courses';
import CourseCard from '../../shared/CourseCard';

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Technical/IT', value: 'Technical' },
  { label: 'Non Technical', value: 'Non Technical' },
];

function AllProgramsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <section id="all-programs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary mb-4 tracking-tight">
              Semua Program Kami
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-[1.6]">
              Jelajahi seluruh program berbasis industri Infinite Learning, dari kelas mandiri, bootcamp, hingga workshop. Pilih sesuai tujuan kariermu.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveCategory(tab.value)}
                  className={isActive
                    ? 'px-4 py-2 rounded-full text-xs font-bold text-white bg-button-gradient shadow-glow transition-all duration-300'
                    : 'px-4 py-2 rounded-full text-xs font-semibold text-text-secondary border border-border-default hover:border-brand-accent/50 hover:text-text-primary transition-all duration-300 bg-bg-surface'}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} showDetails showTag={false} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">Belum ada program di kategori ini.</p>
            <p className="text-text-muted/60 text-sm mt-2">Sedang kami siapkan, pantau terus ya.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllProgramsSection;
