import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect } from 'react';
import { useMeuPerfil } from './queryes';

export const UsuarioSchema = z.object({
  id: z.number(),
  nome: z.string().min(1),
  email: z.string(),
  role: z.enum(["PROFESSOR", "ALUNO", "ADMIN"]),
  data_nascimento: z.string(),
  created_at: z.string().optional(),
  instituicao_id: z.number()
});
export type Usuario = z.infer<typeof UsuarioSchema>;

export const useMeuUsuarioController = () => {
  const { meuPerfil, editar, estaEditando } = useMeuPerfil();

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Usuario>({
    resolver: zodResolver(UsuarioSchema),
    defaultValues: {
      nome: '',
      email: '',
      role: 'ALUNO',
    },
  });

  useEffect(() => {
    if (meuPerfil) {
      reset(meuPerfil);
    }
  }, [meuPerfil, reset]);

  const handleEditar = handleSubmit(async (dados) => {
    await editar({
      id: dados.id,
      payload: {
        nome: dados.nome,
        email: dados.email,
        role: dados.role,
        data_nascimento: dados.data_nascimento,
        instituicao_id: dados.instituicao_id,
        created_at: dados.created_at || ''
      },
    });
  });

  return {
    meuPerfil,
    register,
    control,
    errors,
    watch,
    setValue,
    handleEditar,
    estaEditando,
  };
};