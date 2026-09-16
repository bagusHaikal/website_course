import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function Navbar({ onResultClick, navVisible, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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


  const navClass = scrolled ? "bg-brand-dark/80 backdrop-blur-xl shadow-lg" : "bg-brand-dark/90 backdrop-blur-md";
  const translateClass = navVisible ? "translate-y-0" : "-translate-y-full";

  const renderMenuItem = (item) => {
    const hasDropdown = item.dropdown && item.dropdown.length > 0;
    const isOpen = openDropdown === item.label;
    return (
      <div key={item.label} className="relative dropdown-trigger">
        {hasDropdown ? (
          <>
            <button onClick={() => toggleDropdown(item.label)} className="text-gray-300 hover:text-white font-medium transition-colors text-sm tracking-wide flex items-center gap-1" aria-expanded={isOpen}>
              {item.label}
              <svg className="w-4 h-4 transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-xl py-2 z-[200] shadow-glass">
                {item.dropdown.map((sub) => (
                  <a key={sub.label} href={sub.href} onClick={() => setOpenDropdown(null)} className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors">{sub.label}</a>
                ))}
              </div>
            )}
          </>
        ) : (
          <a href={item.href} className="text-gray-300 hover:text-white font-medium transition-colors text-sm tracking-wide">{item.label}</a>
        )}
      </div>
    );
  };


  return (
    <nav id="navbar" className={`fixed w-full z-[100] border-b border-white/5 transition-all duration-300 ${navClass} ${translateClass}`}>
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
            <button className="text-gray-300 hover:text-white font-semibold transition-colors text-sm">Masuk</button>
            <button className="btn-premium bg-button-gradient text-white px-6 py-2.5 rounded-full font-semibold shadow-glow text-sm">Daftar Sekarang</button>
          </div>
        </div>
        <div className="flex justify-between items-center h-20 md:hidden">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src="https://lms-v2.infinitelearningstudent.id/logo-white.png" alt="Infinite Learning Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-btn" onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none p-2" aria-label="Toggle menu" aria-expanded="false">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`md:hidden bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 absolute w-full ${menuOpen ? "" : "hidden"}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isOpen = openDropdown === item.label;
              return hasDropdown ? (
                <div key={item.label}>
                  <button onClick={() => toggleDropdown(item.label)} className="w-full text-left px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg flex items-center justify-between">
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {isOpen && item.dropdown.map((sub) => (
                    <a key={sub.label} href={sub.href} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }} className="block px-6 py-2 text-sm text-gray-400 hover:text-white transition-colors">{sub.label}</a>
                  ))}
                </div>
              ) : (
                <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">{item.label}</a>
              );
            })}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-center py-3 border border-white/10 rounded-lg font-semibold text-white hover:bg-white/5 transition-colors">Masuk</button>
              <button className="w-full text-center py-3 bg-button-gradient text-white rounded-lg font-semibold shadow-glow btn-premium">Daftar Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
