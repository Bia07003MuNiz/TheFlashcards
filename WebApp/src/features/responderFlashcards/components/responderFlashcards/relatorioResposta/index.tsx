import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

import {
  Container,
  Conteudo,
  LadoEsquerdo,
  LadoDireito,
  CardBrancoConteudo,
  ListaPerguntas,
  FooterBotoes,
  CardPerguntaeResposta,
  ConteinerCardPergunta,
  IconeStatus,
  ConteinerCabecalhoGrafico,
  ConteudoGrafico,
  ConteudoLegendaGrafico,
  ConteudoInical
} from './styles';

import { ChartColumn, CircleCheck, CircleCheckBig, CircleX, Repeat } from 'lucide-react';
import { Tipografias } from '@shared/components/tipografias';
import { BotaoCustomizado } from '@shared/components/botao';
import { rotas } from '@constants/rotas';

export const RelatorioResposta = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const { state } = useLocation();

  const resultado = state?.resultado;
  const flashcards = state?.flashcards;

  if (!resultado) return null;

  const acertos = resultado.total_acertos;
  const erros = resultado.total_flashcards - acertos;

  const data = [
    { name: 'Acertos', value: acertos },
    { name: 'Erros', value: erros }
  ];

  return (
    <>
      <Container>
        <Conteudo>
          <ConteudoInical>
            <div className="textos">
              <Tipografias.Titulo>Relatório da Sessão</Tipografias.Titulo>
              <Tipografias.Legenda>Meu desempenho nesta sessão de estudo</Tipografias.Legenda>
            </div>
          </ConteudoInical>
      
        </Conteudo>
      </Container>

      <Container>
        <Conteudo>

          <LadoEsquerdo>
            <CardBrancoConteudo> 
              <ConteinerCabecalhoGrafico>
                <ChartColumn size={20} color="#46423F" />
                <Tipografias.LegendaMedio>
                  Desempenho Geral
                </Tipografias.LegendaMedio>
              </ConteinerCabecalhoGrafico>

              <ConteudoGrafico>
                <ResponsiveContainer>
                  <PieChart>

                    <Pie
                      data={data}
                      dataKey="value"
                      innerRadius={60}
                      outerRadius={90}
                    >

                      <Cell fill="#22c55e" />
                      <Cell fill="#ef4444" />

                    </Pie>

                  </PieChart>
                </ResponsiveContainer>
              </ConteudoGrafico>

              <ConteudoLegendaGrafico>
                <div className='legenda'>
                  <div className='acertos'>{acertos}</div>
                    <Tipografias.TextoSimples> ACERTOS</Tipografias.TextoSimples>
                </div>

                <div className='legenda'>
                  <div className='erros'>{erros}</div>
                    <Tipografias.TextoSimples> ERROS</Tipografias.TextoSimples>
                </div>
              </ConteudoLegendaGrafico>
            </CardBrancoConteudo>
          </LadoEsquerdo>

          <LadoDireito>
            <ConteinerCabecalhoGrafico className='cabecalho-cards'>
                <CircleCheckBig size={20}/>
                <Tipografias.LegendaMedio>
                  Detalhamento por Pergunta
                </Tipografias.LegendaMedio>
            </ConteinerCabecalhoGrafico>

            <ListaPerguntas>
              {resultado.respostas.map((resposta: any) => {
              const flashcard = flashcards.find((f: any) => f.id === resposta.flashcard_id);
              const Icone = resposta.resposta === 'CERTO' ? CircleCheck : CircleX;

                return (
                  <CardPerguntaeResposta key={resposta.id} correta={resposta.resposta === 'CERTO'}>
                    <ConteinerCardPergunta>
                      <IconeStatus correta={resposta.resposta === 'CERTO'}>
                          <Icone size={20} />
                      </IconeStatus>

                      <div>                      
                        <Tipografias.TextoSimples>
                          {flashcard?.pergunta}
                        </Tipografias.TextoSimples>
                        
                        <Tipografias.LegendaSimples>
                          Resposta: {flashcard?.resposta}
                        </Tipografias.LegendaSimples>
                      </div>
                    </ConteinerCardPergunta>
                  </CardPerguntaeResposta>
                );
              })}
            </ListaPerguntas>
          </LadoDireito>
        </Conteudo>

        <FooterBotoes>
          <BotaoCustomizado.BotaoSecundario 
          className='botaoCustomizado' 
          titulo='Repetir Sessão' 
          startIcon={<Repeat size={20} />}
          onClick={() => navigate(`/responder-sala/${id}`)}
          />

          <BotaoCustomizado.BotaoPrimario
          className='botaoCustomizado' 
          titulo='Voltar para salas' 
          onClick={() => navigate(rotas.RESPONDER_SALA)}
          />
        </FooterBotoes>

      </Container>
    </>
  );
};