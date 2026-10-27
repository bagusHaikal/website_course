import { mentor } from '../data';

function MentorSection() {
  return (
    <section id="mentor" className="py-20 lg:py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-brand-violet/10 rounded-full blur-2xl -z-10 w-48 h-48 mx-auto my-auto"></div>
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-48 sm:w-56 lg:w-64 max-w-full h-auto object-cover rounded-2xl shadow-glass border border-border-default"
            />
          </div>

          <div className="text-center lg:text-left">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-2 block">Meet the Mentor</span>
            <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">{mentor.bio}</p>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">{mentor.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorSection;
