import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';
import { rotas } from '@constants/rotas';

export const CabecalhoNovaSala = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div className="voltar" onClick={() => navigate(rotas.SALA)}>
            <ChevronLeft size={18} color='#64748b' />
            <Tipografias.Legenda>Voltar para Salas</Tipografias.Legenda>
          </div>

          <div className="textos">
            <Tipografias.Titulo>Salas Criadas</Tipografias.Titulo>
            <Tipografias.Legenda>
              Crie salas, publique flashcards e acompanhe resultados
            </Tipografias.Legenda>
          </div>
        </ConteudoInical>

      </Conteudo>
    </Container>
  );
};
