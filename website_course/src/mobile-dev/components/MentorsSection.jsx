import { mentors } from '../data';

function MentorsSection() {
  return (
    <section className="py-24 bg-bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">Tim Pengajar</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
            Meet the Mentors
          </h2>
          <p className="text-text-secondary mt-3 text-sm max-w-xl mx-auto">Dibimbing langsung oleh mentor-mentor berpengalaman di industri teknologi.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {mentors.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border-default hover:border-brand-accent/40 transition-colors duration-300 mb-3 bg-[#13122E]">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h4 className="font-display font-bold text-text-primary text-sm leading-tight">{m.name}</h4>
              <p className="text-text-muted text-xs mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentorsSection;
