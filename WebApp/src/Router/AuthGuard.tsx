import useAuth from '@contexts/AuthContext';
import { useMeuPerfil } from '@features/perfil/hooks/queryes';
import type { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';

interface AuthGuardProps {
  isPrivate: boolean;
}

export const AuthGuard: FC<AuthGuardProps> = ({ isPrivate }) => {
  const { signIn } = useAuth();
  const { meuPerfil } = useMeuPerfil();

  if (!signIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signIn && !meuPerfil) {
    return null;
  }

  if (signIn && !isPrivate) {
    const role = meuPerfil?.role;

    if (role === 'ADMIN') {
      return <Navigate to={rotas.INSTITUICAO} replace />;
    }

    if (role === 'PROFESSOR') {
      return <Navigate to={rotas.SALA} replace />;
    }

    return <Navigate to={rotas.RESPONDER_SALA} replace />;
  }

  return <Outlet />;
};