import { useParams } from 'react-router-dom';
import { CardBrancoConteudo, CardPerguntaeResposta, CirculoNumero, Container, ConteinerCardPergunta, Conteudo, StatusResposta } from './styles';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { Tipografias } from '@shared/components/tipografias';
import { useRelatorioBuscar } from '@features/relatorioProfessor/hooks/queryes';
import { Grafico } from './grafico';
import { CircleCheckBig, CircleX } from 'lucide-react';

export const CardsTentativasDetalhes = () => {
  const { id } = useParams();

  const tentativaId = Number(id);

  const { detalhe, loadingDetalhe } =
    useRelatorioBuscar(undefined, undefined, tentativaId);

  if (!detalhe) return null;

  return (
    <Container>
      <CardBrancoConteudo>
        <Conteudo>
          <Tipografias.LegendaMedio>Resumo</Tipografias.LegendaMedio>
          <Grafico />

          <Tipografias.LegendaMedio>Detalhamento</Tipografias.LegendaMedio>

          {detalhe.respostas.map((resposta, index) => {
            const correta = resposta.resposta === "CERTO";
            const Icone = correta ? CircleCheckBig : CircleX;
            const texto = correta ? 'Resposta Correta' : 'Resposta Incorreta';

            return (
              <CardPerguntaeResposta
                key={resposta.id}
                correta={correta}
              >
                <ConteinerCardPergunta>
                  <CirculoNumero correta={correta}>
                    {index + 1}
                  </CirculoNumero>

                  <div>
                    <Tipografias.TextoSimples>
                      {resposta.flashcard.pergunta}
                    </Tipografias.TextoSimples>

                    <Tipografias.LegendaSimples>
                      Resposta: {resposta.flashcard.resposta}
                    </Tipografias.LegendaSimples>

                    <StatusResposta correta={correta}>
                      <Icone size={18} />
                      {texto}
                    </StatusResposta>
                  </div>
                </ConteinerCardPergunta>
              </CardPerguntaeResposta>
            );
          })}
        </Conteudo>
      </CardBrancoConteudo>
      <BackDropCustomizado aberto={loadingDetalhe} />
    </Container>
  );
};