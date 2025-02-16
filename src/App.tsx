import { useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import useAuth from './hooks/useAuth';
import useTheme from './hooks/useTheme';

import { darkTheme } from './assets/styles/themes/darkTheme';
import { lightTheme } from './assets/styles/themes/lightTheme';

import './index.css';
import Router from './routes';

export default function App() {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme, theme } = useTheme();

  const themeDirection = theme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    // Authenticate user using token saved in local storage
    handleAuthenticateUser();

    // Apply theme saved by user to local storage
    handleInitTheme();
  }, [handleAuthenticateUser, handleInitTheme]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeDirection}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
