import { ApiDeleteUser, ApiGetUser, ApiUpdateUser } from '../../@types/Auth';
import { api } from '../api';

export async function getUser() {
  return await api<ApiGetUser>({
    endpoint: 'auth/me',
  });
}

export async function updateUser(name: string, email: string) {
  return await api<ApiUpdateUser>({
    endpoint: 'users',
    method: 'PUT',
    data: { name, email },
  });
}

export async function deleteUser() {
  return await api<ApiDeleteUser>({
    endpoint: 'users',
    method: 'DELETE',
  });
}
