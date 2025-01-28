import { User } from "../@types/Auth";

import { useAppDispatch } from "../redux/hooks";

import {
  setAuthStatus,
  setAuthToken,
  setUser,
} from "../redux/slices/authSlice";

const LOCAL_STORAGE_KEY = import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY;

export default function useAuth() {
  const dispatch = useAppDispatch();

  function authenticate(user: User, authToken: string) {
    dispatch(setUser(user));
    dispatch(setAuthToken(authToken));
    dispatch(setAuthStatus("authenticated"));

    localStorage.setItem(LOCAL_STORAGE_KEY, authToken);
  }

  return {
    authenticate,
  };
}
