import { CorpoNovaInstituicao } from './components/corpo';
import { CabecalhoNovaInstituicao } from './components/cabecalho';
import { Corpo } from './styles';

export const NovaInstituicao = () => {

  return (
      <Corpo>
        <CabecalhoNovaInstituicao />
        <CorpoNovaInstituicao />
      </Corpo>
  )
};
