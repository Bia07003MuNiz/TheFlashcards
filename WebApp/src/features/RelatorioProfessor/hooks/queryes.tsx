import relatorioService, {
    type ResumoGeralSala,
    type TentativaAluno,
    type DetalheTentativaResponse,
} from '@features/RelatorioProfessor/services';

import { useQuery } from '@tanstack/react-query';

export const useRelatorioBuscar = (
    idSala?: number,
    idAluno?: number,
    idTentativa?: number
) => {
    const {
        data: resumo = [],
        isLoading: loadingResumo,
        refetch: refetchResumo,
    } = useQuery<ResumoGeralSala[]>({
        queryKey: ['relatorio-geral', idSala],
        queryFn: () => relatorioService.relatorioGeral(idSala!),
        enabled: !!idSala,
    });

    const {
        data: tentativas = [],
        isLoading: loadingTentativas,
        refetch: refetchTentativas,
    } = useQuery<TentativaAluno[]>({
        queryKey: ['relatorio-tentativas', idSala, idAluno],
        queryFn: () =>
            relatorioService.relatorioTentativa(idSala!, idAluno!),
        enabled: !!idSala && !!idAluno,
    });

    const {
        data: detalhe,
        isLoading: loadingDetalhe,
        refetch: refetchDetalhe,
    } = useQuery<DetalheTentativaResponse>({
        queryKey: ['relatorio-detalhe', idTentativa],
        queryFn: () =>
            relatorioService.relatorioTentativaDetalhado(idTentativa!),
        enabled: !!idTentativa,
    });

    return {
        resumo,
        tentativas,
        detalhe,

        loadingResumo,
        loadingTentativas,
        loadingDetalhe,

        refetchResumo,
        refetchTentativas,
        refetchDetalhe,
    };
};