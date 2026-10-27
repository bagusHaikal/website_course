import { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Gamepad2, 
  Smartphone, 
  Boxes, 
  Palette, 
  Video, 
  Layers, 
  Target, 
  Briefcase, 
  MessageSquare, 
  Users, 
  Compass 
} from 'lucide-react';

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

const getSkillIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('ai') || t.includes('artificial')) return Cpu;
  if (t.includes('cyber') || t.includes('security')) return ShieldCheck;
  if (t.includes('game')) return Gamepad2;
  if (t.includes('mobile') || t.includes('ios') || t.includes('android')) return Smartphone;
  if (t.includes('ar/vr') || t.includes('3d') || t.includes('product')) return Boxes;
  if (t.includes('animation') || t.includes('motion')) return Palette;
  if (t.includes('visualization')) return Video;
  if (t.includes('design thinking') || t.includes('problem')) return Compass;
  if (t.includes('project management') || t.includes('agile')) return Target;
  if (t.includes('public speaking') || t.includes('presentation')) return MessageSquare;
  if (t.includes('teamwork') || t.includes('building')) return Users;
  if (t.includes('communication') || t.includes('adaptive')) return Briefcase;
  return Code2;
};

const SkillIcon = ({ title }) => {
  const Icon = getSkillIcon(title);
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

        <div className="flex overflow-x-auto justify-start sm:justify-center gap-2 mb-12 pb-2 px-2 -mx-4 sm:mx-0 sm:px-0 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {Object.entries(programData).map(([id, data]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === id
                  ? 'bg-brand-violet text-white shadow-glow'
                  : 'bg-bg-subtle text-text-secondary hover:text-text-primary hover:bg-bg-surface border border-border-default'
              }`}
            >
              {data.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 animate-fade-slide-up" style={{ animationDuration: '400ms' }}>
          {active.items.map((item, i) => (
            <div
              key={i}
              className="group border border-border-default bg-bg-surface rounded-xl p-4 sm:p-5 hover:border-border-hover hover:-translate-y-0.5 hover:shadow-glow-hover transition-all duration-300 cursor-default"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-brand-violet/10 text-brand-accent flex items-center justify-center shrink-0 group-hover:bg-brand-violet/20 transition-colors duration-300">
                  <SkillIcon title={item.title} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-xs sm:text-sm text-text-primary mb-1 group-hover:text-text-primary transition-colors">{item.title}</h3>
                  <p className="text-text-muted text-[11px] sm:text-xs leading-relaxed">{item.desc}</p>
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
