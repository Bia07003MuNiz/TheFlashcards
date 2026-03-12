import notasService, { type InativarNotaDto, type Nota } from '@features/notas/services';
import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';

export const useNotasInativar = (deveBuscarTodos = true) => {
    const { data = [], isLoading, refetch } = useQuery<Nota[]>({
        queryKey: ['notas'],
        queryFn: () => notasService.buscar(),
        enabled: deveBuscarTodos,
    });

    const { mutateAsync: inativar, isPending: inativando } = useMutation({
        mutationKey: ['notas-inativar'],
        mutationFn: async ({ id, ativo }: InativarNotaDto) => {
            await notasService.inativar(id, {
                ativo, id
            });
        },
        onSuccess: () => {
            snackBar('Nota concluída com sucesso', 'success');
            refetch();
        },
        onError: (error: any) => {
            const message = error?.response?.data?.error || 'Erro ao inativar';
            snackBar(message, 'error');
        },
    });

    return { data, isLoading, inativar, inativando };

};
