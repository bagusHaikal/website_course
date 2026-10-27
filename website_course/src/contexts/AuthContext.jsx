/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from 'react';

const AuthContext = createContext({ user: null, login: () => {}, register: () => {}, logout: () => {}, updateProfile: () => {} });

function getStoredUser() {
  try {
    const stored = localStorage.getItem('il_user_session');
    return stored ? JSON.parse(stored) : null;
  } catch {
    localStorage.removeItem('il_user_session');
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);

  const login = (email, name, role = 'student') => {
    const userData = { email, name, role, loggedInAt: Date.now() };
    setUser(userData);
    localStorage.setItem('il_user_session', JSON.stringify(userData));
    return userData;
  };

  const register = (name, email) => {
    const userData = { email, name, role: 'student', loggedInAt: Date.now() };
    setUser(userData);
    localStorage.setItem('il_user_session', JSON.stringify(userData));
    return userData;
  };

  const switchRole = (role) => {
    setUser((prev) => {
      if (!prev) return null;
      const updated = { ...prev, role };
      localStorage.setItem('il_user_session', JSON.stringify(updated));
      return updated;
    });
  };

  const updateProfile = (updates) => {
    setUser((prev) => {
      const updated = { ...prev, ...updates };
      localStorage.setItem('il_user_session', JSON.stringify(updated));
      return updated;
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('il_user_session');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext };
