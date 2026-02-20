import salaService, { type SalaListagem } from '@features/CriarSala/services';
import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';

export const useSalasBuscar = (deveBuscarTodos = true) => {
    const { data = [], isLoading, refetch } = useQuery<SalaListagem[]>({
        queryKey: ['salas'],
        queryFn: () => salaService.buscar(),
        enabled: deveBuscarTodos,
    });

    const { mutateAsync: post, isPending } = useMutation({
        mutationKey: ['salas'],
        mutationFn: async (data: any) => {
            await salaService.criar(data);
        },
        onSuccess: () => {
            snackBar('Sala Criada com sucesso', 'success');
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
