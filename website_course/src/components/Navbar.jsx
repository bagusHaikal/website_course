import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { useTheme } from '../contexts/ThemeContext';

function Navbar({ onResultClick, navVisible, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Program', dropdown: [
      { label: 'Bootcamp', href: '#' }, { label: 'Workshop', href: '#' },
      { label: 'Belajar Mandiri', href: '#' }, { label: 'Lihat Semua Program', href: '#' }
    ]},
    { label: 'Corporate', dropdown: [
      { label: 'Corporate Training', href: '#' }, { label: 'Partnership', href: '#' },
      { label: 'Hire Our Graduates', href: '#' }
    ]},
    { label: 'Program Mandiri', href: '#' }
  ];

  const toggleDropdown = (label) => setOpenDropdown(prev => prev === label ? null : label);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-trigger')) setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isLight = theme === 'light';

  const navClass = scrolled
    ? `${isLight ? 'bg-white/90' : 'bg-bg-base/80'} backdrop-blur-xl shadow-glass`
    : `${isLight ? 'bg-white/90' : 'bg-bg-base/90'} backdrop-blur-md`;

  const translateClass = navVisible ? "translate-y-0" : "-translate-y-full";

  const renderMenuItem = (item) => {
    const hasDropdown = item.dropdown && item.dropdown.length > 0;
    const isOpen = openDropdown === item.label;
    return (
      <div key={item.label} className="relative dropdown-trigger">
        {hasDropdown ? (
          <>
            <button onClick={() => toggleDropdown(item.label)} className={`font-medium transition-colors text-sm tracking-wide flex items-center gap-1 ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`} aria-expanded={isOpen}>
              {item.label}
              <svg className="w-4 h-4 transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isOpen && (
              <div className={`absolute top-full left-0 mt-2 w-52 py-2 z-[200] shadow-glass rounded-xl overflow-hidden border ${isLight ? 'bg-white border-border-default' : 'bg-bg-base/95 border-border-default'}`}>
                {item.dropdown.map((sub) => (
                  <a key={sub.label} href={sub.href} onClick={() => setOpenDropdown(null)} className={`block px-4 py-2.5 text-sm transition-colors ${isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-bg-section' : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'}`}>{sub.label}</a>
                ))}
              </div>
            )}
          </>
        ) : (
          <a href={item.href} className={`font-medium transition-colors text-sm tracking-wide ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`}>{item.label}</a>
        )}
      </div>
    );
  };

  return (
    <nav id="navbar" className={`fixed w-full z-[100] border-b border-border-default transition-all duration-300 ${navClass} ${translateClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex justify-between items-stretch h-[88px]">
          <div className="flex-shrink-0 flex items-center px-6">
            <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src="https://lms-v2.infinitelearningstudent.id/logo-white.png" alt="Infinite Learning Logo" className="h-10 w-auto object-contain" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 px-4">
            <div className="flex flex-col items-center w-110 max-w-lg">
              <SearchBar onResultClick={onResultClick} navVisible={navVisible} fullWidth={true} />
              <div className="flex items-center space-x-8 mt-3 w-full">
                {menuItems.map(renderMenuItem)}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex items-center px-6 space-x-4">
            <button onClick={toggleTheme} className={`transition-colors ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`} aria-label="Toggle theme">
              {isLight ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button className={`font-semibold transition-colors text-sm ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`}>Masuk</button>
            <button className="btn-premium bg-button-gradient text-white px-6 py-2.5 rounded-full font-semibold shadow-glow text-sm">Daftar Sekarang</button>
          </div>
        </div>
        <div className="flex justify-between items-center h-20 md:hidden">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src="https://lms-v2.infinitelearningstudent.id/logo-white.png" alt="Infinite Learning Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className={`transition-colors p-2 ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`} aria-label="Toggle theme">
              {isLight ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button id="mobile-menu-btn" onClick={toggleMenu} className={`focus:outline-none p-2 ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`} aria-label="Toggle menu" aria-expanded="false">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`md:hidden absolute w-full border-t ${isLight ? 'bg-white border-border-default' : 'bg-bg-base/95 border-border-default'} backdrop-blur-xl ${menuOpen ? "" : "hidden"}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isOpen = openDropdown === item.label;
              return hasDropdown ? (
                <div key={item.label}>
                  <button onClick={() => toggleDropdown(item.label)} className={`w-full text-left px-3 py-3 text-base font-medium flex items-center justify-between rounded-lg ${isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-bg-section' : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'}`}>
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isOpen && item.dropdown.map((sub) => (
                    <a key={sub.label} href={sub.href} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }} className={`block px-6 py-2 text-sm transition-colors ${isLight ? 'text-gray-500 hover:text-gray-900' : 'text-text-muted hover:text-text-primary'}`}>{sub.label}</a>
                  ))}
                </div>
              ) : (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className={`block px-3 py-3 text-base font-medium rounded-lg ${isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-bg-section' : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'}`}>{item.label}</a>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <button className={`w-full text-center py-3 border rounded-lg font-semibold transition-colors ${isLight ? 'border-border-default text-gray-600 hover:bg-bg-section' : 'border-border-default text-text-secondary hover:bg-bg-subtle'}`}>Masuk</button>
              <button className="w-full text-center py-3 bg-button-gradient text-white rounded-lg font-semibold shadow-glow btn-premium">Daftar Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
