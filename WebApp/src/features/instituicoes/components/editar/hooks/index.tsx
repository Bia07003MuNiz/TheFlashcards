import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useInstituicao } from './queryes';
import { z } from 'zod';
import type { CriarInstituicaoForm } from '../../novo/hooks';

const InstituicaoSchema = z.object({
    id: z.number().optional(),
    nome: z.string().min(1),
    cep: z.string().min(1),
    numero: z.string().min(1),
    bairro: z.string().min(1),
    cidade: z.string().min(1),
    rua: z.string().min(1),
    estado: z.string().min(1),
});

export type EditarInstituicaoForm = z.infer<typeof InstituicaoSchema>;

export const useInstituicaoController = (instituicao?: any, id?: number) => {
    const { editar } = useInstituicao(id);

    const {
        control, register, watch, handleSubmit, formState: { errors }, reset, setValue,
    } = useForm<EditarInstituicaoForm>({ resolver: zodResolver(InstituicaoSchema), defaultValues: {}, });

    useEffect(() => {
        if (instituicao) {
            reset({
                id: instituicao.id,
                nome: instituicao.nome,
                cep: instituicao.cep,
                numero: instituicao.numero,
                bairro: instituicao.bairro,
                cidade: instituicao.cidade,
                rua: instituicao.rua,
                estado: instituicao.estado,
            });
        }
    }, [instituicao, reset]);

    const handleInstituicao = handleSubmit(async (data) => {
        if (!id) return;
        const { id: _, ...rest } = data;
        const payload: CriarInstituicaoForm = { ...rest };
        await editar({ id, payload });
    });

    return {
        handleInstituicao,
        register,
        control,
        errors,
        watch,
        setValue,
    };
};