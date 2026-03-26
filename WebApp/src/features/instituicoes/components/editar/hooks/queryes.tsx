import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import instituicaoService from '@features/instituicoes/services';
import type { CriarInstituicaoForm } from '../../novo/hooks';

export const useInstituicao = (id?: number) => {
    const { data: buscaUnica, isLoading: isLoadingBuscaUnica, refetch } = useQuery({
        queryKey: ['Instituicao', 'detalhe', id],
        queryFn: async () => await instituicaoService.buscarPorId(id!),
        enabled: !!id,
    });
    const {
        mutateAsync: editar,
        isPending: estaEditando,
    } = useMutation({
        mutationKey: ['Instituicao'],
        mutationFn: async ({ id, payload }: {
            id: number, payload: CriarInstituicaoForm
        }) => {
            return await instituicaoService.atualizar(id, payload);
        },
        onError: (error: any) => {
            snackBar(error?.response?.data?.error, 'error');
        },
        onSuccess: () => {
            refetch();
            snackBar('Instituição atualizada com sucesso', 'success');

        },
    });

    return { editar, estaEditando, refetch, buscaUnica, isLoadingBuscaUnica };

};
