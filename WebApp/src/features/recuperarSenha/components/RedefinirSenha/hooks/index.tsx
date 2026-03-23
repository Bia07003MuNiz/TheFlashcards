import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';
import { useRecuperarSenha } from '@features/recuperarSenha/hooks/queryes';

const RedefinirSenhaSchema = z.object({
  email: z.string(),
  codigo: z.string(), 
  novaSenha: z.string(),
});

type RedefinirSenhaForm = z.infer<typeof RedefinirSenhaSchema>;

export const useRedefinirSenha = (email: string, codigo: string) => {
  const { put, isPendingPut } = useRecuperarSenha();
  const navigate = useNavigate();

  const form = useForm<RedefinirSenhaForm>({
    resolver: zodResolver(RedefinirSenhaSchema),
    defaultValues: { email, codigo },
  });

  const RedefinirSenha = form.handleSubmit(async (data) => {
    console.log('Dados enviados para redefinir novaSenha:', data);
    await put(data);
    navigate(rotas.LOGIN);
  });

  return {
    RedefinirSenha,
    register: form.register,
    errors: form.formState.errors,
    isPendingPut,
  };
};