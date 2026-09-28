import { useState } from 'react';

const programData = {
  tech: {
    label: 'Technical Skill',
    items: [
      { title: 'Front-end Development', desc: 'HTML, CSS, JavaScript & React' },
      { title: 'Back-end Development', desc: 'Node.js, Python & Database' },
      { title: 'Full-stack Web Development', desc: 'End-to-end web application' },
      { title: 'Artificial Intelligence', desc: 'ML, Deep Learning & LLM' },
      { title: 'Cybersecurity', desc: 'Network security & ethical hacking' },
      { title: 'Game Programming', desc: 'Unity & game engine development' },
      { title: 'Android Mobile Development', desc: 'Kotlin & Android Studio' },
      { title: 'iOS Development', desc: 'Swift & Xcode ecosystem' },
      { title: 'AR/VR Development', desc: 'Immersive experience creation' },
    ]
  },
  'non-tech': {
    label: 'Non-Technical Skill',
    items: [
      { title: '2D/3D Animation', desc: 'Motion design & 3D modeling' },
      { title: 'Motion Graphic', desc: 'Animated visual storytelling' },
      { title: 'Product Visualization', desc: '3D product rendering & demo' },
    ]
  },
  soft: {
    label: 'Soft Skill',
    items: [
      { title: 'Problem Solving with Design Thinking', desc: 'Human-centered approach to innovation' },
      { title: 'Project Management with AGILE SCRUM', desc: 'Agile methodology & team delivery' },
      { title: 'Public Speaking & Presentation', desc: 'Effective communication & storytelling' },
      { title: 'Teamwork & Team Building', desc: 'Collaboration & conflict resolution' },
      { title: 'Communication, Collaboration & Adaptive Skill', desc: 'Professional workplace readiness' },
    ]
  },
};

const SkillIcon = ({ index }) => {
  const paths = [
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />,
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L4.155 21.316A2.25 2.25 0 013.387 21H6.75" />,
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
  ];
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {paths[index % paths.length]}
    </svg>
  );
};

function ProgramsSection() {
  const [activeTab, setActiveTab] = useState('tech');
  const active = programData[activeTab];

  return (
    <section id="programs" className="py-24 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Program Kami</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">Pilihan Program Pelatihan</h2>
          <p className="text-text-secondary mt-4 text-base">Kurikulum yang selalu diperbarui mengikuti kebutuhan industri terkini.</p>
        </div>

        <div className="flex justify-center gap-1 mb-14">
          {Object.entries(programData).map(([id, data]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === id ? 'text-brand-violet' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {data.label}
              {activeTab === id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-violet rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-slide-up" style={{ animationDuration: '400ms' }}>
          {active.items.map((item, i) => (
            <div
              key={i}
              className="group border border-border-default bg-bg-surface rounded-xl p-5 hover:border-border-hover hover:-translate-y-0.5 hover:shadow-glow-hover transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-brand-violet/10 text-brand-accent flex items-center justify-center shrink-0 group-hover:bg-brand-violet/20 transition-colors duration-300">
                  <SkillIcon index={i} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-text-primary mb-1 group-hover:text-text-primary transition-colors">{item.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-premium bg-button-gradient text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-glow">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
