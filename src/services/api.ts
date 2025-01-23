import axios, { AxiosError } from 'axios';

type APIProps = {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: object;
  withAuth?: boolean;
};

export async function api<TypeResponse>({
  endpoint,
  method = 'GET',
  data,
  withAuth = true,
}: APIProps) {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  if (withAuth) {
    instance.defaults.headers.common['Authorization'] = localStorage.getItem(
      import.meta.env.VITE_LOCAL_STORAGE_AUTH_KEY
    );
  }

  try {
    const request = await instance<TypeResponse>(endpoint, {
      method,
      params: method === 'GET' && data,
      data: method !== 'GET' && data,
    });

    return {
      data: request.data,
    };
  } catch (err) {
    const e = err as AxiosError<{ message: string }>;

    return {
      err: e.response?.data.message ?? e.message,
    };
  }
}
