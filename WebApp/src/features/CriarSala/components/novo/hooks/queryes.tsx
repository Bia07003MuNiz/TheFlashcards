import salaService, { type SalaListagem } from '@features/criarSala/services';
import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import instituicaoService from '@features/instituicoes/services';

export const useSalas = (deveBuscarTodos = true) => {
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

    const { data: instituicoes, isLoading: estaCarregandoInstituicoes, refetch: buscaInstituicoesNovamente } = useQuery({
        queryKey: ['buscaInstituicoesParaFiltro'],
        queryFn: async () => await instituicaoService.buscar(),
        select: (data) => data.map((instituicao) => ({
            value: instituicao.id,
            label: instituicao.nome,
        })),
    });

    return { data, isLoading, isPending, post, instituicoes, estaCarregandoInstituicoes, buscaInstituicoesNovamente };
};
