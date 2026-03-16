import { useQuery } from '@tanstack/react-query';
import salaService, { type SalaListagem } from '@features/sala/services';

export const useSala = (id?: number) => {
  const { data, isLoading, refetch } = useQuery<SalaListagem>({
    queryKey: ['sala', id],
    queryFn: () => salaService.listarUnico(id!),
    enabled: !!id,
  });

  return {
    sala: data!,
    isLoadingSala: isLoading,
    refetchSala: refetch,
  };
};