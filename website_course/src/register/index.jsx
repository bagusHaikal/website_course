import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import mentorImage from '../assets/Mentors and students3.JPG';

const LOGO_LIGHT = 'https://lms-v2.infinitelearningstudent.id/logo-black.png';
const LOGO_DARK = 'https://lms-v2.infinitelearningstudent.id/logo-white.png';

const ICONS = {
  name: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  email: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  password: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
};

function Field({ label, iconType, inputType, name, value, onChange, placeholder, error, successStatus, warningStatus, strength, isLight }) {
  const rightIcon = () => {
    if (successStatus === 'valid') return (
      <span className="text-green-500 animate-pop-in shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
    );
    if (successStatus === 'match') return (
      <span className="text-green-500 animate-pop-in shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
    );
    if (warningStatus === 'invalid') return (
      <span className="text-red-500 animate-pop-in shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
    );
    if (warningStatus === 'mismatch') return (
      <span className="text-red-500 animate-pop-in shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
    );
    return null;
  };

  const getBorderColor = () => {
    if (error || warningStatus === 'invalid' || warningStatus === 'mismatch') return '#ef4444';
    if (successStatus === 'valid' || successStatus === 'match') return '#22c55e';
    return isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  };
  const getInputBgStyle = () => isLight
    ? { backgroundColor: 'rgba(248,245,255,0.9)', color: '#111827', borderColor: getBorderColor() }
    : { backgroundColor: 'rgba(30,27,75,0.5)', color: '#ffffff', borderColor: getBorderColor() };

  return (
    <div>
      <label htmlFor={name} className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>{label}</label>
      <div className="relative">
        <span className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${isLight ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
          {ICONS[iconType]}
        </span>
        <input
          id={name}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-lg pl-11 pr-12 py-3 text-sm outline-none transition-all duration-200 disabled:cursor-not-allowed`}
          style={getInputBgStyle()}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 shrink-0">
          {rightIcon()}
        </span>
      </div>
      {strength && (
        <div className="mt-2">
          <div className="flex gap-1 mb-1">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  i <= strength.score
                    ? strength.color === 'red' ? 'bg-red-500'
                    : strength.color === 'orange' ? 'bg-orange-400'
                    : strength.color === 'yellow' ? 'bg-yellow-400'
                    : 'bg-green-500'
                    : isLight ? 'bg-gray-200' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
          <p className={`text-xs transition-colors ${
            strength.color === 'red' ? 'text-red-500'
            : strength.color === 'orange' ? 'text-orange-500'
            : strength.color === 'yellow' ? 'text-yellow-600'
            : 'text-green-500'
          }`}>{strength.label}</p>
        </div>
      )}
      {successStatus === 'match' && (
        <p className="mt-1 text-xs text-green-500">Password cocok</p>
      )}
      {warningStatus === 'mismatch' && (
        <p className="mt-1 text-xs text-red-500">Password tidak cocok</p>
      )}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function calculatePasswordStrength(password) {
  if (!password) return null;
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  score = Math.min(score, 4);
  if (score <= 1) return { score, label: 'Sangat Lemah', color: 'red' };
  if (score === 2) return { score, label: 'Lemah', color: 'orange' };
  if (score === 3) return { score, label: 'Cukup Kuat', color: 'yellow' };
  return { score, label: 'Kuat', color: 'green' };
}

function checkEmail(email) {
  if (!email) return 'neutral';
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'valid';
  return 'invalid';
}

function checkConfirmMatch(password, confirm) {
  if (!confirm) return 'neutral';
  if (password === confirm) return 'match';
  return 'mismatch';
}

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [emailStatus, setEmailStatus] = useState('neutral');
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [confirmMatch, setConfirmMatch] = useState('neutral');
  const { register } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const isLight = theme === 'light';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => {
      const updated = { ...prev, [name]: value };
      if (errors[name]) setErrors(errs => ({ ...errs, [name]: '' }));
      if (message.text) setMessage({ type: '', text: '' });
      if (name === 'email') setEmailStatus(checkEmail(value));
      if (name === 'password') {
        setPasswordStrength(calculatePasswordStrength(value));
        setConfirmMatch(checkConfirmMatch(value, prev.confirmPassword));
      }
      if (name === 'confirmPassword') setConfirmMatch(checkConfirmMatch(prev.password, value));
      return updated;
    });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Nama lengkap wajib diisi';
    if (!form.email.trim()) errs.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Format email tidak valid';
    if (!form.password) errs.password = 'Password wajib diisi';
    else if (form.password.length < 6) errs.password = 'Password minimal 6 karakter';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Password tidak cocok';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      register(form.name, form.email);
      setMessage({ type: 'success', text: 'Pendaftaran berhasil! Selamat datang.' });
      setErrors({});
      setTimeout(() => navigate('/login'), 800);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-base">
      {/* Theme toggle */}
      <div className="absolute top-5 right-6 z-10">
        <button
          onClick={toggleTheme}
          className={`transition-colors p-2 rounded-lg ${isLight ? 'text-gray-500 hover:text-gray-800' : 'text-gray-400 hover:text-white'}`}
          aria-label="Toggle theme"
        >
          {isLight ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          ) : (
            <svg className="w-5 h-5" style={{ color: '#FACC15' }} fill="none"  stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          )}
        </button>
      </div>

      <div className="flex-1 grid lg:grid-cols-2 font-sans selection:bg-brand-purple/20 selection:text-brand-purple">
        {/* Left image panel — hidden on mobile */}
        <div className="hidden lg:flex flex-col justify-between relative overflow-hidden px-12 py-10">
          <img src={mentorImage} alt="Mentors and Students" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative z-10">
            <img src={LOGO_DARK} alt="Infinite Learning Logo" className="h-7 w-auto" />
          </div>

          <div className="relative z-10 max-w-md space-y-6">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl leading-tight tracking-tight text-white">
              Bergabung dan mulailah perjalanan belajarmu sekarang.
            </h1>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
              Buat akun gratis dan dapatkan akses penuh ke seluruh program pelatihan teknologi terbaik dari Infinite Learning.
            </p>
            <div className="pt-4 border-t border-white/15 space-y-2.5 text-xs font-medium text-white/90">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                <span>Materi interaktif dari praktisi industri</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                <span>Sertifikat resmi setelah menyelesaikan program</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></div>
                <span>Mentoring langsung dari mentor spesialis</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6">
            <p className="text-xs text-white/50">&copy; 2026 Infinite Learning Indonesia. Hak Cipta Dilindungi.</p>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex items-center justify-center p-6 sm:p-12 bg-background relative">
          <div className="w-full max-w-sm font-sans">
            {/* Mobile logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <img src={isLight ? LOGO_LIGHT : LOGO_DARK} alt="Infinite Learning" className="h-7 w-auto object-contain" />
            </div>

            {/* Back link */}
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-brand-accent transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Kembali
            </Link>

            {/* Title */}
            <h2 className={`font-display font-bold text-2xl tracking-tight mb-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              Buat Akun Baru
            </h2>
            <p className={`text-xs leading-relaxed mb-8 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
              Masukkan data diri Anda untuk mendaftar sebagai siswa baru.
            </p>

            {/* Message */}
            {message.text && (
              <div className={`mb-4 px-4 py-3 rounded-lg text-sm text-center ${
                message.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-600' : 'bg-red-500/10 border border-red-500/20 text-red-600'
              }`}>
                {message.text}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field
                isLight={isLight}
                label="Nama Lengkap"
                iconType="name"
                inputType="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap"
                error={errors.name}
              />
              <Field
                isLight={isLight}
                label="Email"
                iconType="email"
                inputType="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="contoh@email.com"
                error={errors.email}
                successStatus={emailStatus === 'valid' ? 'valid' : null}
                warningStatus={emailStatus === 'invalid' ? 'invalid' : null}
              />
              <Field
                isLight={isLight}
                label="Password"
                iconType="password"
                inputType="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Minimal 6 karakter"
                error={errors.password}
                strength={passwordStrength}
              />
              <Field
                isLight={isLight}
                label="Konfirmasi Password"
                iconType="password"
                inputType="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Ulangi password"
                error={errors.confirmPassword}
                successStatus={confirmMatch === 'match' ? 'match' : null}
                warningStatus={confirmMatch === 'mismatch' ? 'mismatch' : null}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold text-sm bg-button-gradient text-white hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-glow mt-2"
              >
                {loading ? 'Memproses...' : 'Daftar Sekarang'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className={`flex-1 h-px ${isLight ? 'bg-[rgba(0,0,0,0.08)]' : 'bg-[rgba(255,255,255,0.08)]'}`} />
              <span className={`text-xs ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>atau</span>
              <div className={`flex-1 h-px ${isLight ? 'bg-[rgba(0,0,0,0.08)]' : 'bg-[rgba(255,255,255,0.08)]'}`} />
            </div>

            {/* Social login */}
            <button className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm transition-all ${
              isLight
                ? 'border border-[rgba(0,0,0,0.08)] text-gray-600 hover:bg-gray-50 hover:border-[rgba(0,0,0,0.15)]'
                : 'border border-[rgba(255,255,255,0.08)] text-gray-400 hover:text-white hover:border-[rgba(255,255,255,0.15)]'
            }`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Daftar dengan Google
            </button>

            {/* Footer link */}
            <div className={`mt-8 pt-5 border-t border-border-default text-center`}>
              <p className={`text-[11px] ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                Sudah punya akun? <Link to="/login" className="text-violet-500 hover:text-violet-700 transition-colors font-medium">Masuk di sini</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
