import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import instituicaoService, { type InstituicaoListagem } from '@features/instituicoes/services';

export const useInstituicoes = (deveBuscarTodos = true) => {
    const { data = [], isLoading, refetch } = useQuery<InstituicaoListagem[]>({
        queryKey: ['instituicoes'],
        queryFn: () => instituicaoService.buscar(),
        enabled: deveBuscarTodos,
    });

    const { mutateAsync: post, isPending } = useMutation({
        mutationKey: ['instituicoes'],
        mutationFn: async (data: any) => {
            await instituicaoService.criar(data);
        },
        onSuccess: () => {
            snackBar('Instituição Criada com sucesso', 'success');
            refetch();
        },
        onError: (error: any) => {
            const message = error?.response?.data?.error || 'Erro ao salvar';
            snackBar(message, 'error');
            return message;
        },
    });

    return { data, isLoading, isPending, post };
};
