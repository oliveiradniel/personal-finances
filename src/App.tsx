import { useEffect } from 'react';

import useAuth from './hooks/useAuth';
import useTheme from './hooks/useTheme';

import { darkTheme } from './assets/styles/themes/darkTheme';
import { lightTheme } from './assets/styles/themes/lightTheme';

import { ThemeProvider } from 'styled-components';

import './index.css';
import Alert from './components/Alert';

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
    <ThemeProvider theme={themeDirection}>
      <div>Personal Finances</div>
      <Alert
        isVisible={true}
        setIsVisible={() => {}}
        type="success"
        title="Hello"
      />
    </ThemeProvider>
  );
}
