import { courses, kelasMandiri } from '../data';

const arrowSVG = <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
const checkSVG = <svg className="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const typeSVG = <svg className="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
const lessonsSVG = <svg className="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;

function CourseCard({ course }) {
  return (
    <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-300 hover:border-brand-accent/30 hover:shadow-glow-hover flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-bg-base/80 backdrop-blur-md text-text-primary text-[10px] font-semibold px-2 py-1 rounded border border-border-default">
          {course.tag}
        </div>
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
            {checkSVG}
            {course.category}
          </div>
          <div className="flex items-center gap-1.5">
            {typeSVG}
            {course.type}
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary">
            {lessonsSVG}
            {course.lessons} lessons
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-text-muted line-through text-xs">{course.priceOriginal}</span>
            <span className="text-brand-accent font-bold text-lg">{course.priceDiscount}</span>
          </div>
          <a
            href="#"
            className="btn-premium bg-button-gradient text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-glow inline-flex items-center justify-center gap-2 w-full"
          >
            Lihat Detail
            {arrowSVG}
          </a>
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
          <a
            href="#"
            className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-text-primary transition-colors border-b border-transparent hover:border-brand-accent pb-1"
          >
            {kelasMandiri.seeAllLabel}
            {arrowSVG}
          </a>
        </div>
      </div>
    </section>
  );
}

export default KelasMandiriSection;
