import { useParams } from 'react-router-dom';
import { RotateCcw, CircleX, CircleCheck, ChevronLeft, GraduationCap } from 'lucide-react';
import {
  Container,
  Cabecalho,
  ProgressWrapper,
  ProgressTrack,
  ProgressFill,
  CardWrapper,
  CardFlip,
  CardFace,
  CardBrancoConteudo,
  CardVerso,
  RotateText,
  Botoes,
  BotaoErro,
  BotaoAcerto,
} from './styles';
import { useSala } from './hooks/queryes';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { useResponderFlashcardsController } from '@features/responderFlashcards/hooks';
import { Tipografias } from '@shared/components/tipografias';
import { rotas } from '@constants/rotas';
import useQueryParams from '@hooks/useQueryParams';
import { ModalCustomizado } from '@shared/components/modal';
import { BotaoCustomizado } from '@shared/components/botao';

export const ResponderFlashcards = () => {

  const { id } = useParams();
  const salaId = id ? Number(id) : undefined;
  const { sala, isLoadingSala } = useSala(salaId);
  const flashcards = sala?.flashcards ?? [];
  const { navigate } = useQueryParams();
  const { virado, setVirado, responder, cardAtual, atual, total, progresso, finalizarSessao, modalAberto, setModalAberto } = useResponderFlashcardsController(sala, flashcards);
  if (isLoadingSala || !sala) return <BackDropCustomizado aberto />;
  if (!cardAtual) return null;

  return (
    <Container>

      <Cabecalho>
       <div className='voltar'> 
        <ChevronLeft size={30} color='#64748b' onClick={() => navigate(rotas.RESPONDER_SALA)}/>
        <div>
          <Tipografias.Titulo>{sala.nome}</Tipografias.Titulo>
          <Tipografias.Legenda>Flashcard {atual} de {total}</Tipografias.Legenda>
        </div>
      </div>

        <ProgressWrapper>
          <ProgressTrack>
            <ProgressFill style={{ width: `${progresso}%` }} progresso={progresso} />
          </ProgressTrack>
        </ProgressWrapper>
      </Cabecalho>

      <CardWrapper>
        <CardFlip
          className={virado ? 'virado' : ''}
          onClick={() => setVirado(!virado)}
        >
          <CardFace>
            <CardBrancoConteudo>
              <Tipografias.LegendaMedio>PERGUNTA</Tipografias.LegendaMedio>
              <Tipografias.Titulo>{cardAtual.pergunta}</Tipografias.Titulo>
              <RotateText> <RotateCcw size={18} />Clique para virar</RotateText>
            </CardBrancoConteudo>
          </CardFace>

          <CardVerso>
            <Tipografias.LegendaMedio>RESPOSTA</Tipografias.LegendaMedio>
            <Tipografias.Titulo>{cardAtual.resposta}</Tipografias.Titulo>
          </CardVerso>
        </CardFlip>
      </CardWrapper>

      {virado && (
        <Botoes>
          <div className="linha">
            <BotaoErro onClick={() => responder('ERRADO')}>
              <CircleX size={20} />
              Errei
            </BotaoErro>

            <BotaoAcerto onClick={() => responder('CERTO')}>
              <CircleCheck size={20} />
              Acertei
            </BotaoAcerto>
          </div>
        </Botoes>
      )} 

      <ModalCustomizado
        open={modalAberto}
        onClose={() => setModalAberto(false)}
        title="🎓 Sessão concluída"
        width={500}
      >
        <Tipografias.Legenda>
          Você respondeu todos os {total} flashcards. Deseja ver seu relatório?
        </Tipografias.Legenda>

        <Botoes>
          <div className="linha">
            <BotaoCustomizado.BotaoSecundario className='botaoCustomizado' titulo='Revisar Flashcards'onClick={() => setModalAberto(false)} />
            <BotaoCustomizado.BotaoPrimario className='botaoCustomizado' titulo='Ver Relatório' startIcon={<GraduationCap size={20} />} onClick={finalizarSessao} />
          </div>
        </Botoes>
      </ModalCustomizado>
    </Container>
  );
};