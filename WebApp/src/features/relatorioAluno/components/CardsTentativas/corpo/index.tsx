import { useParams, useNavigate } from 'react-router-dom';
import { CardBrancoConteudo, CardResumo, ChipStatus, CirculoStatus, CirculoTabelaVazia, Container, ConteinerAcertos, HeaderHistorico, IconeBox, IconeDireita, InfoCard, InfoTentativa, ItemTentativa, LadoEsquerdo, ListaTentativas, TabelaVazia, TopoCards } from './styles';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { Tipografias } from '@shared/components/tipografias';
import { Clock3, Trophy, ChartColumnIncreasing, ChevronRight } from 'lucide-react';
import { useRelatorioAlunoBuscar } from '@features/relatorioAluno/hooks/queryes';
import { formatarData, formatarHora } from '@utils/Mascara';

export const CardsTentativas = () => {
  const { idSala } = useParams();
  const navigate = useNavigate();
  const sala = Number(idSala);
  const { resumo, loadingResumo } = useRelatorioAlunoBuscar(sala);

  const STATUS = [
  { max: 40, label: 'Ruim', cor: '#ef4444' },
  { max: 75, label: 'Precisa melhorar', cor: '#f59e0b' },
  { max: 85, label: 'Bom', cor: '#3b82f6' },
  { max: 100, label: 'Excelente', cor: '#10b981' },
  ];

  const getStatus = (porcentagem: number) =>
  STATUS.find(s => porcentagem <= s.max) ?? STATUS[STATUS.length - 1];

  return (
    <Container>
      <TopoCards>
        <CardResumo>
          <IconeBox bg="#dbfce7">
            <Trophy size={20} color="#00a63e" />
          </IconeBox>
          <InfoCard>
            <Tipografias.LegendaSimples> Melhor pontuação </Tipografias.LegendaSimples>
            <Tipografias.LegendaMedio> {resumo?.alunos?.[0]?.melhor_pontuacao ?? '-'} </Tipografias.LegendaMedio>
          </InfoCard>
        </CardResumo>

        <CardResumo>
          <IconeBox bg="#dbeafe">
            <ChartColumnIncreasing size={20} color="#155dfc" />
          </IconeBox>
          <InfoCard>
            <Tipografias.LegendaSimples> Média geral </Tipografias.LegendaSimples>
            <Tipografias.LegendaMedio> {resumo?.alunos?.[0]?.media_geral ?? '-'} </Tipografias.LegendaMedio>
          </InfoCard>
        </CardResumo>

        <CardResumo>
          <IconeBox bg="#f3e8ff">
            <Clock3 size={20} color="#a836fb" />
          </IconeBox>

          <InfoCard>
            <Tipografias.LegendaSimples> Total de Tentativas </Tipografias.LegendaSimples>
            <Tipografias.LegendaMedio> {resumo?.alunos?.[0]?.total_tentativas ?? 0} </Tipografias.LegendaMedio>
          </InfoCard>
        </CardResumo>
      </TopoCards>

     <CardBrancoConteudo>
        <HeaderHistorico>
          <Tipografias.LegendaMedio>Histórico de tentativas</Tipografias.LegendaMedio>
          <Tipografias.TextoSimples className='cabecalho-sub'>Clique em uma tentativa para ver a análise detalhada</Tipografias.TextoSimples>
        </HeaderHistorico>

        {resumo?.alunos?.length === 0 ? (
          <TabelaVazia>
            <CirculoTabelaVazia>
              <Clock3 size={28} color="#90a1b9" />
            </CirculoTabelaVazia>
            <Tipografias.Titulo>Nenhuma tentativa encontrada</Tipografias.Titulo>
            <Tipografias.Legenda>Este aluno ainda não possui tentativas registradas.</Tipografias.Legenda>
          </TabelaVazia>
        ) : (
          <ListaTentativas>
            {resumo?.alunos?.map((aluno) =>
              aluno.historico.map((tentativa) => {
                const status = getStatus(tentativa.porcentagem_acertos);
                return (
                  <ItemTentativa
                    key={`${aluno.aluno_id}-${tentativa.id}`}
                    onClick={() => navigate(`/relatorios-aluno/tentativa/${tentativa.id}`)}
                  >
                    <LadoEsquerdo>
                      <div className='data'>
                        <Tipografias.TextoSimples>{formatarData(tentativa.criado_em)}</Tipografias.TextoSimples>
                        <Tipografias.LegendaSimples>{formatarHora(tentativa.criado_em, true)}</Tipografias.LegendaSimples>
                      </div>

                      <CirculoStatus cor={status.cor}>
                        <Tipografias.TextoSimples className='porcentagem'>{ tentativa.porcentagem_acertos}%</Tipografias.TextoSimples>
                      </CirculoStatus>

                      <ConteinerAcertos>
                        <ChipStatus cor={status.cor}>{status.label}</ChipStatus>
                        <InfoTentativa>
                          <Tipografias.LegendaSimples>
                            {tentativa.total_acertos} de {tentativa.total_flashcards} questões corretas
                          </Tipografias.LegendaSimples>
                        </InfoTentativa>
                      </ConteinerAcertos>
                    </LadoEsquerdo>

                    <IconeDireita className="icone-direita">
                      <ChevronRight size={20} />
                    </IconeDireita>
                  </ItemTentativa>
                );
              })
            )}
          </ListaTentativas>
        )}
      </CardBrancoConteudo>

      <BackDropCustomizado aberto={loadingResumo} />
    </Container>
  );
};