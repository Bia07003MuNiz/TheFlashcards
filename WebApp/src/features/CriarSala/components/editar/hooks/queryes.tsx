import { useMutation, useQuery } from '@tanstack/react-query';
import salaService, { type EditarSalaComFlashcardsDto } from '@features/criarSala/services';
import { snackBar } from '@utils/SnackBar';
import instituicaoService from '@features/instituicoes/services';

export const useSalas = (id?: number) => {
    const { data: buscaUnica, isLoading: isLoadingBuscaUnica, refetch } = useQuery({
        queryKey: ['Salas', 'detalhe', id],
        queryFn: async () => await salaService.listarUnico(id!),
        enabled: !!id,
    });
    const {
        mutateAsync: editar,
        isPending: estaEditando,
    } = useMutation({
        mutationKey: ['Salas'],
        mutationFn: async ({ id, payload }: {
            id: number, payload: EditarSalaComFlashcardsDto
        }) => {
            return await salaService.editar(id, payload);
        },
        onError: (error: any) => {
            snackBar(error?.response?.data?.error, 'error');
        },
        onSuccess: () => {
            refetch();
            snackBar('Sala atualizada com sucesso', 'success');

        },
    });

    const { data: instituicoes, isLoading: estaCarregandoInstituicoes, refetch: buscaInstituicoesNovamente } = useQuery({
        queryKey: ['buscaInstituicoesParaFiltro'],
        queryFn: async () => await instituicaoService.buscar(),
        select: (data) => data.map((instituicao) => ({
            value: instituicao.id,
            label: instituicao.nome,
        })),
    });

    return { editar, estaEditando, refetch, buscaUnica, isLoadingBuscaUnica, instituicoes, estaCarregandoInstituicoes, buscaInstituicoesNovamente };

};
