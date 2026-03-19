import relatorioAlunoService, {
    type RelatorioSala,
    type RelatorioTentativaDetalhada,
} from '@features/relatorioAluno/services';

import { useQuery } from '@tanstack/react-query';

export const useRelatorioAlunoBuscar = (
    idSala?: number,
    idTentativa?: number
) => {
    const {
        data: resumo,
        isLoading: loadingResumo,
        refetch: refetchResumo,
    } = useQuery<RelatorioSala>({
        queryKey: ['relatorio-aluno', idSala],
        queryFn: () => relatorioAlunoService.relatorioAlunoTentativas(idSala!),
        enabled: !!idSala,
    });

    const {
        data: tentativas,
        isLoading: loadingTentativas,
        refetch: refetchTentativas,
    } = useQuery<RelatorioTentativaDetalhada>({
        queryKey: ['relatorio-tentativas', idTentativa],
        queryFn: () =>
            relatorioAlunoService.relatorioAlunoTentativasDetalhada(idTentativa!),
        enabled: !!idTentativa,
    });

    return {
        resumo,
        tentativas,

        loadingResumo,
        loadingTentativas,

        refetchResumo,
        refetchTentativas,
    };
};