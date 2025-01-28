import { signIn, signUp } from "../services/requests/auth";

import { useAppDispatch } from "../redux/hooks";

import { User } from "../@types/Auth";

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

  function handleGetToken() {
    localStorage.getItem(LOCAL_STORAGE_KEY);
  }

  async function handleSignIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const request = await signIn(email, password);

    if (request.data) {
      const { data } = request;

      authenticate(data.user, data.authToken);
      return true;
    }

    dispatch(setAuthStatus("not_authenticated"));
    return request.err;
  }

  async function handleSignUp({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const request = await signUp(name, email, password);

    if (request.data) {
      const { data } = request;

      authenticate(data.user, data.authToken);
    }

    dispatch(setAuthStatus("not_authenticated"));
    return request.err;
  }

  return {
    authenticate,
    handleGetToken,
    handleSignIn,
    handleSignUp,
  };
}
