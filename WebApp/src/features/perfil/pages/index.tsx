import { Cabecalho } from '../components/cabecalho';
import { CorpoMeuPerfil } from '../components/corpo';
import { Corpo } from './styles';

export const MeuPerfilPagina = () => {

  return (
    <Corpo>
      <Cabecalho />
      <CorpoMeuPerfil />
    </Corpo>
  );
};
