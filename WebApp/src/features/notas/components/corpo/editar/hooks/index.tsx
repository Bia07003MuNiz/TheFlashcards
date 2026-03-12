import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { useNotas } from './queryes';
import { useEffect } from 'react';
import type { Nota } from '@features/notas/services';

export const NotasShema = z.object({
    titulo: z.string().min(1),
    descricao: z.string().optional(),
    prioridade: z.enum(["ALTA", "MEDIA", "BAIXA"]),
});
export type EditarNotasForm = z.infer<typeof NotasShema>;

export const useNotasController = (onFechar?: () => void, nota?: Nota | null) => {
    const { put } = useNotas();

    const { control, register, watch, handleSubmit, formState: { errors }, reset, setValue } = useForm<EditarNotasForm>({
        resolver: zodResolver(NotasShema),
        defaultValues: {
            titulo: nota?.titulo ?? '',
            descricao: nota?.descricao ?? '',
            prioridade: nota?.prioridade ?? undefined,
        },
    });

    useEffect(() => {
        if (nota) {
            reset({
                titulo: nota.titulo,
                descricao: nota.descricao,
                prioridade: nota.prioridade,
            });
        }
    }, [nota]);

    const handleNotas = handleSubmit(async (data) => {
        await put({ id: nota!.id, ...data });
        reset();
        onFechar?.();
    });

    return { handleNotas, register, control, errors, watch, setValue };
};