import { useParams, useNavigate } from 'react-router-dom';
import {
  CardAluno,
  CardBrancoConteudo,
  CirculoTabelaVazia,
  Container,
  Conteudo,
  InfoPrincipal,
  Metricas,
  TabelaVazia,
} from './styles';

import { BackDropCustomizado } from '@shared/components/backDrop';
import { BotaoCustomizado } from '@shared/components/botao';
import { Tipografias } from '@shared/components/tipografias';
import {
  TrendingUp,
  CircleCheckBig,
  CircleX,
  Clock3,
  Eye,
  CalendarDays,
} from 'lucide-react';

import { useRelatorioBuscar } from '@features/relatorioProfessor/hooks/queryes';

export const CardsTentativas = () => {
  const { idSala, idAluno } = useParams();
  const navigate = useNavigate();

  const sala = Number(idSala);
  const aluno = Number(idAluno);

  const { tentativas, loadingTentativas } =
    useRelatorioBuscar(sala, aluno);

  return (
    <Container>
      <CardBrancoConteudo>
        <Conteudo>
          {tentativas.length === 0 && !loadingTentativas ? (
            <TabelaVazia>
              <CirculoTabelaVazia>
                <Clock3 size={28} color="#90a1b9" />
              </CirculoTabelaVazia>

              <Tipografias.Titulo>
                Nenhuma tentativa encontrada

              </Tipografias.Titulo>

              <Tipografias.Legenda>
                Este aluno ainda não possui tentativas registradas.
              </Tipografias.Legenda>
            </TabelaVazia>
          ) : (
            tentativas.map((item) => (
              <CardAluno key={item.id}>
                <div className="topo">
                  <BotaoCustomizado.BotaoPrimario
                    titulo="Abrir"
                    startIcon={<Eye size={18} />}
                    onClick={() =>
                      navigate(
                        `/relatorios-professor/tentativa/${item.id}`
                      )
                    }
                  />
                </div>

                <InfoPrincipal>
                  <div className="dados">
                    <span className="nome">
                      Tentativa {item.tentativa}
                    </span>
                  </div>
                </InfoPrincipal>

                <Metricas>
                  <div className="boxAcerto">
                    <CircleCheckBig size={18} color="#008236" />
                    <span>{item.acertos} Acertos</span>
                  </div>

                  <div className="boxErros">
                    <CircleX size={18} color="#c10007" />
                    <span>{item.erros} Erros</span>
                  </div>

                  <div className="boxTentativa">
                    <CalendarDays size={18} color="#4f39f6" />
                    <span>
                      {new Date(item.data).toLocaleString()}
                    </span>
                  </div>
                </Metricas>
              </CardAluno>
            ))
          )}
        </Conteudo>
      </CardBrancoConteudo>

      <BackDropCustomizado aberto={loadingTentativas} />
    </Container>
  );
};