import { mentor } from '../data';

const checkSVG = <svg className="w-4 h-4 shrink-0 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

function MentorSection() {
  return (
    <section id="mentor" className="py-24 bg-bg-base">
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
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">{mentor.bio}</p>
            <ul className="space-y-3 max-w-lg mx-auto lg:mx-0">
              {mentor.points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                  {checkSVG}
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorSection;
