/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false,
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>{children}</DarkModeContext.Provider>
  );
}
