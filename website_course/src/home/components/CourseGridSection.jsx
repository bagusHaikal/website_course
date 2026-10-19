import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import CourseCard from '../../shared/CourseCard';
import { SearchX, ArrowRight } from 'lucide-react';

function CourseGridSection({ searchQuery = '' }) {
  const hasSearch = searchQuery.length > 0;
  const filtered = hasSearch
    ? courses.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.type && c.type.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : courses;

  return (
    <section id="programs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-text-primary mb-6 tracking-tight">
            Belajar Tanpa Batas,<br />
            Kapan Pun & Dimana Pun
          </h2>
          <p className="text-text-secondary text-lg leading-[1.6]">
            Langganan video pembelajaran di Infinite Learning dan kuasai skill baru dengan cara yang fleksibel, premium, dan menyenangkan.
          </p>
        </div>

        {hasSearch && (
          <div className="mb-8 text-center">
            <p className="text-text-muted text-sm">
              Menampilkan hasil untuk
              <span className="text-brand-accent font-semibold ml-1">"{searchQuery}"</span>
              — ditemukan {filtered.length} program
            </p>
          </div>
        )}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SearchX className="w-12 h-12 text-text-muted mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-text-muted text-lg">Tidak ada program yang cocok dengan pencarianmu.</p>
            <p className="text-text-muted/60 text-sm mt-2">Coba kata kunci lain seperti "data", "excel", "portfolio", atau "english".</p>
          </div>
        )}

        {!hasSearch && (
          <div className="text-center">
            <Link to="/all-programs" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-text-primary transition-colors border-b border-transparent hover:border-brand-accent pb-1">
              Lihat Semua Program
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default CourseGridSection;
