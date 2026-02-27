import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';
import { ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRelatorioBuscar } from '@features/RelatorioProfessor/hooks/queryes';

export const Cabecalho = () => {
  const navigate = useNavigate();
  const { idSala, idAluno } = useParams();

  const { resumo } = useRelatorioBuscar(Number(idSala));

  const alunoSelecionado = resumo?.find(
    (aluno) => String(aluno.aluno_id) === String(idAluno)
  );

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div
            className="voltar"
            onClick={() => navigate(`/relatorios-professor/${idSala}`)}
          >
            <ChevronLeft size={18} color="#64748b" />
            <Tipografias.Legenda>
              Voltar para lista de alunos
            </Tipografias.Legenda>
          </div>

          <div className="textos">
            <Tipografias.Titulo>
              {alunoSelecionado?.nome}
            </Tipografias.Titulo>
          </div>

        </ConteudoInical>
      </Conteudo>
    </Container>
  );
};