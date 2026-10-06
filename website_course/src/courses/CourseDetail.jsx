import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { courses } from '../data/courses';
import { courseDetails } from '../data/courseDetails';
import CourseCard from '../shared/CourseCard';

const arrowLeftSVG = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m0 0l7 7m-7-7l7-7" /></svg>;

const checkSVG = <svg className="w-3.5 h-3.5 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const chevronSVG = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;

function MetaChip({ label, value }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-default bg-bg-surface text-xs">
      <span className="text-text-muted">{label}</span>
      <span className="text-text-primary font-semibold">{value}</span>
    </div>
  );
}

function CurriculumSection({ detail }) {
  const [openChapters, setOpenChapters] = useState(() => detail.curriculum.map(() => true));

  const toggleChapter = (index) => {
    setOpenChapters((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  const expandAll = () => setOpenChapters(detail.curriculum.map(() => true));
  const collapseAll = () => setOpenChapters(detail.curriculum.map(() => false));

  return (
    <section className="bg-bg-base py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-text-primary tracking-tight">
            Curriculum
          </h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={expandAll}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border-default bg-bg-surface text-xs font-semibold text-text-secondary hover:border-brand-accent/40 hover:text-brand-accent transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              Buka Semua
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border-default bg-bg-surface text-xs font-semibold text-text-secondary hover:border-brand-accent/40 hover:text-brand-accent transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
              Tutup Semua
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
          <div className="rounded-xl border border-border-default bg-bg-surface px-4 py-3 text-center">
            <p className="font-display font-bold text-xl text-text-primary">{detail.curriculumSummary.sections}</p>
            <p className="text-text-muted text-[10px] font-medium uppercase tracking-wider">Sections</p>
          </div>
          <div className="rounded-xl border border-border-default bg-bg-surface px-4 py-3 text-center">
            <p className="font-display font-bold text-xl text-text-primary">{detail.curriculumSummary.lessons}</p>
            <p className="text-text-muted text-[10px] font-medium uppercase tracking-wider">Lessons</p>
          </div>
          <div className="rounded-xl border border-border-default bg-bg-surface px-4 py-3 text-center">
            <p className="font-display font-bold text-xl text-text-primary">{detail.curriculumSummary.duration}</p>
            <p className="text-text-muted text-[10px] font-medium uppercase tracking-wider">Duration</p>
          </div>
        </div>

        <div className="space-y-4">
          {detail.curriculum.map((chapter, ci) => (
            <div key={ci} className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden">
              <button
                type="button"
                onClick={() => toggleChapter(ci)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-bg-base/50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-button-gradient text-white text-xs font-bold flex items-center justify-center">
                    {ci + 1}
                  </span>
                  <span className="font-display font-bold text-sm text-text-primary truncate">
                    Chapter {ci + 1}: {chapter.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[10px] font-semibold text-text-muted bg-bg-base/80 border border-border-default rounded px-2 py-0.5">
                    {chapter.lessons.length} Lesson{chapter.lessons.length !== 1 ? 's' : ''}
                  </span>
                  <span className={`text-text-muted transition-transform duration-300 ${openChapters[ci] ? 'rotate-180' : ''}`}>
                    {chevronSVG}
                  </span>
                </div>
              </button>
              {openChapters[ci] && (
                <div className="px-5 pb-4">
                  {chapter.lessons.length > 0 ? (
                    <ul className="divide-y divide-divider border-t border-divider">
                      {chapter.lessons.map((lesson, li) => (
                        <li key={li} className="flex items-center justify-between gap-4 py-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="text-xs font-bold text-brand-accent w-6 shrink-0">
                              {ci + 1}.{li + 1}
                            </span>
                            <span className="text-sm text-text-secondary truncate">{lesson.title}</span>
                          </div>
                          <span className="text-[10px] font-medium text-text-muted shrink-0">{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-text-muted py-2">Materi segera hadir.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseSidebar({ course, detail }) {
  return (
    <aside className="lg:col-span-1">
      <div className="lg:sticky lg:top-24 space-y-6">
        <div className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden shadow-glow-hover">
          <div className="relative h-52 overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t via-transparent to-transparent from-white/60 dark:from-bg-base"></div>
          </div>
          <div className="p-5">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-text-muted line-through text-sm">{course.priceOriginal}</span>
              <span className="text-brand-accent font-display font-extrabold text-2xl">{course.priceDiscount}</span>
            </div>
            <p className="text-text-muted text-xs mb-3">Pendaftaran segera hadir.</p>
            {/* TODO: ganti href="#" dengan link checkout LMS live */}
            <a
              href="#"
              className="btn-premium bg-button-gradient text-white px-5 py-3 rounded-full font-semibold text-sm shadow-glow inline-flex items-center justify-center gap-2 w-full"
            >
              Daftar Sekarang
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
          </div>
          {detail && (
            <div className="border-t border-divider p-5 grid grid-cols-2 gap-4">
              {detail.facts.map((fact) => (
                <div key={fact.label}>
                  <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-1">{fact.label}</p>
                  <p className="text-xs font-semibold text-text-primary">{fact.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  const detail = courseDetails[slug];

  if (!course) {
    return (
      <div className="min-h-[60vh] bg-bg-base flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p className="font-display font-extrabold text-3xl text-text-primary mb-3">Course Tidak Ditemukan</p>
          <p className="text-text-secondary text-sm mb-6">
            Halaman yang kamu cari tidak tersedia. Mungkin link-nya sudah berubah.
          </p>
          <Link
            to="/belajar-mandiri"
            className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-text-primary transition-colors border-b border-transparent hover:border-brand-accent pb-1"
          >
            {arrowLeftSVG}
            Kembali ke Kelas Mandiri
          </Link>
        </div>
      </div>
    );
  }

  const relatedCourses = courses.filter(
    (c) => c.id !== course.id && c.category === course.category
  );

  return (
    <div className="min-h-screen bg-bg-base text-text-primary antialiased overflow-x-hidden">
      <section className="pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/belajar-mandiri"
            className="inline-flex items-center gap-2 text-text-muted text-xs font-semibold hover:text-brand-accent transition-colors mb-8"
          >
            {arrowLeftSVG}
            Kembali
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary mb-3 leading-tight tracking-tight">
                {course.title}
              </h1>
              {detail && (
                <p className="text-text-secondary text-sm mb-4">by {detail.instructor}</p>
              )}
              <div className="flex flex-wrap items-center gap-2">
                <MetaChip label="Tipe" value={course.type} />
                {detail ? (
                  <>
                    <MetaChip label="Periode" value={detail.meta.date} />
                    <MetaChip label="Lessons" value={detail.meta.lessons} />
                    <MetaChip label="Bahasa" value={detail.meta.language} />
                  </>
                ) : (
                  <MetaChip label="Lessons" value={course.lessons} />
                )}
              </div>
            </div>

            {detail ? (
              <>
                <section className="mb-12">
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-text-primary mb-6 tracking-tight">
                    Overview
                  </h2>
                  <div className="space-y-4">
                    {detail.overview.map((paragraph, i) => (
                      <p key={i} className="text-text-secondary text-sm md:text-base leading-[1.7]">{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-text-primary mb-6 tracking-tight">
                    Apa Saja yang Dipelajari
                  </h2>
                  <ul className="space-y-3">
                    {detail.learnings.map((learning, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5">{checkSVG}</span>
                        <span className="text-text-secondary text-sm md:text-base leading-[1.6]">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            ) : (
              <section className="mb-12">
                <div className="rounded-2xl border border-dashed border-border-default bg-bg-surface p-8 text-center">
                  <p className="font-display font-bold text-lg text-text-primary mb-2">
                    Detail lengkap segera hadir
                  </p>
                  <p className="text-text-secondary text-sm">
                    Halaman detail {course.title} sedang dalam pengembangan.
                    Untuk informasi dan pendaftaran, kunjungi kelas ini di website Infinite Learning.
                  </p>
                </div>
              </section>
            )}
          </div>

          <CourseSidebar course={course} detail={detail} />
        </div>
      </section>

      {detail && <CurriculumSection detail={detail} />}

      {relatedCourses.length > 0 && (
        <section className="py-16 bg-bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Kelas Mandiri</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary mb-6 tracking-tight">
                Courses You Might Be Interested In
              </h2>
            </div>
            <div className={`grid gap-8 ${relatedCourses.length === 1 ? 'grid-cols-1 max-w-xs mx-auto' : relatedCourses.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto'}`}>
              {relatedCourses.map((related) => (
                <CourseCard key={related.id} course={related} showDetails baseSurface />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/belajar-mandiri"
                className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-text-primary transition-colors border-b border-transparent hover:border-brand-accent pb-1"
              >
                Lihat Semua Kelas Mandiri
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default CourseDetail;
