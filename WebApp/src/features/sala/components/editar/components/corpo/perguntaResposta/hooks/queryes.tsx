import { useMutation, useQueryClient } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import flashcardsService, {
    type CriarFlashcardDto,
    type EditarFlashcardDto,
} from '@services/flashcards.service';

export const useFlashcards = (salaId: number) => {
    const queryClient = useQueryClient();

    const { mutateAsync: editar } = useMutation({
        mutationFn: async ({ id, payload }: { id: number; payload: EditarFlashcardDto }) => {
            return flashcardsService.editar(id, payload);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['sala', salaId] });
            snackBar('Flashcard atualizado com sucesso', 'success');
        },
    });

    const { mutateAsync: criar } = useMutation({
        mutationFn: async (payload: CriarFlashcardDto) => {
            return flashcardsService.criar(payload);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['sala', salaId] });
            snackBar('Flashcard criado com sucesso', 'success');
        },
    });

    return { editar, criar };
};