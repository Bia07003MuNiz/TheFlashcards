import useAuth from '@contexts/AuthContext';
import type { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
interface AuthGuardProps {
  isPrivate: boolean;
}

export const AuthGuard: FC<AuthGuardProps> = ({ isPrivate }) => {
  const { signIn } = useAuth();

  if (!signIn && isPrivate) {
    return <Navigate to={'/login'} replace />;
  }

  if (signIn && !isPrivate) {
    return <Navigate to={'/sala'} replace />;
  }

  return <Outlet />;
};
