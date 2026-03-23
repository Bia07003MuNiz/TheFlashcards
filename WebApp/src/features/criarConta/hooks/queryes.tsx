import criarUsuarioService from '@features/criarConta/services';
import { useMutation, useQuery } from '@tanstack/react-query';
import { snackBar } from '@utils/SnackBar';
import instituicaoService from '@features/instituicoes/services';

export const useCriarConta = () => {
    const { mutateAsync: post, isPending } = useMutation({
        mutationKey: ['criar-usuario'],
        mutationFn: async (data: any) => {
            await criarUsuarioService.criar(data);
        },
        onSuccess: () => {
            snackBar('Usuario Criado com sucesso', 'success');
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
            value: instituicao.id.toString(),
            label: instituicao.nome,
        })),
    });

    return { isPending, post, instituicoes, estaCarregandoInstituicoes, buscaInstituicoesNovamente };
};
