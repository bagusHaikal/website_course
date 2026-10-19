import { Link } from 'react-router-dom';
import { courses, kelasMandiri } from '../data';
import { ArrowRight, CheckCircle2, LayoutGrid, BookOpen } from 'lucide-react';

function CourseCard({ course }) {
  return (
    <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-300 hover:border-brand-accent/30 hover:shadow-glow-hover flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t via-transparent to-transparent from-white/60 dark:from-bg-base"></div>
      </div>

      <div className="p-5 flex-1 flex flex-col relative z-10">
        <h3 className="font-display font-bold text-base text-text-primary mb-2 leading-snug line-clamp-3 min-h-12 tracking-tight">
          {course.title}
        </h3>

        {course.desc ? (
          <p className="text-text-secondary text-xs mb-4 line-clamp-2 leading-[1.6]">{course.desc}</p>
        ) : (
          <div className="mb-4" />
        )}

        <div className="flex items-center justify-between text-text-muted text-[10px] font-medium mb-4 border-b border-divider pb-3">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent" />
            {course.category}
          </div>
          <div className="flex items-center gap-1.5">
            <LayoutGrid className="w-3.5 h-3.5 text-brand-accent" />
            {course.type}
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary">
            <BookOpen className="w-3.5 h-3.5 text-brand-accent" />
            {course.lessons} lessons
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-text-muted line-through text-xs">{course.priceOriginal}</span>
            <span className="text-brand-accent font-bold text-lg">{course.priceDiscount}</span>
          </div>
          <Link
            to={`/courses/${course.slug}`}
            className="btn-premium bg-button-gradient text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-glow inline-flex items-center justify-center gap-2 w-full"
          >
            Lihat Detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function KelasMandiriSection() {
  return (
    <section id="list-course" className="py-24 bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Kelas Mandiri</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary mb-6 tracking-tight">
            {kelasMandiri.title}
          </h2>
          <p className="text-text-secondary text-base leading-[1.6]">{kelasMandiri.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/all-programs"
            className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-text-primary transition-colors border-b border-transparent hover:border-brand-accent pb-1"
          >
            {kelasMandiri.seeAllLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default KelasMandiriSection;
