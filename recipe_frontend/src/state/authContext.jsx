import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { login as apiLogin, register as apiRegister } from '../api/auth';

const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export function useAuth() {
  /** Hook to access authentication context. */
  return useContext(AuthContext);
}

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /**
   * Provides auth state (token, user) and actions (login, register, logout).
   * Persists token in localStorage under 'auth_token'.
   */
  const [token, setToken] = useState(() => localStorage.getItem('auth_token'));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('auth_user');
    try { return raw ? JSON.parse(raw) : null; } catch { return null; }
  });

  useEffect(() => {
    if (token) localStorage.setItem('auth_token', token);
    else localStorage.removeItem('auth_token');
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem('auth_user', JSON.stringify(user));
    else localStorage.removeItem('auth_user');
  }, [user]);

  const value = useMemo(() => ({
    token,
    user,
    isAuthenticated: Boolean(token),
    // PUBLIC_INTERFACE
    async login(email, password) {
      const res = await apiLogin(email, password);
      setToken(res.token);
      setUser(res.user || null);
      return res;
    },
    // PUBLIC_INTERFACE
    async register(email, password) {
      const res = await apiRegister(email, password);
      setToken(res.token);
      setUser(res.user || null);
      return res;
    },
    // PUBLIC_INTERFACE
    logout() {
      setToken(null);
      setUser(null);
    }
  }), [token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
