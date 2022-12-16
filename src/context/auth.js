/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null,
  );

  const login = async (inputs) => {
    const res = await axios.post('http://localhost:8800/api/auth/login', inputs, {
      withCredentials: true,
    });

    setcurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
  );
}
