import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';
  const label = isLight ? 'Aktifkan mode gelap' : 'Aktifkan mode terang';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={!isLight}
      title={label}
      className="relative w-11 h-11 rounded-full text-text-secondary hover:text-text-primary hover:bg-bg-subtle active:scale-95 transition-all duration-200 inline-flex items-center justify-center"
    >
      <span className="relative block w-5 h-5">
        <Moon className={`absolute inset-0 w-5 h-5 transition-all duration-200 ease-out ${isLight ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} />
        <Sun className={`absolute inset-0 w-5 h-5 text-[#FACC15] transition-all duration-200 ease-out ${isLight ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} />
      </span>
    </button>
  );
}

export default ThemeButton;
