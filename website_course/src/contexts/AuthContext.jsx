import { useState } from 'react';
import { AuthContext } from './AuthContextContext';

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
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
