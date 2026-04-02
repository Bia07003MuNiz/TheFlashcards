import { BarraLateralContainers } from './components/containers';
import { Conteudo } from './components/containers/main/styles';

export const BarraLateralComum = ({ onNavegar }: { onNavegar: () => void }) => {
  return (
    <Conteudo>
      <BarraLateralContainers.Corpo onNavegar={onNavegar} />
    </Conteudo>
  );
};
