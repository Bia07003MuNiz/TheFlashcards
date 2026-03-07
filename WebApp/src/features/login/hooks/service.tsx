
import { useMutation } from '@tanstack/react-query';
import loginService from '../services/index';
import { snackBar } from '@utils/SnackBar';
import type { LoginDto } from './formulario';
import useAuth from '@contexts/AuthContext';

export const useLoginServiceHooks = () => {
  const { signInHandler } = useAuth();

  const {
    mutateAsync: logar,
    isPending: estaLogando,
  } = useMutation({
    mutationKey: ['Login'],
    mutationFn: async (infos: LoginDto) => {
      return await loginService.login(infos);
    },
    onError: (error: any) => {
      snackBar(error?.response?.data?.error, 'error');
    },
    onSuccess: (dto) => {
      signInHandler(dto?.data?.token);
    }
  });

  return { logar, estaLogando };

};
