import localStorageService from '@services/localStorage.service';
import { LoginComponentes } from '../components/containers/main';
import { Corpo } from '../components/containers/main/styles';
import { snackBar } from '@utils/SnackBar';
import { useEffect } from 'react';


export const LoginPagina = () => {
  useEffect(() => {
    const data = localStorageService.getObject('auth_snackbar');

    if (data?.message) {
      snackBar(data.message, data.type || 'warning', 4000);
      localStorageService.removeObject('auth_snackbar');
    }
  }, []);
  return (
    <Corpo>
      <LoginComponentes.LadoApresentacao/>
      <LoginComponentes.ConteudoPrincipal/>
    </Corpo>
  );
};
