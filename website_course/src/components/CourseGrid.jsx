import { courses } from '../data/courses';

function CourseCard({ course }) {
  return (
    <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-300 hover:border-brand-accent/30 hover:shadow-glow-hover">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-bg-base/80 backdrop-blur-md text-text-primary text-[10px] font-semibold px-2 py-1 rounded border border-border-default">
          {course.tag}
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-bg-base via-transparent to-transparent"></div>
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
            <svg className="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.category}
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            {course.type}
          </div>
          <div className="flex items-center gap-1.5 text-text-secondary">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
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

function CourseGrid({ searchQuery = '' }) {
  const hasSearch = searchQuery.length > 0;
  const filtered = hasSearch
    ? courses.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.type && c.type.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : courses;

  return (
    <section id="programs" className="py-24 relative bg-bg-base">
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
            <svg className="w-12 h-12 text-text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-text-muted text-lg">Tidak ada program yang cocok dengan pencarianmu.</p>
            <p className="text-text-muted/60 text-sm mt-2">Coba kata kunci lain seperti "data", "excel", "portfolio", atau "english".</p>
          </div>
        )}

        {!hasSearch && (
          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-text-primary transition-colors border-b border-transparent hover:border-brand-accent pb-1">
              Lihat Semua Program
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CourseGrid;
