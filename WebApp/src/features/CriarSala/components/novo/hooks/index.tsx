import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSalas } from './queryes';

import { z } from 'zod';

export const FlashcardSchema = z.object({
    pergunta: z.string().min(1, 'Pergunta é obrigatória'),
    resposta: z.string().min(1, 'Resposta é obrigatória'),
});

export const SalaSchema = z.object({
    nome: z.string().min(1, 'Nome é obrigatório'),
    descricao: z.string().optional(),
    turma: z.string().min(1, 'Turma é obrigatória'),
    instituicao_id: z.number().min(1, 'Instituição é obrigatória'),
    professor_id: z.number().min(1, 'Professor é obrigatório'),
    flashcards: z.array(FlashcardSchema).min(1, 'Adicione pelo menos um flashcard'),
});


export type CriarSalaComFlashcardsForm = z.infer<typeof SalaSchema>;


export const useSalaController = () => {
    const { post } = useSalas();

    const { setValue, register, handleSubmit, control, formState: { errors }, reset } = useForm<CriarSalaComFlashcardsForm>({ resolver: zodResolver(SalaSchema) });

    const handleSala = handleSubmit(async (data) => {
        try {
            await post(data);
            reset();
        } catch (error) {
            console.error(error);
        }
    });

    return {
        handleSala,
        register,
        control,
        errors,
        setValue,
        reset,
    };
};
