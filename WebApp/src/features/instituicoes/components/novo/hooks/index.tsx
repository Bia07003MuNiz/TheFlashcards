import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useInstituicoes } from './queryes';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';

const InstituicaoSchema = z.object({
    nome: z.string().min(1),
    cep: z.string().min(1),
    numero: z.string().min(1),
    bairro: z.string().min(1),
    cidade: z.string().min(1),
    rua: z.string().min(1),
    estado: z.string().min(1),
});

export type CriarInstituicaoForm = z.infer<typeof InstituicaoSchema>;

export const useInstituicaoController = () => {
    const { post, isLoading } = useInstituicoes();
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
        defaultValues: {
            nome: '',
            cep: '',
            numero: '',
            bairro: '',
            cidade: '',
            rua: '',
            estado: '',
        },
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
        isLoading
    };
};
