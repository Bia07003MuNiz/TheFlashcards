import { useState } from 'react';
import { RotateCcw, CircleX, CircleCheck } from 'lucide-react';
import {
  Container,
  Header,
  Titulo,
  Subtitulo,
  ProgressWrapper,
  ProgressTrack,
  ProgressFill,
  CardWrapper,
  CardFlip,
  CardFace,
  CardBrancoConteudo,
  CardVerso,
  Label,
  Pergunta,
  RotateText,
  Botoes,
  BotaoErro,
  BotaoAcerto
} from './styles';

export const ResponderFlashcards = () => {
  const [virado, setVirado] = useState(false);

  const total = 5;
  const atual = 1;

  const progresso = (atual / total) * 100;

  return (
    <Container>

      <Header>
        <div>
          <Titulo>Matemática – 9º A</Titulo>
          <Subtitulo>Flashcard {atual} de {total}</Subtitulo>
        </div>

        <ProgressWrapper>
          <ProgressTrack>
            <ProgressFill style={{ width: `${progresso}%` }} />
          </ProgressTrack>
        </ProgressWrapper>
      </Header>

      <CardWrapper>

        <CardFlip
          onClick={() => setVirado(!virado)}
          style={{
            transform: virado ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >

          <CardFace>
            <CardBrancoConteudo>

              <Label>PERGUNTA</Label>

              <Pergunta>Quanto é 5+5?</Pergunta>

              <RotateText>
                <RotateCcw size={18} />
                Clique para virar
              </RotateText>

            </CardBrancoConteudo>
          </CardFace>

          <CardVerso>

            <Label>RESPOSTA</Label>

            <Pergunta>10</Pergunta>

          </CardVerso>

        </CardFlip>

      </CardWrapper>

      {virado && (
        <Botoes>

          <BotaoErro>
            <CircleX size={20} />
            Errei
          </BotaoErro>

          <BotaoAcerto>
            <CircleCheck size={20} />
            Acertei
          </BotaoAcerto>

        </Botoes>
      )}

    </Container>
  );
};
