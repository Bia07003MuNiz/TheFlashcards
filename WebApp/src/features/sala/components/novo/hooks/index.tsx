import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { useSalas } from './queryes';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';

const FlashcardTempSchema = z.object({
    pergunta: z.string().optional(),
    resposta: z.string().optional(),
});


export const SalaSchema = z.object({
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
            pergunta: z.string().min(1, 'Pergunta obrigatória'),
            resposta: z.string().min(1, 'Resposta obrigatória'),
        })
    ).min(1, 'Adicione pelo menos um flashcard'),
});

export type CriarSalaComFlashcardsForm = z.infer<typeof SalaSchema>;

export const useSalaController = () => {
    const { post } = useSalas();
    const navigate = useNavigate();

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
            ativa: true,
            permitir_tentativas: false,
            limite_tentativas: null,
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
      limite_tentativas: rest.permitir_tentativas
        ? rest.limite_tentativas ?? null
        : null,
    };

    await post(payload);
    reset();
    navigate(rotas.SALA);
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
