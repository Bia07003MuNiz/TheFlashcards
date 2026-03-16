import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponderFlashcards } from '@features/responderFlashcards/hooks/queryes';
import { useMeuPerfil } from '@features/perfil/hooks/queryes';
import type { ResponderFlashcards } from '../services';
import type { FlashcardListagem, SalaListagem } from '@features/sala/services';

type TipoResposta = ResponderFlashcards['respostas'][number]['resposta'];
type Resposta = ResponderFlashcards['respostas'][number];

export const useResponderFlashcardsController = (
  sala: SalaListagem | undefined,
  flashcards: FlashcardListagem[]
) => {
  const { responder: enviarRespostas } = useResponderFlashcards();
  const { meuPerfil } = useMeuPerfil();
  const navigate = useNavigate();

  const [virado, setVirado] = useState(false);
  const [indexAtual, setIndexAtual] = useState(0);
  const [respostas, setRespostas] = useState<Resposta[]>([]);

  const total = flashcards.length;
  const atual = indexAtual + 1;
  const progresso = total ? (atual / total) * 100 : 0;
  const cardAtual = flashcards[indexAtual];
  const isUltimo = indexAtual === total - 1;

const [sessaoFinalizada] = useState(false);

const finalizarSessao = async () => {
  if (!sala) return;

  const resultado = await enviarRespostas({
    aluno_id: meuPerfil!.id,
    sala_id: sala.id,
    respostas,
  });

  navigate(`/responder-sala/${sala.id}/relatorio`, {
    state: { resultado, flashcards },
  });
};
const [modalAberto, setModalAberto] = useState(false);


const responder = async (tipo: TipoResposta) => {
  const novasRespostas = [...respostas, { flashcard_id: cardAtual.id, resposta: tipo }];

  setRespostas(novasRespostas);
  setVirado(false);

  if (isUltimo) {
    setModalAberto(true);
    return;
  }

  setIndexAtual(prev => prev + 1);
};

return { virado, setVirado, responder, modalAberto, setModalAberto, finalizarSessao , cardAtual, atual, total, progresso, indexAtual, isUltimo, sessaoFinalizada };
};
