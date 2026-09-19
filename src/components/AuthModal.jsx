import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

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

function Field({ label, iconType, inputType, name, value, onChange, placeholder, error, successStatus, warningStatus, strength }) {
  const rightIcon = () => {
    if (successStatus === 'valid') return (
      <span className="text-green-400 animate-pop-in"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
    );
    if (successStatus === 'match') return (
      <span className="text-green-400 animate-pop-in"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
    );
    if (warningStatus === 'invalid') return (
      <span className="text-red-400 animate-pop-in"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
    );
    if (warningStatus === 'mismatch') return (
      <span className="text-red-400 animate-pop-in"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
    );
    return null;
  };

  const borderClass = () => {
    if (error) return 'border-red-500';
    if (successStatus === 'valid' || successStatus === 'match') return 'border-green-500/60 focus:border-green-500';
    if (warningStatus === 'invalid' || warningStatus === 'mismatch') return 'border-red-500';
    return 'border-white/10 focus:border-brand-violet';
  };

  return (
    <div>
      <label className="block text-xs font-medium text-gray-400 mb-1.5">{label}</label>
      <div className="relative group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-colors group-focus-within:text-brand-violet">
          {ICONS[iconType]}
        </span>
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-[rgba(30,27,75,0.5)] border rounded-lg pl-11 pr-12 py-3 text-white text-sm placeholder-gray-500 outline-none transition-all ${borderClass()}`}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 flex-shrink-0">
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
                    : 'bg-white/10'
                }`}
              />
            ))}
          </div>
          <p className={`text-xs transition-colors ${
            strength.color === 'red' ? 'text-red-400'
            : strength.color === 'orange' ? 'text-orange-400'
            : strength.color === 'yellow' ? 'text-yellow-400'
            : 'text-green-400'
          }`}>{strength.label}</p>
        </div>
      )}
      {successStatus === 'match' && (
        <p className="mt-1 text-xs text-green-400">Password cocok</p>
      )}
      {warningStatus === 'mismatch' && (
        <p className="mt-1 text-xs text-red-400">Password tidak cocok</p>
      )}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
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

function AuthModal({ isOpen, onClose, defaultTab = 'login', onSwitchTab }) {
  const [tab, setTab] = useState(defaultTab);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState('neutral');
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [confirmMatch, setConfirmMatch] = useState('neutral');
  const [isClosing, setIsClosing] = useState(false);
  const { login, register } = useAuth();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (message.text) setMessage({ type: '', text: '' });

    if (name === 'email') {
      setEmailStatus(checkEmail(value));
    }
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
      if (form.confirmPassword) setConfirmMatch(checkConfirmMatch(value, form.confirmPassword));
    }
    if (name === 'confirmPassword') {
      setConfirmMatch(checkConfirmMatch(form.password, value));
    }
  };

  useEffect(() => {
    setTab(defaultTab);
    setErrors({});
    setMessage({ type: '', text: '' });
    setEmailStatus('neutral');
    setPasswordStrength(null);
    setConfirmMatch('neutral');
    setIsClosing(false);
  }, [defaultTab, isOpen]);

  const validateLogin = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Format email tidak valid';
    if (!form.password) errs.password = 'Password wajib diisi';
    else if (form.password.length < 6) errs.password = 'Password minimal 6 karakter';
    return errs;
  };

  const validateRegister = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Nama lengkap wajib diisi';
    if (!form.email.trim()) errs.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Format email tidak valid';
    if (!form.password) errs.password = 'Password wajib diisi';
    else if (form.password.length < 6) errs.password = 'Password minimal 6 karakter';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Password tidak cocok';
    return errs;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const errs = validateLogin();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      login(form.email, form.email.split('@')[0]);
      setMessage({ type: 'success', text: 'Berhasil masuk!' });
      setErrors({});
      setTimeout(() => onClose(), 800);
    }, 600);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const errs = validateRegister();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      register(form.name, form.email);
      setMessage({ type: 'success', text: 'Pendaftaran berhasil! Selamat datang.' });
      setErrors({});
      setTimeout(() => onClose(), 800);
    }, 600);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Masuk atau Daftar">
      <div className={`auth-modal-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-200 ${isClosing ? 'opacity-0' : 'opacity-100'}`} onClick={handleClose} />
      <div className={`auth-modal-card relative w-full max-w-md transition-all duration-200 ${isClosing ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
        {/* Close button */}
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10" aria-label="Tutup">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6 pt-2">
          <img src="https://lms-v2.infinitelearningstudent.id/logo-white.png" alt="Infinite Learning" className="h-8 w-auto object-contain" />
        </div>

        {/* Title */}
        <h2 className="text-center font-display font-bold text-xl text-white mb-6">
          {tab === 'login' ? 'Masuk ke Akunmu' : 'Buat Akun Baru'}
        </h2>

        {/* Tabs */}
        <div className="flex mb-6 bg-[rgba(30,27,75,0.5)] rounded-full p-1 border border-white/5">
          <button
            onClick={() => { setTab('login'); setErrors({}); setMessage({ type: '', text: '' }); setEmailStatus('neutral'); setPasswordStrength(null); setConfirmMatch('neutral'); onSwitchTab && onSwitchTab('login'); }}
            className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              tab === 'login' ? 'bg-button-gradient text-white shadow-glow' : 'text-gray-400 hover:text-white'
            }`}
          >
            Masuk
          </button>
          <button
            onClick={() => { setTab('register'); setErrors({}); setMessage({ type: '', text: '' }); setEmailStatus('neutral'); setPasswordStrength(null); setConfirmMatch('neutral'); onSwitchTab && onSwitchTab('register'); }}
            className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              tab === 'register' ? 'bg-button-gradient text-white shadow-glow' : 'text-gray-400 hover:text-white'
            }`}
          >
            Daftar
          </button>
        </div>

        {/* Message */}
        {message.text && (
          <div className={`mb-4 px-4 py-3 rounded-lg text-sm text-center ${
            message.type === 'success' ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-red-500/15 text-red-400 border border-red-500/30'
          }`}>
            {message.text}
          </div>
        )}

        {/* Form */}
        {tab === 'login' ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <Field
              label="Email"
              iconType="email"
              inputType="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="contoh@email.com"
              error={errors.email}
              warningStatus={emailStatus === 'invalid' ? 'invalid' : null}
            />
            <Field
              label="Password"
              iconType="password"
              inputType="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimal 6 karakter"
              error={errors.password}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-premium bg-button-gradient text-white py-3 rounded-lg font-semibold text-sm shadow-glow disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Memproses...' : 'Masuk'}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Lupa password? <a href="#" className="text-brand-accent hover:text-white transition-colors">Hubungi kami</a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            <Field
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
              className="w-full btn-premium bg-button-gradient text-white py-3 rounded-lg font-semibold text-sm shadow-glow disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {loading ? 'Memproses...' : 'Daftar Sekarang'}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Sudah punya akun? <button type="button" onClick={() => { setTab('login'); setErrors({}); setMessage({ type: '', text: '' }); setEmailStatus('neutral'); setPasswordStrength(null); setConfirmMatch('neutral'); onSwitchTab && onSwitchTab('login'); }} className="text-brand-accent hover:text-white transition-colors">Masuk di sini</button>
            </p>
          </form>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-gray-500">atau</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social login placeholders */}
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 py-2.5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
