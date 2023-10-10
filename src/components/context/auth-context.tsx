'use client'
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  authLogin: () => {},
  authLogout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setAuthenticated] = useState(() => {
    // Initialize state from localStorage or default to false
    return localStorage.getItem('isAuthenticated') === 'true' || false;
  });

  const authLogin = () => {
    setAuthenticated(true);
  };

  const authLogout = () => {
    setAuthenticated(false);
  };

  useEffect(() => {
    // Check if localStorage is defined before using it
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('isAuthenticated', String(isAuthenticated));
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, authLogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
