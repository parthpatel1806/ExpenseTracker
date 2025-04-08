import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); // named export

export const AuthProvider = ({ children }) => { // named export
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
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