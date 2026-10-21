import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Search, User } from 'lucide-react';

function MobileBottomNav({ isLight, onOpenSearch }) {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (p) => {
    if (p === '/') return path === '/';
    return path.startsWith(p);
  };

  const linkClass = (active) => `flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
    active 
      ? 'text-brand-accent font-semibold' 
      : (isLight ? 'text-gray-500 hover:text-gray-900' : 'text-text-muted hover:text-text-primary')
  }`;

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-100 h-16 border-t ${
      isLight ? 'bg-white/95 border-gray-200' : 'bg-[#000000]/95 border-white/10'
    } backdrop-blur-xl flex items-center justify-around px-2 shadow-2xl`}>
      
      {/* Home */}
      <Link to="/" className={linkClass(isActive('/'))}>
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Home</span>
      </Link>

      {/* Program */}
      <Link to="/all-programs" className={linkClass(isActive('/all-programs') || isActive('/bootcamp') || isActive('/workshop'))}>
        <BookOpen className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Program</span>
      </Link>

      {/* Quick Search trigger */}
      <button onClick={onOpenSearch} className={linkClass(false)}>
        <Search className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Cari</span>
      </button>

      {/* Profil / Masuk */}
      <Link to="/login" className={linkClass(isActive('/login'))}>
        <User className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Akun</span>
      </Link>

    </div>
  );
}

export default MobileBottomNav;
