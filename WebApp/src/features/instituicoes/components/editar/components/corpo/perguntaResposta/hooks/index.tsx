import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import flashcardService from '@services/flashcards.service';
import { useFlashcards } from './queryes';

const FlashcardSchema = z.object({
    id: z.number().optional(),
    pergunta: z.string().min(1, 'Pergunta obrigatória'),
    resposta: z.string().min(1, 'Resposta obrigatória'),
});

export type FlashcardForm = z.infer<typeof FlashcardSchema>;

export const useFlashcardController = (salaId: number) => {
    const { editar, criar } = useFlashcards(salaId);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        control,
        formState: { errors },
    } = useForm<FlashcardForm>({
        resolver: zodResolver(FlashcardSchema),
    });

    const salvar = async (data: FlashcardForm) => {
        if (data.id) {
            await editar({
                id: data.id,
                payload: {
                    pergunta: data.pergunta,
                    resposta: data.resposta,
                },
            });
        } else {
            await criar({
                pergunta: data.pergunta,
                resposta: data.resposta,
                sala_id: salaId,
            });
        }

        reset();
    };

    const iniciarEdicao = (flashcard: FlashcardForm) => {
        setValue('id', flashcard.id);
        setValue('pergunta', flashcard.pergunta);
        setValue('resposta', flashcard.resposta);
    };

    return {
        register,
        salvar: handleSubmit(salvar),
        iniciarEdicao,
        reset,
        watch,
        errors,
        control,
    };
};