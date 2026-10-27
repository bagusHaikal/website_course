import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import ThemeButton from './ThemeButton';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { navMenu } from '../data/siteLinks';
import { ChevronDown, Menu, X } from 'lucide-react';

const LOGO_LIGHT = 'https://lms-v2.infinitelearningstudent.id/logo-black.png';
const LOGO_DARK = 'https://lms-v2.infinitelearningstudent.id/logo-white.png';

function Navbar({ onResultClick, navVisible, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountTimeoutRef = useRef(null);
  const { theme, toggleTheme } = useTheme();
  const { user, logout, switchRole } = useAuth();

  const handleAccountMouseEnter = () => {
    if (accountTimeoutRef.current) clearTimeout(accountTimeoutRef.current);
    setAccountOpen(true);
  };

  const handleAccountMouseLeave = () => {
    accountTimeoutRef.current = setTimeout(() => {
      setAccountOpen(false);
    }, 150);
  };

  const isInstructor = user?.role === 'instructor' || user?.role === 'admin';

  const leftMenuItems = navMenu.filter((item) => !item.sideRight);
  const rightMenuItem = navMenu.find((item) => item.sideRight);


  const toggleDropdown = (label) => {
    setOpenDropdown(prev => (prev === label ? null : label));
  };
  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setOpenDropdown(null);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Only run desktop dropdown click outside if not on mobile drawer
      if (!e.target.closest('.dropdown-trigger')) {
        // Check if click is inside mobile menu
        if (!e.target.closest('#mobile-menu')) {
          setOpenDropdown(null);
        }
      }
      if (!e.target.closest('.account-trigger')) setAccountOpen(false);
      
      // Close mobile menu if clicked outside navbar
      if (!e.target.closest('#navbar')) {
        setMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setAccountOpen(false);
        setOpenDropdown(null);
        setMenuOpen(false);
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
            <ThemeButton />
            {user ? (
              <div 
                className="relative account-trigger"
                onMouseEnter={handleAccountMouseEnter}
                onMouseLeave={handleAccountMouseLeave}
              >
                <Link
                  to="/profile"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-button-gradient text-white font-bold text-sm shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden ring-2 ring-transparent hover:ring-brand-accent/50"
                  aria-label={`Menu akun ${user.name}`}
                >
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user.name?.charAt(0).toUpperCase()
                  )}
                </Link>

                {/* Dropdown container dengan hover-bridge (pt-2) & CSS transitions */}
                <div 
                  role="menu" 
                  className={`absolute right-0 top-full pt-2 z-200 transition-all duration-200 ease-out origin-top-right ${
                    accountOpen 
                      ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className={`w-64 py-3 shadow-2xl rounded-2xl border ${isLight ? 'bg-white border-gray-200' : 'bg-[#121212] border-border-default'}`}>
                    {/* User Info Header */}
                    <div className="px-4 pb-3 mb-2 border-b border-border-default flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-button-gradient flex items-center justify-center text-white font-bold overflow-hidden shrink-0">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          user.name?.charAt(0).toUpperCase()
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm truncate">{user.name}</p>
                        <p className="text-xs opacity-70 truncate">{user.email}</p>
                      </div>
                    </div>

                    {/* Udemy Style Menu Links */}
                    <div className="px-2 space-y-0.5 text-sm">
                      <Link 
                        to="/profile?tab=my-courses" 
                        onClick={() => setAccountOpen(false)}
                        className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                      >
                        My Courses
                      </Link>
                      <Link 
                        to="/profile?tab=wishlist" 
                        onClick={() => setAccountOpen(false)}
                        className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                      >
                        Wishlist
                      </Link>
                      <Link 
                        to="/profile?tab=quizzes" 
                        onClick={() => setAccountOpen(false)}
                        className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                      >
                        Quizzes
                      </Link>
                      <Link 
                        to="/profile?tab=notes" 
                        onClick={() => setAccountOpen(false)}
                        className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                      >
                        Notes
                      </Link>
                    </div>

                    <div className="my-2 border-t border-border-default" />

                    <div className="px-2 space-y-0.5 text-sm">
                      {/* Instructor-only menus: hidden for students */}
                      {isInstructor && (
                        <>
                          <Link 
                            to="/profile?tab=courses" 
                            onClick={() => setAccountOpen(false)}
                            className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                          >
                            Instructor Courses
                          </Link>
                          <Link 
                            to="/profile?tab=students" 
                            onClick={() => setAccountOpen(false)}
                            className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                          >
                            Students
                          </Link>
                        </>
                      )}
                      <Link 
                        to="/profile?tab=orders" 
                        onClick={() => setAccountOpen(false)}
                        className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                      >
                        Orders
                      </Link>
                    </div>

                    <div className="my-2 border-t border-border-default" />

                    <div className="px-2 space-y-0.5 text-sm">
                      <Link 
                        to="/profile?tab=settings&sub=general" 
                        onClick={() => setAccountOpen(false)}
                        className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                      >
                        Account Settings
                      </Link>
                      <Link 
                        to="/profile?tab=settings&sub=avatar" 
                        onClick={() => setAccountOpen(false)}
                        className={`block px-3 py-2 rounded-xl transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                      >
                        Edit Avatar
                      </Link>
                    </div>

                    <div className="my-2 border-t border-border-default" />

                    {/* TODO(backend): HAPUS tombol simulasi role ini setelah backend siap.
                        Role akan dikirim dari API login/register (user.role). */}
                    <div className="px-2 pb-2">
                      <p className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-wider opacity-50">
                        Simulasi Role (dev)
                      </p>
                      <div className="flex gap-1.5 px-1">
                        <button
                          type="button"
                          onClick={() => switchRole('student')}
                          className={`flex-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${user.role === 'student' ? 'bg-button-gradient text-white' : isLight ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
                        >
                          Student
                        </button>
                        <button
                          type="button"
                          onClick={() => switchRole('instructor')}
                          className={`flex-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${isInstructor ? 'bg-button-gradient text-white' : isLight ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
                        >
                          Instructor
                        </button>
                      </div>
                    </div>

                    <div className="my-2 border-t border-border-default" />

                    <div className="px-2">
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => { setAccountOpen(false); logout(); }}
                        className="w-full text-left px-3 py-2 rounded-xl text-sm text-red-400 hover:bg-red-500/10 transition-colors font-medium"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
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
            <ThemeButton />
            <button id="mobile-menu-btn" onClick={toggleMenu} className={`focus:outline-none p-2 ${isLight ? 'text-gray-600 hover:text-gray-900' : 'text-text-secondary hover:text-text-primary'}`} aria-label="Toggle menu" aria-expanded={menuOpen}>
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`md:hidden absolute top-full left-0 w-full border-t ${isLight ? 'bg-white/98' : 'bg-[#000000]/98'} border-border-default backdrop-blur-2xl shadow-glass transition-all duration-300 ease-out overflow-hidden ${menuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0 border-t-0 pointer-events-none"}`}>
          <div className="px-4 space-y-2">
            {navMenu.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isOpen = openDropdown === item.label;
              return hasDropdown ? (
                <div key={item.label} className="border-b border-divider pb-2">
                  <button onClick={() => toggleDropdown(item.label)} className={`w-full text-left px-3 py-3 text-base font-semibold flex items-center justify-between rounded-lg ${isLight ? 'text-gray-800 hover:bg-bg-section' : 'text-text-primary hover:bg-bg-subtle'}`}>
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.dropdown.map((sub) => {
                        const subClass = `block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${isLight ? 'text-gray-600 hover:text-gray-900 hover:bg-bg-section' : 'text-text-secondary hover:text-text-primary hover:bg-bg-subtle'}`;
                        const onClick = () => { setMenuOpen(false); setOpenDropdown(null); };
                        return sub.href.startsWith('/') ? (
                          <Link key={sub.label} to={sub.href} onClick={onClick} className={subClass}>{sub.label}</Link>
                        ) : (
                          <a key={sub.label} href={sub.href} onClick={onClick} className={subClass}>{sub.label}</a>
                        );
                      })}
                    </div>
                  )}
                </div>
                ) : (
                  item.href === '#' ? (
                    <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className={`block px-3 py-3 text-base font-semibold rounded-lg border-b border-divider ${isLight ? 'text-gray-800 hover:bg-bg-section' : 'text-text-primary hover:bg-bg-subtle'}`}>{item.label}</a>
                  ) : (
                    <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} className={`block px-3 py-3 text-base font-semibold rounded-lg border-b border-divider ${isLight ? 'text-gray-800 hover:bg-bg-section' : 'text-text-primary hover:bg-bg-subtle'}`}>{item.label}</Link>
                  )
                );
            })}
            <div className="pt-3 flex flex-col gap-3">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg bg-bg-subtle hover:bg-bg-section transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-button-gradient flex items-center justify-center text-white text-sm font-bold overflow-hidden shrink-0">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        user.name?.charAt(0).toUpperCase()
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-text-primary truncate">{user.name}</span>
                      <span className="block text-[11px] uppercase tracking-wider text-brand-accent font-semibold">{user.role || 'student'}</span>
                    </span>
                    <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />
                  </Link>

                  {/* TODO(backend): HAPUS tombol simulasi role ini setelah backend siap. */}
                  <div className="flex gap-1.5 px-3">
                    <button
                      type="button"
                      onClick={() => switchRole('student')}
                      className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${user.role === 'student' ? 'bg-button-gradient text-white' : isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/5 text-text-secondary'}`}
                    >
                      Student
                    </button>
                    <button
                      type="button"
                      onClick={() => switchRole('instructor')}
                      className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${isInstructor ? 'bg-button-gradient text-white' : isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/5 text-text-secondary'}`}
                    >
                      Instructor
                    </button>
                  </div>

                  <button onClick={() => { logout(); setMenuOpen(false); }} className="mx-3 text-sm text-red-400 hover:text-red-300 px-3 py-2 transition-colors border border-red-500/20 rounded-lg">Keluar</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 bg-button-gradient text-white rounded-xl font-semibold shadow-glow btn-premium">Masuk</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
