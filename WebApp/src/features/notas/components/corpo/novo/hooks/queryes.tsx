import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import NotasService, { type CreateNotaDto, type Nota } from '@features/notas/services';

export const useNotas = (deveBuscarTodos = true) => {
    const { data = [], isLoading, refetch } = useQuery<Nota[]>({
        queryKey: ['notas'],
        queryFn: () => NotasService.buscar(),
        enabled: deveBuscarTodos,
    });

    const { mutateAsync: post, isPending } = useMutation({
        mutationKey: ['notas'],
        mutationFn: async (data: CreateNotaDto) => {
            await NotasService.criar(data);
        },
        onSuccess: () => {
            snackBar('Nota Criada com sucesso', 'success');
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
