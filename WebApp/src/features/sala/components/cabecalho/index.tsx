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
            <Tipografias.Titulo>Salas Criadas</Tipografias.Titulo>
            <Tipografias.Legenda>Crie salas, publique flashcards e acompanhe resultados</Tipografias.Legenda>
          </div>
          <div className="botao">
            <BotaoCustomizado.BotaoPrimario titulo='Nova sala' startIcon={<PlusIcon size={20} />} onClick={() => navigate(rotas.SALA_NOVO)} />
          </div>
        </ConteudoInical>

      </Conteudo>
    </Container>
  );
};
