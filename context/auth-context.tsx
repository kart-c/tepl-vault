'use client';

import { createContext, useEffect, useState } from 'react';

import { localStorageWithExpiry } from '@lib/localStorageWithExpiry';

export const AuthContext = createContext({
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
  isAdmin: false,
});

function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorageWithExpiry.get('role');

    if (role) {
      setIsLoggedIn(true);
      if (role === process.env.ROLE_ONE) {
        setIsAdmin(true);
      }
    }
  }, []);

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
