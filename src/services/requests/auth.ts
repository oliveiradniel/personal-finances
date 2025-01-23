import { api } from './../api';

import { ApiSignIn, ApiSignUp } from '../../@types/Auth';

export async function signUp(name: string, email: string, password: string) {
  return await api<ApiSignUp>({
    endpoint: 'auth/signup',
    method: 'POST',
    data: { name, email, password },
    withAuth: false,
  });
}

export async function signIn(email: string, password: string) {
  return await api<ApiSignIn>({
    endpoint: 'auth/signin',
    method: 'POST',
    data: { email, password },
    withAuth: false,
  });
}
