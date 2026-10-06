import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const LOGO_LIGHT = 'https://lms-v2.infinitelearningstudent.id/logo-black.png';
const LOGO_DARK = 'https://lms-v2.infinitelearningstudent.id/logo-white.png';

const ICONS = {
  email: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  password: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  name: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
};

function Field({ label, iconType, inputType, name, value, onChange, placeholder, error, isLight }) {
  const borderColor = error ? '#ef4444' : (isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)');
  const bgStyle = isLight ? { backgroundColor: 'rgba(248,245,255,0.9)', color: '#111827', borderColor } : { backgroundColor: 'rgba(30,27,75,0.5)', color: '#ffffff', borderColor };
  return (
    <div>
      <label htmlFor={name} className={'block text-xs font-semibold mb-1.5 ' + (isLight ? 'text-[#374151]' : 'text-[#D1D5DB]')}>{label}</label>
      <div className="relative">
        <span className={'absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ' + (isLight ? 'text-[#6B7280]' : 'text-[#9CA3AF]')}>{ICONS[iconType]}</span>
        <input id={name} type={inputType} name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full rounded-lg pl-11 pr-4 py-2.5 text-sm outline-none transition-all duration-200 disabled:cursor-not-allowed" style={bgStyle} />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function LoginForm({ isLight, onChange, errors, loading, message, handleSubmit }) {
  return (
    <>
      {message.text && (
        <div className={'mb-4 px-4 py-3 rounded-lg text-sm text-center ' + (message.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-600' : 'bg-red-500/10 border border-red-500/20 text-red-600')}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Field isLight={isLight} label="Email" iconType="email" inputType="email" name="email" value={onChange.target?.value ?? ''} onChange={onChange} placeholder="nama@email.com" error={errors.email} />
        <Field isLight={isLight} label="Password" iconType="password" inputType="password" name="password" value={onChange.target?.value ?? ''} onChange={onChange} placeholder="••••••••" error={errors.password} />
        <button type="submit" disabled={loading} className="w-full py-2.5 rounded-lg font-semibold text-sm bg-button-gradient text-white hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-glow mt-2">
          {loading ? 'Memproses...' : 'Masuk'}
        </button>
      </form>
      <div className="mt-4 pt-4 border-t border-border-default text-center">
        <p className={'text-[11px] ' + (isLight ? 'text-gray-500' : 'text-gray-400')}>
          Belum punya akun?{' '}
          <button onClick={() => onChange(null, 'register')} className="text-violet-500 hover:text-violet-700 transition-colors font-medium">Daftar di sini</button>
        </p>
      </div>
    </>
  );
}

function RegisterForm({ isLight, form, errors, loading, message, handleSubmit, onChange }) {
  return (
    <>
      {message.text && (
        <div className={'mb-4 px-4 py-3 rounded-lg text-sm text-center ' + (message.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-600' : 'bg-red-500/10 border border-red-500/20 text-red-600')}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Field isLight={isLight} label="Nama Lengkap" iconType="name" inputType="text" name="name" value={form.name} onChange={onChange} placeholder="Masukkan nama lengkap" error={errors.name} />
        <Field isLight={isLight} label="Email" iconType="email" inputType="email" name="email" value={form.email} onChange={onChange} placeholder="contoh@email.com" error={errors.email} />
        <Field isLight={isLight} label="Password" iconType="password" inputType="password" name="password" value={form.password} onChange={onChange} placeholder="Minimal 6 karakter" error={errors.password} />
        <Field isLight={isLight} label="Konfirmasi Password" iconType="password" inputType="password" name="confirmPassword" value={form.confirmPassword} onChange={onChange} placeholder="Ulangi password" error={errors.confirmPassword} />
        <button type="submit" disabled={loading} className="w-full py-2.5 rounded-lg font-semibold text-sm bg-button-gradient text-white hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-glow mt-2">
          {loading ? 'Memproses...' : 'Daftar Sekarang'}
        </button>
      </form>
      <div className="mt-4 pt-4 border-t border-border-default text-center">
        <p className={'text-[11px] ' + (isLight ? 'text-gray-500' : 'text-gray-400')}>
          Sudah punya akun?{' '}
          <button onClick={() => onChange(null, 'login')} className="text-violet-500 hover:text-violet-700 transition-colors font-medium">Masuk di sini</button>
        </p>
      </div>
    </>
  );
}

export default function AuthModal({ isOpen, onClose, defaultTab = 'login', onSwitchTab }) {
  const [tab, setTab] = useState(defaultTab);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState({ type: '', text: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [registerErrors, setRegisterErrors] = useState({});
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerMessage, setRegisterMessage] = useState({ type: '', text: '' });
  const { login, register } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isLight = theme === 'light';

  // Reset tab saat modal dibuka dengan tab baru
  useEffect(() => {
    if (isOpen) setTab(defaultTab);
  }, [isOpen, defaultTab]);

  if (!isOpen) return null;

  const handleLoginChange = (e) => {
    if (!e) { setTab('register'); return; }
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
    if (loginErrors[name]) setLoginErrors(prev => ({ ...prev, [name]: '' }));
    if (loginMessage.text) setLoginMessage({ type: '', text: '' });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!loginForm.email.trim()) errs.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)) errs.email = 'Format email tidak valid';
    if (!loginForm.password) errs.password = 'Password wajib diisi';
    else if (loginForm.password.length < 6) errs.password = 'Password minimal 6 karakter';
    if (Object.keys(errs).length) { setLoginErrors(errs); return; }
    setLoginLoading(true);
    setTimeout(() => {
      login(loginForm.email, loginForm.email.split('@')[0]);
      setLoginMessage({ type: 'success', text: 'Berhasil masuk!' });
      setLoginErrors({});
      setTimeout(() => { onClose(); navigate('/'); }, 600);
    }, 600);
  };

  const handleRegisterChange = (e) => {
    if (!e) { setTab('login'); return; }
    const { name, value } = e.target;
    setRegisterForm(prev => {
      const updated = { ...prev, [name]: value };
      if (registerErrors[name]) setRegisterErrors(errs => ({ ...errs, [name]: '' }));
      if (registerMessage.text) setRegisterMessage({ type: '', text: '' });
      return updated;
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!registerForm.name.trim()) errs.name = 'Nama lengkap wajib diisi';
    if (!registerForm.email.trim()) errs.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerForm.email)) errs.email = 'Format email tidak valid';
    if (!registerForm.password) errs.password = 'Password wajib diisi';
    else if (registerForm.password.length < 6) errs.password = 'Password minimal 6 karakter';
    if (registerForm.password !== registerForm.confirmPassword) errs.confirmPassword = 'Password tidak cocok';
    if (Object.keys(errs).length) { setRegisterErrors(errs); return; }
    setRegisterLoading(true);
    setTimeout(() => {
      register(registerForm.name, registerForm.email);
      setRegisterMessage({ type: 'success', text: 'Pendaftaran berhasil! Selamat datang.' });
      setRegisterErrors({});
      setTimeout(() => { onClose(); navigate('/login'); }, 800);
    }, 600);
  };

  const tabClass = (active) => active
    ? 'text-brand-accent border-b-2 border-brand-accent'
    : isLight ? 'text-gray-400 hover:text-gray-600' : 'text-text-muted hover:text-text-primary';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className={'relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fade-in ' + (isLight ? 'bg-white' : 'bg-bg-base border border-border-default')}>
        <div className="flex justify-center pt-6 pb-2">
          <img src={isLight ? LOGO_LIGHT : LOGO_DARK} alt="Infinite Learning" className="h-7 w-auto object-contain" />
        </div>
        <div className={'flex border-b ' + (isLight ? 'border-border-default' : 'border-border-default')}>
          <button onClick={() => { setTab('login'); onSwitchTab && onSwitchTab('login'); }} className={'flex-1 py-3 text-sm font-semibold transition-colors ' + tabClass(tab === 'login')}>Masuk</button>
          <button onClick={() => { setTab('register'); onSwitchTab && onSwitchTab('register'); }} className={'flex-1 py-3 text-sm font-semibold transition-colors ' + tabClass(tab === 'register')}>Daftar</button>
        </div>
        <div className="p-6">
          {tab === 'login' ? (
            <LoginForm isLight={isLight} onChange={handleLoginChange} errors={loginErrors} loading={loginLoading} message={loginMessage} handleSubmit={handleLoginSubmit} />
          ) : (
            <RegisterForm isLight={isLight} form={registerForm} errors={registerErrors} loading={registerLoading} message={registerMessage} handleSubmit={handleRegisterSubmit} onChange={handleRegisterChange} />
          )}
        </div>
        <button onClick={onClose} className={'absolute top-4 right-4 p-1 rounded-full transition-colors ' + (isLight ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-100' : 'text-gray-500 hover:text-white hover:bg-white/10')} aria-label="Tutup">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
}