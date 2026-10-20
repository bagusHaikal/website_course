import { Link } from 'react-router-dom';
import { courses } from '../data';
import { ArrowRight } from 'lucide-react';
import CourseCard from '../../shared/CourseCard';

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
            <CourseCard key={course.id} course={course} showDetails={true} />
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
