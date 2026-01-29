import { useLocation, useNavigate } from 'react-router-dom';
import { rotas, type CaminhoRota, rotasDinamicas } from '@constants/rotas';

export const useRotas = () => {
  const navegar = useNavigate();
  const localizacao = useLocation();

  const isRotaAtiva = (caminho: CaminhoRota): boolean => {
    return caminho === '/' ? localizacao.pathname === caminho : localizacao.pathname.includes(caminho);
  };

  const navegarAte = (caminho: CaminhoRota): void => {
    navegar(caminho);
  };

  const voltar = () => {navegar(-1);};

  return {
    rotas,
    isRotaAtiva,
    navegarAte,
    voltar,
    rotasDinamicas,
    localizacao,
  };
};
