import { useState, useEffect, useRef } from 'react';
import { courses } from '../data/courses';
import { X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SearchResultCard({ course }) {
  return (
    <div className="border-l-2 border-transparent hover:border-brand-violet pl-4 py-2.5 transition-colors cursor-pointer">
      <div className="flex items-start gap-3">
        <img
          src={course.image}
          alt={course.title}
          className="w-16 h-12 object-cover rounded shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-text-primary text-sm font-medium line-clamp-1">{course.title}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] text-text-muted bg-bg-subtle px-1.5 py-0.5 rounded">{course.category}</span>
            <span className="text-[10px] text-text-muted bg-bg-subtle px-1.5 py-0.5 rounded">{course.type}</span>
          </div>
          <p className="text-brand-accent text-xs font-semibold mt-1">{course.priceDiscount}</p>
        </div>
      </div>
    </div>
  );
}

function SearchBar({ onResultClick, navVisible, className = '', fullWidth = false }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase()) ||
    (c.type && c.type.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 6);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 0 && !open) {
      setOpen(true);
    }
  };

  const handleClear = () => {
    setQuery('');
    setOpen(false);
    inputRef.current?.focus();
  };

  const handleSelect = (course) => {
    setOpen(false);
    setQuery('');
    if (onResultClick) {
      onResultClick(course);
    } else {
      navigate(`/courses/${course.slug}`);
    }
  };

  if (!navVisible) return null;

  return (
    <div ref={wrapperRef} className={`relative flex items-center z-1000 ${className}`}>
      <div className={`flex items-center border rounded-full overflow-hidden transition-colors ${
        open ? 'border-brand-violet/50' : 'border-border-default'
      } ${fullWidth ? 'w-full' : 'w-48 sm:w-60'}`}>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            if (query.length > 0) setOpen(true);
          }}
          placeholder="Cari program..."
          className="bg-bg-input text-text-primary text-sm placeholder-text-muted px-4 py-2 w-full outline-none"
        />
        {query ? (
          <button onClick={handleClear} className="px-2.5 text-text-muted hover:text-text-primary transition-colors shrink-0" aria-label="Clear">
            <X className="w-4 h-4" />
          </button>
        ) : (
          <span className="px-2.5 text-text-muted shrink-0">
            <Search className="w-4 h-4" />
          </span>
        )}
      </div>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 sm:min-w-[500px] w-full bg-bg-base border border-border-default rounded-xl overflow-hidden shadow-glass z-300"
        >
          {filtered.length > 0 ? (
            <div className="py-2 max-h-90 overflow-y-auto">
              {filtered.map(course => (
                <button
                  key={course.id}
                  onClick={() => handleSelect(course)}
                  className="w-full text-left block"
                >
                  <SearchResultCard course={course} />
                </button>
              ))}
            </div>
          ) : query.length > 0 ? (
            <div className="p-5 text-center">
              <p className="text-text-muted text-sm">
                Tidak ada program yang cocok dengan "<span className="text-text-primary font-semibold">{query}</span>"
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
