import responderFlashcardsService, {
  type ResponderFlashcards,
  type ResponderFlashcardsResponse
} from '@features/responderFlashcards/services';

import { useMutation } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';

export const useResponderFlashcards = () => {

  const { mutateAsync: responder, isPending } = useMutation<
    ResponderFlashcardsResponse,
    any,
    ResponderFlashcards
  >({
    mutationKey: ['responder-flashcards'],
    mutationFn: async (dto) => {
      return responderFlashcardsService.criar(dto);
    },

    onSuccess: () => {
      snackBar('Flashcards respondidos com sucesso', 'success');
    },

    onError: (error: any) => {
      const message = error?.response?.data?.error || 'Erro ao responder flashcards';
      snackBar(message, 'error');
    },
  });

  return {
    responder,
    isPending
  };
};