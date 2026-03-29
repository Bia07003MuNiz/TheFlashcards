import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';
import { ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { useRelatorioBuscar } from '@features/relatorioProfessor/hooks/queryes';

export const Cabecalho = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idTentativa = Number(id);
  const { detalhe } = useRelatorioBuscar(undefined, undefined, idTentativa);

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div
            className="voltar"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={18} color="#64748b" />
            <Tipografias.Legenda>
              Voltar
            </Tipografias.Legenda>
          </div>

          <div className="textos">
            <Tipografias.Titulo>
              Tentativa {detalhe?.tentativa_numero}
            </Tipografias.Titulo>

            <Tipografias.Legenda>
              Relatório detalhado da tentativa
            </Tipografias.Legenda>
          </div>
        </ConteudoInical>
      </Conteudo>
    </Container>
  );
};