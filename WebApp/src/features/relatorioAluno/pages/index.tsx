import { Cabecalho } from '../components/listaSalas/cabecalho';
import { Cards } from '../components/listaSalas/cards';
import { Corpo } from './styles';

export const RelatorioAlunoPagina = () => {

  return (
    <Corpo>
      <Cabecalho />
      <Cards />
    </Corpo>
  );
};
