import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { navMenu } from '../data/siteLinks';
import { ChevronDown, Moon, Sun, Menu } from 'lucide-react';

const LOGO_LIGHT = 'https://lms-v2.infinitelearningstudent.id/logo-black.png';
const LOGO_DARK = 'https://lms-v2.infinitelearningstudent.id/logo-white.png';

function Navbar({ onResultClick, navVisible, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const leftMenuItems = navMenu.filter((item) => !item.sideRight);
  const rightMenuItem = navMenu.find((item) => item.sideRight);


  const toggleDropdown = (label) => setOpenDropdown(prev => prev === label ? null : label);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-trigger')) setOpenDropdown(null);
      if (!e.target.closest('.account-trigger')) setAccountOpen(false);
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setAccountOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isLight = theme === 'light';

  /* Navbar background follows the active theme tokens (design.md §7.5, §15) */
  const navClass = isLight
    ? (scrolled ? 'bg-white/80 backdrop-blur-xl shadow-glass' : 'bg-white/90 backdrop-blur-md')
    : (scrolled ? 'bg-[#000000]/85 backdrop-blur-xl shadow-glass' : 'bg-[#000000]/90 backdrop-blur-md');

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
              <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {isOpen && (
              <div className={`absolute top-full left-0 mt-2 w-52 py-2 z-200 shadow-glass rounded-xl overflow-hidden border ${isLight ? 'bg-white/95' : 'bg-[#000000]/95'} border-border-default`}>
                {item.dropdown.map((sub) => {
                  const subClass = `block px-4 py-2.5 text-sm transition-colors ${isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-bg-section' : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'}`;
                  return sub.href.startsWith('/') ? (
                    <Link key={sub.label} to={sub.href} onClick={() => setOpenDropdown(null)} className={subClass}>{sub.label}</Link>
                  ) : (
                    <a key={sub.label} href={sub.href} onClick={() => setOpenDropdown(null)} className={subClass}>{sub.label}</a>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          item.href === '#' ? (
            <a href={item.href} className={`font-medium transition-colors text-sm tracking-wide ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`}>{item.label}</a>
          ) : (
            <Link to={item.href} className={`font-medium transition-colors text-sm tracking-wide ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`}>{item.label}</Link>
          )
        )}
      </div>
    );
  };

  return (
    <nav id="navbar" className={`fixed w-full z-100 border-b border-border-default transition-all duration-300 ${navClass} ${translateClass}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center h-16 gap-8">
          <div className="shrink-0 flex items-center -ml-2 sm:-ml-3 lg:-ml-1">
            <Link to="/" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src={isLight ? LOGO_LIGHT : LOGO_DARK} alt="Infinite Learning Logo" className="h-8 w-auto object-contain" />
            </Link>
          </div>
          <div className="shrink-0 flex items-center gap-6">
            {leftMenuItems.map(renderMenuItem)}
          </div>
          <div className="flex-1 min-w-0">
            <SearchBar onResultClick={onResultClick} navVisible={navVisible} fullWidth={true} />
          </div>
          <div className="shrink-0 flex items-center">
            {rightMenuItem && renderMenuItem(rightMenuItem)}
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <button onClick={toggleTheme} className={`transition-colors ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`} aria-label="Toggle theme">
              {isLight ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" style={{ color: '#FACC15' }} />
              )}
            </button>
            {user ? (
              <div className="relative account-trigger">
                <button
                  type="button"
                  onClick={() => setAccountOpen(prev => !prev)}
                  className="flex items-center gap-1.5 font-semibold text-sm transition-colors hover:text-brand-accent"
                  aria-label={`Menu akun ${user.name}`}
                  aria-haspopup="menu"
                  aria-expanded={accountOpen}
                >
                  <span className="w-7 h-7 rounded-full bg-button-gradient flex items-center justify-center text-white text-xs font-bold">{user.name?.charAt(0).toUpperCase()}</span>

                  <span className={isLight ? 'text-gray-600' : 'text-text-secondary'}>{user.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${accountOpen ? 'rotate-180' : ''}`} />
                </button>
                {accountOpen && (
                  <div role="menu" className={`absolute right-0 top-full mt-2 w-40 py-2 z-200 shadow-glass rounded-xl overflow-hidden border ${isLight ? 'bg-white/95' : 'bg-[#000000]/95'} border-border-default`}>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => { setAccountOpen(false); logout(); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="btn-premium bg-button-gradient text-white px-5 py-2 rounded-full font-semibold shadow-glow text-sm whitespace-nowrap">Masuk</Link>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center h-20 md:hidden">
          <div className="shrink-0 cursor-pointer -ml-2">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src={isLight ? LOGO_LIGHT : LOGO_DARK} alt="Infinite Learning Logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className={`transition-colors p-2 ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`} aria-label="Toggle theme">
              {isLight ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" style={{ color: '#FACC15' }} />
              )}
            </button>
            <button id="mobile-menu-btn" onClick={toggleMenu} className={`focus:outline-none p-2 ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`} aria-label="Toggle menu" aria-expanded="false">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`md:hidden absolute w-full border-t ${isLight ? 'bg-white/95' : 'bg-[#000000]/95'} border-border-default backdrop-blur-xl ${menuOpen ? "" : "hidden"}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navMenu.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isOpen = openDropdown === item.label;
              return hasDropdown ? (
                <div key={item.label}>
                  <button onClick={() => toggleDropdown(item.label)} className={`w-full text-left px-3 py-3 text-base font-medium flex items-center justify-between rounded-lg ${isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-bg-section' : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'}`}>
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && item.dropdown.map((sub) => {
                    const subClass = `block px-6 py-2 text-sm transition-colors ${isLight ? 'text-gray-500 hover:text-gray-900' : 'text-text-muted hover:text-text-primary'}`;
                    const onClick = () => { setMenuOpen(false); setOpenDropdown(null); };
                    return sub.href.startsWith('/') ? (
                      <Link key={sub.label} to={sub.href} onClick={onClick} className={subClass}>{sub.label}</Link>
                    ) : (
                      <a key={sub.label} href={sub.href} onClick={onClick} className={subClass}>{sub.label}</a>
                    );
                  })}
                </div>
                ) : (
                  item.href === '#' ? (
                    <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className={`block px-3 py-3 text-base font-medium rounded-lg ${isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-bg-section' : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'}`}>{item.label}</a>
                  ) : (
                    <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} className={`block px-3 py-3 text-base font-medium rounded-lg ${isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-bg-section' : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'}`}>{item.label}</Link>
                  )
                );
            })}
            <div className="pt-4 flex flex-col gap-3">
              {user ? (
                <div className="flex items-center gap-3 px-3 py-3 rounded-lg">
                  <span className="w-8 h-8 rounded-full bg-button-gradient flex items-center justify-center text-white text-sm font-bold" aria-label={`Menu akun ${user.name}`}>{user.name?.charAt(0).toUpperCase()}</span>
                </div>
              ) : (
                <Link to="/login" className="w-full text-center py-3 bg-button-gradient text-white rounded-lg font-semibold shadow-glow btn-premium">Masuk</Link>
              )}
              {user && (
                <button onClick={() => { logout(); setMenuOpen(false); }} className="w-full text-center py-3 text-sm text-red-400 hover:text-red-300 transition-colors">Keluar</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
