import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 'kampus-merdeka',
    tab: 'Kampus Merdeka',
    title: 'Magang Studi Independen Mandiri Batch 10 Infinite Learning!',
    desc: 'ingin mendapatkan pengalaman magang, konversi hingga 20 SKS, dibimbing mentor, mendapatkan sertifikat resmi, dan siap terjun ke dunia kerja.',
    image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/919b2232-0ceb-4499-c13c-113ea327b400/public',
    href: '/program-mandiri',
    titleWeight: 'font-semibold',
  },
  {
    id: 'workshop',
    tab: 'Workshop',
    title: 'Kuasai Skill Baru, Pas Buat Kamu yang Mau Sat Set!',
    desc: 'Ingin belajar spesifik dibidang tertentu atau mencoba dulu sebelum mendalami suatu tanpa harus berkomitmen jangka panjang.',
    image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/299a854a-069b-4146-7cb3-8ebecd0cce00/public',
    href: '/workshop',
    titleWeight: 'font-bold',
  },
  {
    id: 'bootcamp',
    tab: 'Bootcamp',
    title: 'Kuasai Skill Baru, Pas Buat Kamu yang Mau Sat Set!',
    desc: 'sedang mencari pekerjaan atau opportunity baru dan ingin mendalami atau upskill di bidang tertentu dengan pembelajaran dan bimbingan yang intensive.',
    image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/64243dca-6975-4f19-8152-24260fb38700/public',
    href: '/bootcamp',
    titleWeight: 'font-bold',
  },
  {
    id: 'belajar-mandiri',
    tab: 'Belajar Mandiri',
    title: 'Belajar Mandiri? Kami Punya Solusinya!',
    desc: 'lebih senang belajar mandiri, mengikuti pace dan timeline diri sendiri.',
    image: 'https://imagedelivery.net/qdLiW86MyPLsWMif2v42gg/d4efac1d-4618-46a4-cfb3-fecce046f000/public',
    href: '/belajar-mandiri',
    titleWeight: 'font-bold',
  },
];

const arrowIcon = (
  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 448 512" aria-hidden="true">
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4-9.4-24.6-9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
  </svg>
);

function ProgramPanel({ program }) {
  return (
    <div className="flex flex-col md:flex-row md:items-stretch w-full md:mt-8 md:mb-8 md:pr-12">
      {/* Image column */}
      <div className="flex items-center justify-center w-full md:w-1/2 py-6 md:py-0">
        <img
          src={program.image}
          alt={program.title}
          className="w-[60%] max-w-full aspect-[4/3] object-contain"
        />
      </div>

      {/* Text column */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-0 pb-8 md:pb-0 md:px-8">
        <h3 className={`font-display text-text-primary text-xl md:text-2xl leading-[1.3] tracking-tight ${program.titleWeight}`}>
          {program.title}
        </h3>
        <p className="text-text-secondary text-base md:text-lg leading-relaxed mt-2">
          <span className="font-semibold text-text-primary">Cocok untuk kamu yang : </span>
          {program.desc}
        </p>
        <Link
          to={program.href}
          className="mt-6 btn-premium bg-button-gradient text-white shadow-glow rounded-[12px] px-6 py-3 font-semibold text-base md:text-lg leading-[1.6] capitalize inline-flex flex-row-reverse items-center gap-4 transition-all duration-200 ease-out"
        >
          <span>Pelajari Selengkapnya</span>
          {arrowIcon}
        </Link>
      </div>
    </div>
  );
}

function ProgramSliderSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  const focusTab = (index) => {
    const next = (index + programs.length) % programs.length;
    setActiveTab(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        focusTab(index - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusTab(0);
        break;
      case 'End':
        e.preventDefault();
        focusTab(programs.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-24 relative bg-bg-base overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + subtitle */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-[2rem] md:text-5xl text-text-primary tracking-[-0.03em] mb-4">
            Temukan Program yang Sesuai<br className="hidden md:block" /> dengan Kebutuhanmu
          </h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Pilih jalur belajar yang paling cocok &mdash; dari intensif bootcamp hingga fleksibel mandiri &mdash; dan mulai wujudkan potensimu hari ini.
          </p>
        </div>
      </div>

      {/* Full-bleed tabs panel — follows theme background */}
      <div className="relative bg-bg-section border-y border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="program-tabs">
            {/* Tab headings */}
            <div className="program-tabs__heading" role="tablist" aria-label="Program">
              {programs.map((program, index) => {
                const isActive = index === activeTab;
                return (
                  <button
                    key={program.id}
                    ref={(el) => { tabRefs.current[index] = el; }}
                    id={`program-tab-${program.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`program-panel-${program.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTab(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    style={{ '--tab-order': index * 2 }}
                    className={`program-tabs__title ${
                      isActive
                        ? 'program-tabs__title--active text-brand-accent'
                        : 'text-text-secondary hover:bg-bg-subtle hover:text-text-primary'
                    }`}
                  >
                    {program.tab}
                  </button>
                );
              })}
            </div>

            {/* Tab contents — mobile: accordion under each tab; desktop: stacked grid so height stays constant */}
            <div className="program-tabs__content">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  id={`program-panel-${program.id}`}
                  role="tabpanel"
                  aria-labelledby={`program-tab-${program.id}`}
                  data-active={index === activeTab}
                  aria-hidden={index !== activeTab}
                  style={{ '--tab-order': index * 2 + 1 }}
                  className="program-tabs__panel"
                >
                  <ProgramPanel program={program} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramSliderSection;
