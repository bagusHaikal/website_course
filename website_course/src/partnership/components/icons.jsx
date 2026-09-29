const paths = {
  heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />,
  calendar: (<><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>),
  cpu: (<><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></>),
  briefcase: (<><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4"/></>),
  book: (<><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></>),
  users: (<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>),
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  megaphone: (<><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1"/></>),
  flag: (<><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></>),
  badge: (<><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 3.74 4 4 0 0 1 4.77 4.78 4 4 0 0 1-4.78 4.74 4 4 0 0 1-6.74-3.74A4 4 0 0 1 3.85 8.62Z"/><path d="m9 12 2 2 4-4"/></>),
  layers: (<><path d="m12 2 8.5 4.5-8.5 4.5-8.5-4.5L12 2z"/><path d="m3.5 6.5 8.5 4.5 8.5-4.5"/><path d="m3.5 11.5 8.5 4.5 8.5-4.5"/></>),
};

export function PartnerIcon({ name, className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      {paths[name] || paths.zap}
    </svg>
  );
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
