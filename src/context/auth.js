/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null,
  );

  const login = () => {
    setcurrentUser({
      id: 1,
      name: 'Ara Ara',
      profilePic: 'https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
  );
}
