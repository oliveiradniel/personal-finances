import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks';

import Loader from '../components/Loader';

type AuthMiddlewareProps = {
  children: React.ReactNode;
};

export default function AuthMiddleware({ children }: AuthMiddlewareProps) {
  const { authStatus } = useAppSelector((state) => state.auth);

  if (authStatus === 'authenticated') {
    return children;
  }

  if (authStatus === 'not_verified') {
    return <Loader />;
  }

  return <Navigate to={`/signup`} />;
}
