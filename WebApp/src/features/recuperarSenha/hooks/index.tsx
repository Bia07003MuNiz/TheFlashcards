import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRecuperarSenha } from './queryes';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';

const EnviarCodigoSchema = z.object({
  email: z.string().email("E-mail inválido"),
});

const ValidarCodigoSchema = z.object({
  email: z.string().email("E-mail inválido"),
  codigo: z.string().length(6, "Código deve ter 6 dígitos"),
});

type EnviarCodigoForm = z.infer<typeof EnviarCodigoSchema>;
type ValidarCodigoForm = z.infer<typeof ValidarCodigoSchema>;

export const useRecuperarSenhaController = () => {
  const { isPending, post, isPendingValidar, validar, isPendingPut, put } = useRecuperarSenha();
  const navigate = useNavigate();

  const formEnviar = useForm<EnviarCodigoForm>({
    resolver: zodResolver(EnviarCodigoSchema),
  });

  const formValidar = useForm<ValidarCodigoForm>({
    resolver: zodResolver(ValidarCodigoSchema),
  });

  const EnviarCodigo = formEnviar.handleSubmit(async (data) => {
    await post(data);
    navigate(rotas.ENVIAR_CODIGO, { state: { email: data.email } });
  });

  const ValidarCodigo = formValidar.handleSubmit(async (data) => {
  await validar(data);

  navigate(rotas.REDEFINIR_SENHA, {
    state: { email: data.email, codigo: data.codigo },
  });
});

  return {
    EnviarCodigo,
    registerEnviar: formEnviar.register,
    errorsEnviar: formEnviar.formState.errors,
    isPending,
    ValidarCodigo,
    registerValidar: formValidar.register,
    controlValidar: formValidar.control,
    errorsValidar: formValidar.formState.errors,
    isPendingValidar,
    watch: formValidar.watch,
    setValue: formValidar.setValue,

  };
};