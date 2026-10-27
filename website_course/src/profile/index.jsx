import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  BookOpen, BookMarked, HelpCircle, Heart, ShoppingCart, 
  FileText, Users, Settings as SettingsIcon, LogOut, 
  ChevronDown, CheckCircle, Clock, Award, 
  XCircle, Plus
} from 'lucide-react';
import ImageUploader from './components/ImageUploader';

const INSTRUCTOR_ONLY_TABS = ['courses', 'students'];

export default function ProfilePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, logout, updateProfile, switchRole } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const isLight = theme === 'light';
  const isInstructor = user?.role === 'instructor' || user?.role === 'admin';

  // Active tab & subtab from query params
  const requestedTab = searchParams.get('tab') || 'my-courses';
  const activeTab = (!isInstructor && INSTRUCTOR_ONLY_TABS.includes(requestedTab)) ? 'my-courses' : requestedTab;
  const activeSub = searchParams.get('sub') || 'general';

  const [settingsOpen, setSettingsOpen] = useState(activeTab === 'settings');

  // Form states for settings
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState(user?.bio || 'Belajar dan berkembang bersama Infinite Learning.');
  const [phone, setPhone] = useState(user?.phone || '081234567890');
  const [successMsg, setSuccessMsg] = useState('');

  // Password states
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // My courses filter state
  const [myCoursesFilter, setMyCoursesFilter] = useState('all');
  // Instructor courses filter state
  const [instructorFilter, setInstructorFilter] = useState('all');

  useEffect(() => {
    if (activeTab === 'settings') {
      setSettingsOpen(true);
    }
  }, [activeTab]);

  // Jika student mengakses tab khusus instruktur, kembalikan ke My Courses
  useEffect(() => {
    if (user && !isInstructor && INSTRUCTOR_ONLY_TABS.includes(requestedTab)) {
      setSearchParams({ tab: 'my-courses' }, { replace: true });
    }
  }, [user, isInstructor, requestedTab, setSearchParams]);

  // Sub-tab yang tidak dikenal (mis. deep link lama ?sub=cover) jatuh ke General
  useEffect(() => {
    const validSubs = ['general', 'avatar', 'password'];
    if (activeTab === 'settings' && !validSubs.includes(activeSub)) {
      setSearchParams({ tab: 'settings', sub: 'general' }, { replace: true });
    }
  }, [activeTab, activeSub, setSearchParams]);

  if (!user) {
    return (
      <div className={`min-h-[70vh] flex flex-col items-center justify-center p-6 ${isLight ? 'bg-bg-section text-gray-800' : 'bg-black text-white'}`}>
        <h2 className="text-xl font-bold mb-4">Anda belum masuk</h2>
        <Link to="/login" className="btn-premium bg-button-gradient text-white px-6 py-2.5 rounded-full font-semibold">
          Masuk Sekarang
        </Link>
      </div>
    );
  }

  const handleTabChange = (tab) => {
    if (tab === 'settings') {
      setSettingsOpen(true);
      setSearchParams({ tab: 'settings', sub: 'general' });
    } else {
      setSearchParams({ tab });
    }
  };

  const handleSubTabChange = (sub) => {
    setSearchParams({ tab: 'settings', sub });
  };

  const handleSaveGeneral = (e) => {
    e.preventDefault();
    updateProfile({ name, email, bio, phone });
    setSuccessMsg('Profil berhasil diperbarui!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Konfirmasi password baru tidak sesuai!');
      return;
    }
    setSuccessMsg('Kata sandi berhasil diubah!');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 ${isLight ? 'bg-gray-50 text-gray-900' : 'bg-[#0a0a0a] text-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SIDEBAR */}
        <aside className={`lg:col-span-1 rounded-2xl border p-6 flex flex-col justify-between h-fit shadow-glass ${isLight ? 'bg-white border-gray-200' : 'bg-[#121212] border-border-default'}`}>
          <div>
            {/* User Profile Header in Sidebar */}
            <div className="flex flex-col items-center text-center pb-6 border-b border-border-default">
              <div className="relative mb-3 group">
                <div className="w-24 h-24 rounded-full bg-button-gradient flex items-center justify-center text-white text-3xl font-bold overflow-hidden shadow-glow">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user.name?.charAt(0).toUpperCase()
                  )}
                </div>
              </div>
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-xs text-brand-accent mt-0.5 uppercase tracking-wider font-semibold">{user.role || 'Student'}</p>
              <p className="text-xs opacity-70 mt-1 truncate max-w-[200px]">{user.email}</p>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-1.5 mt-6">
              {/* Instructor-only menu: hidden for students */}
              {isInstructor && (
                <button
                  onClick={() => handleTabChange('courses')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'courses' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/5 text-text-secondary'}`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Courses</span>
                </button>
              )}

              <button
                onClick={() => handleTabChange('my-courses')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'my-courses' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/5 text-text-secondary'}`}
              >
                <BookMarked className="w-4 h-4" />
                <span>My Courses</span>
              </button>

              <button
                onClick={() => handleTabChange('quizzes')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'quizzes' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/5 text-text-secondary'}`}
              >
                <HelpCircle className="w-4 h-4" />
                <span>Quizzes</span>
              </button>

              <button
                onClick={() => handleTabChange('wishlist')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'wishlist' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/5 text-text-secondary'}`}
              >
                <Heart className="w-4 h-4" />
                <span>Wishlist</span>
              </button>

              <button
                onClick={() => handleTabChange('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'orders' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/5 text-text-secondary'}`}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Orders</span>
              </button>

              <button
                onClick={() => handleTabChange('notes')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'notes' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/5 text-text-secondary'}`}
              >
                <FileText className="w-4 h-4" />
                <span>Notes</span>
              </button>

              {/* Instructor-only menu: hidden for students */}
              {isInstructor && (
                <button
                  onClick={() => handleTabChange('students')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'students' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/5 text-text-secondary'}`}
                >
                  <Users className="w-4 h-4" />
                  <span>Students</span>
                </button>
              )}

              {/* Settings Accordion */}
              <div>
                <button
                  onClick={() => {
                    setSettingsOpen(!settingsOpen);
                    if (activeTab !== 'settings') handleTabChange('settings');
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'settings' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/5 text-text-secondary'}`}
                >
                  <div className="flex items-center gap-3">
                    <SettingsIcon className="w-4 h-4" />
                    <span>Settings</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${settingsOpen ? 'rotate-180' : ''}`} />
                </button>

                {settingsOpen && (
                  <div className={`pl-4 mt-1 space-y-1 border-l-2 ml-4 ${isLight ? 'border-gray-200' : 'border-border-default'}`}>
                    <button
                      onClick={() => handleSubTabChange('general')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeSub === 'general' && activeTab === 'settings' ? 'text-brand-accent font-semibold' : 'opacity-70 hover:opacity-100'}`}
                    >
                      General
                    </button>
                    <button
                      onClick={() => handleSubTabChange('avatar')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeSub === 'avatar' && activeTab === 'settings' ? 'text-brand-accent font-semibold' : 'opacity-70 hover:opacity-100'}`}
                    >
                      Avatar
                    </button>
                    <button
                      onClick={() => handleSubTabChange('password')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${activeSub === 'password' && activeTab === 'settings' ? 'text-brand-accent font-semibold' : 'opacity-70 hover:opacity-100'}`}
                    >
                      Password
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* TODO(backend): HAPUS blok simulasi role ini setelah backend siap.
              Role akan dikirim dari API login/register (user.role). */}
          <div className="mt-6 pt-4 border-t border-border-default">
            <p className="text-[10px] font-semibold uppercase tracking-wider opacity-50 mb-2 px-1">
              Simulasi Role (dev)
            </p>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => switchRole('student')}
                className={`flex-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${user.role === 'student' ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => switchRole('instructor')}
                className={`flex-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${isInstructor ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
              >
                Instructor
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <div className="pt-6 mt-6 border-t border-border-default">
            <button
              onClick={() => { logout(); navigate('/'); }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="lg:col-span-3 space-y-6">

          {successMsg && (
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-2">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* 1. COURSES TAB (Instructor View) */}
          {activeTab === 'courses' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Total Course</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Published Course</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Pending Course</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second row stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Total Student</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Student Completed</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Student In-progress</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters & Action */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-default">
                  <div className="flex items-center gap-2">
                    {['all', 'publish', 'pending'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setInstructorFilter(filter)}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${instructorFilter === filter ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                  <button className="btn-premium bg-button-gradient text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-glow">
                    <Plus className="w-4 h-4" />
                    <span>Course Builder</span>
                  </button>
                </div>

                <div className="py-16 text-center">
                  <p className="text-sm opacity-60">No Course available!</p>
                </div>
              </div>
            </div>
          )}

          {/* 2. MY COURSES TAB (Student View) */}
          {activeTab === 'my-courses' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Enrolled Course</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Inprogress Course</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Finished Course</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Passed Course</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Failed Course</p>
                      <h3 className="text-2xl font-bold">0</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
                <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-border-default">
                  {['all', 'in-progress', 'finished', 'passed', 'failed'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setMyCoursesFilter(filter)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${myCoursesFilter === filter ? 'bg-button-gradient text-white shadow-glow' : isLight ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/5 text-text-secondary hover:bg-white/10'}`}
                    >
                      {filter.replace('-', ' ')}
                    </button>
                  ))}
                </div>

                <div className="py-16 text-center">
                  <p className="text-sm opacity-60">Belum ada kursus yang diikuti.</p>
                </div>
              </div>
            </div>
          )}

          {/* 3. QUIZZES TAB */}
          {activeTab === 'quizzes' && (
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
              <h3 className="text-lg font-bold mb-4">Riwayat Kuis</h3>
              <div className="py-12 text-center opacity-60 text-sm">Belum ada kuis yang dikerjakan.</div>
            </div>
          )}

          {/* 4. WISHLIST TAB */}
          {activeTab === 'wishlist' && (
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
              <h3 className="text-lg font-bold mb-4">Kelas Favorit (Wishlist)</h3>
              <div className="py-12 text-center opacity-60 text-sm">Belum ada kelas di wishlist Anda.</div>
            </div>
          )}

          {/* 5. ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
              <h3 className="text-lg font-bold mb-4">Riwayat Pesanan</h3>
              <div className="py-12 text-center opacity-60 text-sm">Belum ada transaksi pembelian.</div>
            </div>
          )}

          {/* 6. NOTES TAB */}
          {activeTab === 'notes' && (
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
              <h3 className="text-lg font-bold mb-4">Catatan Belajar</h3>
              <div className="py-12 text-center opacity-60 text-sm">Belum ada catatan yang dibuat.</div>
            </div>
          )}

          {/* 7. STUDENTS TAB */}
          {activeTab === 'students' && (
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
              <h3 className="text-lg font-bold mb-4">Daftar Siswa</h3>
              <div className="py-12 text-center opacity-60 text-sm">Belum ada siswa terdaftar.</div>
            </div>
          )}

          {/* 8. SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className={`p-6 rounded-2xl border space-y-6 ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-[#121212] border-border-default'}`}>
              <div className="border-b border-border-default pb-4">
                <h3 className="text-lg font-bold capitalize">Pengaturan {activeSub}</h3>
                <p className="text-xs opacity-70 mt-0.5">Kelola informasi akun dan preferensi profil Anda.</p>
              </div>

              {/* Sub: General */}
              {activeSub === 'general' && (
                <form onSubmit={handleSaveGeneral} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider">Nama Lengkap</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${isLight ? 'bg-gray-50 border-gray-300 focus:border-brand-accent' : 'bg-black/40 border-border-default focus:border-brand-accent'}`}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${isLight ? 'bg-gray-50 border-gray-300 focus:border-brand-accent' : 'bg-black/40 border-border-default focus:border-brand-accent'}`}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider">Nomor Telepon</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${isLight ? 'bg-gray-50 border-gray-300 focus:border-brand-accent' : 'bg-black/40 border-border-default focus:border-brand-accent'}`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider">Bio Singkat</label>
                    <textarea
                      rows={3}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${isLight ? 'bg-gray-50 border-gray-300 focus:border-brand-accent' : 'bg-black/40 border-border-default focus:border-brand-accent'}`}
                    />
                  </div>

                  <button type="submit" className="btn-premium bg-button-gradient text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-glow">
                    Simpan Perubahan
                  </button>
                </form>
              )}

              {/* Sub: Avatar */}
              {activeSub === 'avatar' && (
                <ImageUploader
                  outputWidth={300}
                  outputHeight={300}
                  maxSizeMB={2}
                  value={user.avatar || ''}
                  label="Foto Profil / Avatar"
                  description="Format yang didukung: JPG, PNG, atau WEBP. Maksimal 2MB."
                  onSave={(dataUrl) => {
                    updateProfile({ avatar: dataUrl });
                    setSuccessMsg('Foto profil berhasil diperbarui!');
                    setTimeout(() => setSuccessMsg(''), 3000);
                  }}
                  onRemove={() => {
                    updateProfile({ avatar: '' });
                    setSuccessMsg('Foto profil berhasil dihapus.');
                    setTimeout(() => setSuccessMsg(''), 3000);
                  }}
                />
              )}

              {/* Sub: Password */}
              {activeSub === 'password' && (
                <form onSubmit={handleSavePassword} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider">Kata Sandi Lama</label>
                    <input
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${isLight ? 'bg-gray-50 border-gray-300 focus:border-brand-accent' : 'bg-black/40 border-border-default focus:border-brand-accent'}`}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider">Kata Sandi Baru</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${isLight ? 'bg-gray-50 border-gray-300 focus:border-brand-accent' : 'bg-black/40 border-border-default focus:border-brand-accent'}`}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 uppercase tracking-wider">Konfirmasi Kata Sandi Baru</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-colors ${isLight ? 'bg-gray-50 border-gray-300 focus:border-brand-accent' : 'bg-black/40 border-border-default focus:border-brand-accent'}`}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-premium bg-button-gradient text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-glow">
                    Ubah Kata Sandi
                  </button>
                </form>
              )}
            </div>
          )}

        </main>

      </div>
      </div>
    </div>
  );
}
