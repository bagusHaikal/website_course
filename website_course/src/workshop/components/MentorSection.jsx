import { mentor } from '../data';

function MentorSection() {
  return (
    <section id="mentor" className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative hidden lg:block">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-full max-w-[200px] h-auto mx-auto"
            />
          </div>

          <div className="text-center lg:text-left">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Meet the Mentor</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight mb-3">{mentor.name}</h2>
            <p className="text-brand-accent font-semibold text-sm mb-6">{mentor.role}</p>
            <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">{mentor.bio}</p>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">{mentor.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorSection;
