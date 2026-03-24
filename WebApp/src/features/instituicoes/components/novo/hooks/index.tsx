import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useInstituicoes } from './queryes';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';

export const InstituicaoSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  rua: z.string().min(1, "Rua é obrigatória"),
  numero: z.string().min(1, "Número é obrigatório"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  estado: z.string().length(2, "Estado deve ter 2 caracteres")
});

export type CriarInstituicaoForm = z.infer<typeof InstituicaoSchema>;

export const useInstituicaoController = () => {
    const { post, isPending } = useInstituicoes();
    const navigate = useNavigate();

    const {
        control,
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<CriarInstituicaoForm>({
        resolver: zodResolver(InstituicaoSchema),
    });

    const handleInstituicao = handleSubmit(async (data) => {
    const payload = {
      ...data,
    };

    await post(payload);
    reset();
    navigate(rotas.INSTITUICAO);
    });

    return {
        handleInstituicao,
        register,
        control,
        errors,
        watch,
        setValue,
        isPending
    };
};
