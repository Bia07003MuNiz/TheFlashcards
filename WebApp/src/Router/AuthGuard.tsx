import { useMeuPerfil } from '@features/perfil/hooks/queryes';
import { useEffect, type FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';
import localStorageService from '@services/localStorage.service';

interface AuthGuardProps {
  isPrivate: boolean;
}
export const AuthGuard: FC<AuthGuardProps> = ({ isPrivate }) => {
  const token = localStorageService.getToken();
  const isAuthenticated = !!token;

  const { meuPerfil, refetch, estaCarregandoMeuPerfil } = useMeuPerfil();

  useEffect(() => {
    if (isAuthenticated) {
      refetch();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && estaCarregandoMeuPerfil) {
    return null;
  }

  if (isAuthenticated && !isPrivate) {
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