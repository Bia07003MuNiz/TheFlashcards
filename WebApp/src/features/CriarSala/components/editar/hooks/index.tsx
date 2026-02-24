import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';
import { useSalas } from './queryes';
import { z } from 'zod';
import type { EditarSalaComFlashcardsDto, SalaListagem } from '@features/CriarSala/services';

const FlashcardTempSchema = z.object({
    id: z.number().optional(),
    pergunta: z.string().optional(),
    resposta: z.string().optional(),
});

export const SalaSchema = z.object({
    id: z.number().optional(),
    nome: z.string().min(1),
    descricao: z.string().optional(),
    turma: z.string().min(1),

    ativa: z.boolean(),

    permitir_tentativas: z.boolean(),

    limite_tentativas: z
        .number()
        .nullable()
        .optional(),

    instituicao_id: z.number().min(1),
    professor_id: z.number().optional(),

    flashcardTemp: FlashcardTempSchema.optional(),

    flashcards: z.array(
        z.object({
            id: z.number().optional(),
            pergunta: z.string().min(1),
            resposta: z.string().min(1),
        })
    ),
});

export type CriarSalaComFlashcardsForm = z.infer<typeof SalaSchema>;

export const useSalaController = (sala?: any, id?: number) => {
    const { editar } = useSalas(id);

    const {
        control,
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<CriarSalaComFlashcardsForm>({
        resolver: zodResolver(SalaSchema),
        defaultValues: {
            flashcards: [],
        },
    });

    const { fields, append, remove, update } = useFieldArray({
        control,
        name: 'flashcards',
    });

    useEffect(() => {
        if (sala) {
            reset({
                id: sala.id,
                nome: sala.nome,
                descricao: sala.descricao,
                turma: sala.turma,
                ativa: sala.ativa,
                permitir_tentativas: sala.permitir_tentativas,
                limite_tentativas: sala.limite_tentativas ?? null,
                instituicao_id: sala.instituicao_id,
                professor_id: sala.professor_id,
                flashcards: sala.flashcards ?? [],
            });
        }
    }, [sala, reset]);

    const handleSala = handleSubmit(async (data) => {
        if (!id) return;

        const { flashcards, flashcardTemp, id: _, ...rest } = data;

        const payload: EditarSalaComFlashcardsDto = {
            ...rest,
            limite_tentativas: rest.permitir_tentativas
                ? rest.limite_tentativas ?? null
                : null,
        };

        await editar({
            id,
            payload,
        });
    });

    return {
        handleSala,
        register,
        control,
        errors,
        watch,
        append,
        remove,
        update,
        fields,
        setValue,
    };
};