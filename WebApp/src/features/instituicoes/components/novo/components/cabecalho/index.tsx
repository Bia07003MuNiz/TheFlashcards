import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';
import { rotas } from '@constants/rotas';

export const CabecalhoNovaInstituicao = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div className="voltar" onClick={() => navigate(rotas.INSTITUICAO)}>
            <ChevronLeft size={18} color='#64748b' />
            <Tipografias.Legenda>Voltar para Instituições</Tipografias.Legenda>
          </div>

          <div className="textos">
            <Tipografias.Titulo>Nova Instituição</Tipografias.Titulo>
            <Tipografias.Legenda>
              Crie instituições, gerencie salas e acompanhe resultados
            </Tipografias.Legenda>
          </div>
        </ConteudoInical>

      </Conteudo>
    </Container>
  );
};
