import { useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

import useAuth from './hooks/useAuth';
import useTheme from './hooks/useTheme';

import Router from './routes';

import { darkTheme } from './assets/styles/themes/darkTheme';
import { lightTheme } from './assets/styles/themes/lightTheme';

import { ThemeProvider } from 'styled-components';

import './index.css';

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
