import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    // Simple authentication - replace with real auth in production
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};