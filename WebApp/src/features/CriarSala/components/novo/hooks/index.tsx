import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { useSalas } from './queryes';
import { z } from 'zod';

const FlashcardTempSchema = z.object({
    pergunta: z.string().optional(),
    resposta: z.string().optional(),
});


export const SalaSchema = z.object({
    nome: z.string().min(1),
    descricao: z.string().optional(),
    turma: z.string().min(1),
    instituicao_id: z.number().min(1),
    professor_id: z.number().optional(),
    flashcardTemp: FlashcardTempSchema.optional(),
    flashcards: z.array(
        z.object({
            pergunta: z.string().min(1, 'Pergunta obrigatória'),
            resposta: z.string().min(1, 'Resposta obrigatória'),
        })
    ).min(1, 'Adicione pelo menos um flashcard'),
});


export type CriarSalaComFlashcardsForm = z.infer<typeof SalaSchema>;

export const useSalaController = () => {
    const { post } = useSalas();

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

    const PROFESSOR_FIXO_ID = 1;

    const handleSala = handleSubmit(async (data) => {
        const { flashcardTemp, ...rest } = data;

        const payload = {
            ...rest,
            professor_id: PROFESSOR_FIXO_ID,
        };

        await post(payload);
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
        setValue
    };
};
