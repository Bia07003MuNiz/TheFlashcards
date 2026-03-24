import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import instituicaoService from '@features/instituicoes/services';

export const useInstituicoes = () => {
    const { data: instituicoes, isLoading: estaCarregandoInstituicoes, refetch: buscaInstituicoesNovamente } = useQuery({
        queryKey: ['buscaInstituicoesParaFiltro'],
        queryFn: async () => await instituicaoService.buscar(),
        select: (data) => data.map((instituicao) => ({
            value: instituicao.id,
            label: instituicao.nome,
        })),
    });

    const { mutateAsync: post, isPending } = useMutation({
        mutationKey: ['instituicoes'],
        mutationFn: async (data: any) => {
            await instituicaoService.criar(data);
        },
        onSuccess: () => {
            snackBar('Instituição Criada com sucesso', 'success');
        },
        onError: (error: any) => {
            const message = error?.response?.data?.error || 'Erro ao salvar';
            snackBar(message, 'error');
            return message;
        },
    });

    return { isPending, post, instituicoes, estaCarregandoInstituicoes, buscaInstituicoesNovamente };
};
