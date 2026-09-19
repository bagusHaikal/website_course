const features = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    ),
    title: 'Membangun Portfolio',
    desc: 'Kerjakan capstone project nyata yang bisa langsung kamu jadikan portofolio untuk membangun karir mu.'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    title: 'Work Based Learning',
    desc: 'Implementasikan teori melalui praktik langsung layaknya bekerja di perusahaan teknologi.'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    title: 'Dedicated Mentor',
    desc: 'Full-time dedicated mentor membimbing learning journey kamu. Review tugas & konsultasi karir.'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
    title: 'Modul Relevan Industri',
    desc: 'Kurikulum didesign sesuai kebutuhan industri terkini untuk memastikan skill yang relevan.'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Pembelajaran Flexible',
    desc: 'Live class bersama mentor atau belajar mandiri asynchronous. Sesuaikan dengan jadwalmu.'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    title: 'Career Support',
    desc: 'Bimbingan pembuatan CV, simulasi interview, dan akses ke jaringan hiring partner kami.'
  }
];

function Features() {
  return (
    <section id="expectations" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-accent font-semibold text-xs mb-2 block">
            why choose us
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4 tracking-tight">
            What to expect from a Infinite Learning Course?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl">
              <div className="w-12 h-12 bg-brand-violet/20 rounded-lg flex items-center justify-center text-brand-accent mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-[#D1D5DB] text-sm leading-[1.6]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
