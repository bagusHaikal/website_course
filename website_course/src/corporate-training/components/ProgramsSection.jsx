import { useState } from 'react';
import { Code2, Sparkles, Rocket, GraduationCap } from 'lucide-react';

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

const skillIcons = [Code2, Sparkles, Rocket, GraduationCap];

const SkillIcon = ({ index }) => {
  const Icon = skillIcons[index % skillIcons.length];
  return <Icon className="w-5 h-5" />;
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
