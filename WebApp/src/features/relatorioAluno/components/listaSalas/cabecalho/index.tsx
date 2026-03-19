import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';
import { BotaoCustomizado } from '@shared/components/botao';
import { ListFilter, PlusIcon } from 'lucide-react';
import useQueryParams from '@hooks/useQueryParams';
import { rotas } from '@constants/rotas';

export const Cabecalho = () => {
  const { navigate } = useQueryParams();

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div className="textos">
            <Tipografias.Titulo>Histórico de Tentativas das Salas</Tipografias.Titulo>
            <Tipografias.Legenda>Escolha uma sala e para ver o seu relatório</Tipografias.Legenda>
          </div>
        </ConteudoInical>
      </Conteudo>
    </Container>
  );
};
