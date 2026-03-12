import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import NotasService, { type EditarNotaDto, type Nota } from '@features/notas/services';

export const useNotas = (deveBuscarTodos = true) => {
    const { data = [], isLoading, refetch } = useQuery<Nota[]>({
        queryKey: ['notas'],
        queryFn: () => NotasService.buscar(),
        enabled: deveBuscarTodos,
    });

    const { mutateAsync: put, isPending: editando } = useMutation({
        mutationKey: ['notas-editar'],
        mutationFn: async ({ id, ...data }: EditarNotaDto & { id: number }) => {
            await NotasService.editar(id, data);
        },
        onSuccess: () => {
            snackBar('Nota editada com sucesso', 'success');
            refetch();
        },
        onError: (error: any) => {
            const message = error?.response?.data?.error || 'Erro ao editar';
            snackBar(message, 'error');
        },
    });

    return { data, isLoading, editando, put };
};