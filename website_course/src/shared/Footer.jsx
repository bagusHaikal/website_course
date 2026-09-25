

const LOGO_DARK = 'https://lms-v2.infinitelearningstudent.id/logo-white.png';

function Footer() {
  const programLinks = [
    { label: 'Bootcamp', href: '#' },
    { label: 'Workshop', href: '#' },
    { label: 'Belajar Mandiri', href: '#' }
  ];

  const corporateLinks = [
    { label: 'Corporate Training', href: '#' },
    { label: 'Partnership', href: '#' },
    { label: 'Hire Our Graduates', href: '#' }
  ];

  const mandiriLinks = [
    { label: 'Website Development', href: '#' },
    { label: 'Mobile Development', href: '#' },
    { label: 'Artificial Intelligence', href: '#' }
  ];

  const socialLinks = [
    { label: 'Instagram', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )},
    { label: 'LinkedIn', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )},
    { label: 'TikTok', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    )},
    { label: 'Youtube', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    )}
  ];

  return (
    <footer className="py-12 border-t bg-[#08060F] text-text-muted" style={{ borderColor: 'var(--color-divider)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div>
          <div className="mb-10">
            <img
              src={LOGO_DARK}
              alt="logoIL"
              className="h-9 w-auto object-left"
            />
          </div>
          <p className="text-sm leading-[1.6]">
            Kawasan Ekonomi Khusus (KEK) Nongsa, Jalan Hang Lekiu KM 2 Sambau<br />
            Kecamatan Nongsa, Kota Batam, Kepulauan Riau<br />
            29465
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Program</h4>
          <ul className="space-y-2 text-sm">
            {programLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-brand-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Corporate</h4>
          <ul className="space-y-2 text-sm">
            {corporateLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-brand-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Program Mandiri</h4>
          <ul className="space-y-2 text-sm">
            {mandiriLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-brand-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Our Social Media</h4>
          <div className="flex gap-3 mb-6">
            {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="hover:text-brand-accent transition-colors text-gray-400" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
          <div className="space-y-2 text-sm">
            <a href="tel:+6282387597266" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5z" clipRule="evenodd" />
              </svg>
              <span>+62 823 8759 7266</span>
            </a>
            <a href="mailto:info@infinitelearning.id" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>info@infinitelearning.id</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-5 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; 2026 Infinite Learning Indonesia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
