import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-200 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-text-primary hover:border-border-hover transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {isLight ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" style={{ color: '#FACC15' }} />
      )}
    </button>
  );
}

export default ThemeToggle;
