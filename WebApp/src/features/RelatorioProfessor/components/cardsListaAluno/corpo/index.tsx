import { useParams, useNavigate } from 'react-router-dom';
import { CardAluno, CardBrancoConteudo, CirculoTabelaVazia, Container, Conteudo, InfoPrincipal, Metricas, TabelaVazia } from './styles';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { BotaoCustomizado } from '@shared/components/botao';
import { Tipografias } from '@shared/components/tipografias';
import { Mail, TrendingUp, CircleCheckBig, CircleX, User } from 'lucide-react';

import { useRelatorioBuscar } from '@features/RelatorioProfessor/hooks/queryes';

export const CardsListaAluno = () => {
  const { id } = useParams();
  const idSala = Number(id);

  const navigate = useNavigate();
  const { resumo, loadingResumo } = useRelatorioBuscar(idSala);

  return (
    <Container>
      <CardBrancoConteudo>
        <Conteudo>
          {resumo.length === 0 && !loadingResumo ? (
            <TabelaVazia>
              <CirculoTabelaVazia>
                <User size={28} color="#90a1b9" />
              </CirculoTabelaVazia>

              <Tipografias.Titulo>Nenhum aluno encontrado </Tipografias.Titulo>
              <Tipografias.Legenda>Esta sala ainda não possui alunos com tentativas registradas. </Tipografias.Legenda>
            </TabelaVazia>
          ) : (
            resumo.map((aluno) => {
              const primeiraLetra = aluno.nome.charAt(0).toUpperCase();

              return (
                <CardAluno key={aluno.aluno_id} >
                  <div className="topo">
                    <BotaoCustomizado.BotaoPrimario
                      titulo="Ver Relatório"
                      onClick={() =>
                        navigate(
                          `/relatorios-professor/${idSala}/aluno/${aluno.aluno_id}`
                        )
                      }
                    />
                  </div>

                  <InfoPrincipal>
                    <div className="avatar">{primeiraLetra}</div>

                    <div className="dados">
                      <span className="nome">{aluno.nome}</span>

                      <div className="email">
                        <Mail size={16} />
                        <span>{aluno.email}</span>
                      </div>
                    </div>
                  </InfoPrincipal>

                  <Metricas>
                    <div className="boxTentativa">
                      <TrendingUp size={18} color='#4f39f6' />
                      <span>{aluno.tentativas} Tentativas</span>
                    </div>

                    <div className="boxAcerto">
                      <CircleCheckBig size={18} color="#008236" />
                      <span>{aluno.porcentagem}% Acertos</span>
                    </div>

                    <div className="boxErros">
                      <CircleX size={18} color="#c10007" />
                      <span>{100 - aluno.porcentagem}% Erros</span>
                    </div>
                  </Metricas>
                </CardAluno>
              );
            })
          )}
        </Conteudo>
      </CardBrancoConteudo>
      <BackDropCustomizado aberto={loadingResumo} />
    </Container>
  );
};