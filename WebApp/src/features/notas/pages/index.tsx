import { Cabecalho } from '../components/cabecalho';
import { CorpoNotas } from '../components/corpo';
import { Corpo } from './styles';

export const NotasPagina = () => {

  return (
    <Corpo>
      <Cabecalho />
      <CorpoNotas />
    </Corpo>
  );
};
