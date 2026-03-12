import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useNotas } from './queryes';

export const NotasShema = z.object({
    titulo: z.string().min(1),
    descricao: z.string().optional(),
    prioridade: z.enum(["ALTA", "MEDIA", "BAIXA"]),
    ativa: z.boolean(),
});
export type CriarNotasForm = z.infer<typeof NotasShema>;

export const useNotasController = (onFechar?: () => void) => {
    const { post } = useNotas();

    const {
        control,
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<CriarNotasForm>({
        resolver: zodResolver(NotasShema),
        defaultValues: {
            ativa: true,
        },
    });

    const handleNotas = handleSubmit(async (data) => {
        await post(data);
        reset();
        onFechar?.();
    });

    return {
        handleNotas,
        register,
        control,
        errors,
        watch,
        setValue
    };
};