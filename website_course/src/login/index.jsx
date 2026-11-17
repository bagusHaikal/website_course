import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Check, X, ArrowLeft } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeButton from '../shared/ThemeButton';
import mentorImage from '../assets/Mentors_and_students3.webp';
import logoBlack from '../assets/logo-black.png';
import logoWhite from '../assets/logo-white.png';

const LOGO_LIGHT = logoBlack;
const LOGO_DARK = logoWhite;

const ICONS = {
  email: <Mail className="w-4 h-4" />,
  password: <Lock className="w-4 h-4" />
};

function validateEmail(email) {
  if (!email) return 'neutral';
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'valid';
  return 'invalid';
}

function validatePassword(password) {
  if (!password) return 'neutral';
  if (password.length >= 6) return 'valid';
  return 'invalid';
}

function Field({ label, iconType, inputType, name, value, onChange, placeholder, error, successStatus, warningStatus, isLight }) {
  const rightIcon = () => {
    if (successStatus === 'valid') return (
      <span className="text-green-500 animate-pop-in shrink-0"><Check className="w-5 h-5" /></span>
    );
    if (warningStatus === 'invalid') return (
      <span className="text-red-500 animate-pop-in shrink-0"><X className="w-5 h-5" /></span>
    );
    return null;
  };

  const getBorderColor = () => {
    if (error || warningStatus === 'invalid') return '#ef4444';
    if (successStatus === 'valid') return '#22c55e';
    return isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  };
  const getInputBgStyle = () => isLight
    ? { backgroundColor: 'rgba(248,245,255,0.9)', color: '#111827', borderColor: getBorderColor() }
    : { backgroundColor: 'rgba(30,27,75,0.5)', color: '#ffffff', borderColor: getBorderColor() };return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold mb-1.5 text-text-secondary">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
          {ICONS[iconType]}
        </span>
        <input
          id={name}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-lg pl-11 pr-12 py-3 text-sm outline-none transition-all duration-200"
          style={getInputBgStyle()}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 shrink-0">
          {rightIcon()}
        </span>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: '', text: '' });
  const [emailStatus, setEmailStatus] = useState('neutral');
  const [passwordStatus, setPasswordStatus] = useState('neutral');
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (message.text) setMessage({ type: '', text: '' });
    if (name === 'email') setEmailStatus(validateEmail(value));
    if (name === 'password') setPasswordStatus(validatePassword(value));
  };

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Format email tidak valid';
    if (!form.password) errs.password = 'Password wajib diisi';
    else if (form.password.length < 6) errs.password = 'Password minimal 6 karakter';
    return errs;
  };

  // TODO(backend): sambungkan ke API auth. Form ini murni UI — tidak
  // memverifikasi kredensial dan tidak menyimpan session apa pun.
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setMessage({ type: 'error', text: 'Autentikasi belum tersedia. Form ini hanya tampilan.' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-base">
      {/* Theme toggle */}
      <div className="absolute top-5 right-6 z-10">
        <ThemeButton />
      </div>

      <div className="flex-1 grid lg:grid-cols-2 lg:items-start font-sans selection:bg-brand-purple/20 selection:text-brand-purple">
        {/* Left image panel - hidden on mobile. Tinggi dikunci `lg:h-screen`
            (sama seperti /register) supaya `object-cover` tidak me-render ulang
            gambar saat tinggi form kanan berubah -> tidak ada efek zoom. */}
        <div className="hidden lg:flex flex-col justify-between relative overflow-hidden px-12 py-10 lg:sticky lg:top-0 lg:h-screen">
          <img src={mentorImage} alt="Mentors and Students" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative z-10">
            <img src={LOGO_DARK} alt="Infinite Learning Logo" width={979} height={261} className="h-7 w-auto" />
          </div>

          <div className="relative z-10 max-w-md space-y-6">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl leading-tight tracking-tight text-white">
              Kelola kelas, kerjakan tugas, dan pantau progresmu di satu tempat.
            </h1>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
              Platform Learning Management System untuk mendukung pengalaman belajar yang terstruktur, terukur, dan menyenangkan.
            </p>
            <div className="pt-4 border-t border-white/15 space-y-2.5 text-xs font-medium text-white/90">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                <span>Akses langsung ke seluruh materi modul &amp; tugas kelas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                <span>Sistem penilaian transparan &amp; transkrip kompetensi</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6">
            <p className="text-xs text-white/50">&copy; 2026 Infinite Learning Indonesia. Hak Cipta Dilindungi.</p>
          </div>
        </div>

        {/* Right form panel */}
        <div className="flex items-center justify-center p-6 sm:p-12 bg-bg-base relative lg:min-h-screen">
          <div className="w-full max-w-sm font-sans">
            {/* Mobile logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <img src={isLight ? LOGO_LIGHT : LOGO_DARK} alt="Infinite Learning" width={isLight ? 471 : 979} height={isLight ? 125 : 261} className="h-7 w-auto object-contain" />
            </div>

            {/* Back link */}
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium text-text-muted hover:text-brand-accent transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Link>

            {/* Title */}
            <h2 className="font-display font-bold text-2xl tracking-tight mb-2 text-text-primary">
              Masuk ke Akunmu
            </h2>
            <p className="text-xs leading-relaxed mb-6 text-text-muted">
              Selamat datang kembali. Silakan masuk menggunakan Email &amp; Password atau akun Google Anda.
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
                label="Email"
                iconType="email"
                inputType="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="nama@email.com"
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
                placeholder="••••••••"
                error={errors.password}
                successStatus={passwordStatus === 'valid' ? 'valid' : null}
                warningStatus={passwordStatus === 'invalid' ? 'invalid' : null}
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-sm bg-button-gradient text-white hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-glow mt-2"
              >
                Masuk
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border-default" />
              <span className="text-xs text-text-muted">atau</span>
              <div className="flex-1 h-px bg-border-default" />
            </div>

            {/* Social login */}
            <button type="button" disabled aria-disabled="true" title="Login Google belum tersedia" className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm border border-border-default bg-bg-subtle text-text-muted cursor-not-allowed opacity-70`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Masuk dengan Google
            </button>

            {/* Footer links */}
            <div className={`mt-8 pt-5 border-t border-border-default text-center flex flex-col items-center gap-2`}>
              <p className="text-[11px] leading-relaxed text-text-muted">
                Belum punya akun? <Link to="/register" className="text-violet-500 hover:text-violet-700 transition-colors font-medium">Daftar di sini</Link>
              </p>
              <p className="text-[11px] text-text-muted">
                Lupa password? <span
                  aria-disabled="true"
                  title="Belum tersedia"
                  className="text-text-muted cursor-not-allowed"
                >
                  Hubungi kami
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
