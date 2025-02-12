import { useEffect } from "react";

import useAuth from "./hooks/useAuth";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme } = useTheme();

  useEffect(() => {
    // Authenticate user using token saved in local storage
    handleAuthenticateUser();

    // Apply theme saved by user to local storage
    handleInitTheme();
  }, [handleAuthenticateUser, handleInitTheme]);

  return <div>Personal Finances</div>;
}
