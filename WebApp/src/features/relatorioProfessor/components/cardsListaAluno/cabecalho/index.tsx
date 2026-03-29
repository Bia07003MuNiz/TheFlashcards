import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';
import { ChevronLeft } from 'lucide-react';
import { rotas } from '@constants/rotas';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useSalas } from '@features/sala/components/novo/hooks/queryes';

export const Cabecalho = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: salas } = useSalas();

  const salaSelecionada = salas?.find(
    (sala) => String(sala.id) === String(id)
  );
  console.log(salas);

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div
            className="voltar"
            onClick={() => navigate(rotas.RELATORIOS_PROFESSOR)}
          >
            <ChevronLeft size={18} color="#64748b" />
            <Tipografias.Legenda>
              Voltar para Relatórios
            </Tipografias.Legenda>
          </div>

          <div className="textos">
            <Tipografias.Titulo>
              {salaSelecionada?.nome || 'Carregando...'}
            </Tipografias.Titulo>

            <Tipografias.Legenda>
              Visualize o desempenho da sala de todos os alunos
            </Tipografias.Legenda>
          </div>
        </ConteudoInical>
      </Conteudo>
    </Container>
  );
};