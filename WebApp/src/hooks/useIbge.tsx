import ibgeService from '@services/ibge.service';
import { useQuery } from '@tanstack/react-query';

export const useIbge = (cep: string) => {
  return useQuery({
    queryKey: ['ibge', cep],
    queryFn: async() => {
      const { data } = await ibgeService.buscar(cep);
      return data;
    },
    enabled: !!cep && cep.length >= 8,
    staleTime: 1000 * 60 * 5,
  });
};
