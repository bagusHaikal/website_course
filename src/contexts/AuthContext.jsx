import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('il_user_session');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('il_user_session');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email, name) => {
    const userData = { email, name, loggedInAt: Date.now() };
    setUser(userData);
    localStorage.setItem('il_user_session', JSON.stringify(userData));
    return userData;
  };

  const register = (name, email) => {
    const userData = { email, name, loggedInAt: Date.now() };
    setUser(userData);
    localStorage.setItem('il_user_session', JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('il_user_session');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
