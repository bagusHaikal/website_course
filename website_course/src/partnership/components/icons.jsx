import { Heart, Calendar, Cpu, Briefcase, BookOpen, Users, Zap, Megaphone, Flag, BadgeCheck, Layers } from 'lucide-react';

const iconMap = {
  heart: Heart,
  calendar: Calendar,
  cpu: Cpu,
  briefcase: Briefcase,
  book: BookOpen,
  users: Users,
  zap: Zap,
  megaphone: Megaphone,
  flag: Flag,
  badge: BadgeCheck,
  layers: Layers,
};

export function PartnerIcon({ name, className }) {
  const Icon = iconMap[name] || Zap;
  return <Icon className={className} />;
}

export function DotMesh({ isLight }) {
  const dotColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)';
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: isLight ? 0.6 : 0.5,
        backgroundImage: `url("data:image/svg+xml;base64,${btoa(`<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><circle cx="1" cy="1" r="1" fill="${dotColor}"/></svg>`)}")`,
      }}
    />
  );
}
