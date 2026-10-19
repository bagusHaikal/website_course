import { Link } from 'react-router-dom';
import { courses } from '../data';
import { CheckCircle2, BookOpen, ArrowRight } from 'lucide-react';

function CourseCard({ course }) {
  return (
    <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-300 hover:border-brand-accent/30 hover:shadow-glow-hover flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col relative z-10">
        <h3 className="font-display font-bold text-base text-text-primary mb-2 leading-snug tracking-tight line-clamp-3 min-h-12">
          {course.title}
        </h3>

        <p className="text-text-secondary text-xs mb-4 line-clamp-2 leading-[1.6]">{course.desc}</p>

        <div className="flex items-center justify-between text-text-muted text-[10px] font-medium mb-4 border-b border-divider pb-3">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
            {course.category}
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-brand-accent" />
            {course.lessons} lessons
          </div>
        </div>

        <div className="mt-auto flex items-baseline gap-2">
          <span className="text-text-muted line-through text-xs">{course.priceOriginal}</span>
          <span className="text-brand-accent font-bold text-lg">{course.priceDiscount}</span>
        </div>
      </div>
    </div>
  );
}

function BootcampCoursesSection() {
  return (
    <section id="detail-bootcamp" className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary mb-6 tracking-tight">
            Belajar Bareng Mentor & Teman Sefrekuensi
          </h2>
          <p className="text-text-secondary text-base leading-[1.6]">
            Saatnya join Bootcamp! Dapatkan materi eksklusif, sesi live, diskusi interaktif, sampai project nyata
            biar skill kamu langsung terasah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/all-programs" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-text-primary transition-colors border-b border-transparent hover:border-brand-accent pb-1">
            Lihat Semua Program
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BootcampCoursesSection;
