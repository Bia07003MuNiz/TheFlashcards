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
            <Tipografias.Titulo>Instituições Criadas</Tipografias.Titulo>
            <Tipografias.Legenda>Crie instituições, gerencie-as e acompanhe resultados</Tipografias.Legenda>
          </div>
          <div className="botao">
            <BotaoCustomizado.BotaoPrimario titulo='Nova Instituição' startIcon={<PlusIcon size={20} />} onClick={() => navigate(rotas.INSTITUICAO_NOVO)} />
          </div>
        </ConteudoInical>

      </Conteudo>
    </Container>
  );
};
