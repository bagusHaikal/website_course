function CourseCard({ course, showDetails = false, showTag = true }) {
  return (
    <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-all duration-300 hover:border-brand-accent/30 hover:shadow-glow-hover flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {showTag && (
          <div className="absolute top-3 left-3 bg-bg-base/80 backdrop-blur-md text-text-primary text-[10px] font-semibold px-2 py-1 rounded border border-border-default">
            {course.tag}
          </div>
        )}
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

        {showDetails && (
          <a
            href="#"
            className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-border-default text-brand-accent text-xs font-bold hover:bg-button-gradient hover:text-white hover:border-transparent transition-all duration-300"
          >
            Program Details
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
