const paths = {
  briefcase: (<><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4"/></>),
  badge: (<><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 3.74 4 4 0 0 1 4.77 4.78 4 4 0 0 1-4.78 4.74 4 4 0 0 1-6.74-3.74A4 4 0 0 1 3.85 8.62Z"/><path d="m9 12 2 2 4-4"/></>),
  layers: (<><path d="m12 2 8.5 4.5-8.5 4.5-8.5-4.5L12 2z"/><path d="m3.5 6.5 8.5 4.5 8.5-4.5"/><path d="m3.5 11.5 8.5 4.5 8.5-4.5"/></>),
};

export function LocalIcon({ name, className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      {paths[name] || paths.badge}
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

export function LinkedInIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

