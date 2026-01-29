import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLoginServiceHooks } from './service';

const LoginSchema = z.object({
  senha: z.string().min(1, 'Senha é obrigatório *'),
  email: z.string().email({ message:'Email fora de padrão' }),
});

export type LoginDto = z.infer<typeof LoginSchema>;

export const useLoginController = () => {
  const { estaLogando, logar } = useLoginServiceHooks();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    setValue,
    watch,
  } = useForm<LoginDto>({
    resolver: zodResolver(LoginSchema),
  });

  const handleLogar = handleSubmit(async(infos) => logar(infos));

  return {
    handleLogar,
    register,
    errors,
    control,
    trigger,
    setValue,
    watch,
    estaLogando,
  };
};
