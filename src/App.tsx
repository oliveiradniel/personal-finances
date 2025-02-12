import { useEffect } from "react";

import useAuth from "./hooks/useAuth";

export default function App() {
  const { handleAuthenticateUser } = useAuth();

  useEffect(() => {
    // Authenticate user using token saved in local storage
    handleAuthenticateUser();
  }, [handleAuthenticateUser]);

  return <div>Personal Finances</div>;
}
