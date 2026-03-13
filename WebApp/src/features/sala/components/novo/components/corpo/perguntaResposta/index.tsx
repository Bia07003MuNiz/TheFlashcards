import * as React from 'react';
import {
  BlocoAzulIcon,
  CardListaPerguntaAdicionado,
  CardPerguntasERespostas,
  CardsContainerFlashcards,
  CardVisualizarFlashcards,
  ContainerBotao,
  InputContainer
} from './styles';

import { Tipografias } from '@shared/components/tipografias';
import { InputCustomizado } from '@shared/components/input';
import { BookOpen, Pencil, Plus, Trash2 } from 'lucide-react';
import { BotaoCustomizado } from '@shared/components/botao';
import { useSalaController } from '../../../hooks/index';
import { Controller } from 'react-hook-form';

export const PerguntasERespostas = () => {
  const { register, control, errors, watch, append, remove, update, fields, setValue } = useSalaController();
  const [editIndex, setEditIndex] = React.useState<number | null>(null);

  const pergunta = watch('flashcardTemp.pergunta') || '';
  const resposta = watch('flashcardTemp.resposta') || '';

  const botaoDesabilitado = !pergunta || !resposta;

  const resetFlashcardTemp = () => {
    setValue('flashcardTemp', { pergunta: '', resposta: '' });
  };

  const salvar = () => {
    if (!pergunta || !resposta) return;

    if (editIndex !== null) {
      update(editIndex, { pergunta, resposta });
      setEditIndex(null);
    } else {
      append({ pergunta, resposta });
    }

    resetFlashcardTemp();
  };

  const iniciarEdicao = (item: { pergunta: string; resposta: string }, index: number) => {
    setEditIndex(index);
    setValue('flashcardTemp', item);
  };

  return (
    <CardsContainerFlashcards>
      <div className="textos">
        <BlocoAzulIcon>
          <BookOpen size={20} color="#432dd7" />
        </BlocoAzulIcon>
        <Tipografias.LegendaMedio>Flashcards</Tipografias.LegendaMedio>
      </div>

      <InputContainer>
        <CardPerguntasERespostas>

          <InputCustomizado.InputComum
            label="Pergunta"
            placeholder="Digite a pergunta do flashcard"
            {...register('flashcardTemp.pergunta')}
            error={!!errors.flashcardTemp?.pergunta}
            helperText={errors.flashcardTemp?.pergunta?.message}
          />

          <div className="input">
            <Controller
              name="flashcardTemp.resposta"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputCustomizado.InputTexto
                  label="Resposta"
                  placeholder="Digite a resposta do flashcard"
                  {...field}
                  value={field.value || ''}
                  error={!!errors.flashcardTemp?.resposta}
                  helperText={errors.flashcardTemp?.resposta?.message}
                />
              )}
            />
          </div>

          <ContainerBotao>
            <BotaoCustomizado.BotaoPrimario
              startIcon={
                editIndex !== null
                  ? <Pencil size={20} />
                  : <Plus size={20} />
              }
              disabled={botaoDesabilitado}
              onClick={salvar}
              titulo={editIndex !== null ? 'Editar Card' : 'Adicionar Card'}
            />
          </ContainerBotao>

          {fields.length === 0 ? (
            <CardVisualizarFlashcards>
              <BookOpen size={32} color="#c7d0dc" />
              <span className="titulo">Nenhum flashcard criado ainda</span>
              <span className="descricao">
                Preencha o formulário acima para adicionar
              </span>
            </CardVisualizarFlashcards>
          ) : (
            fields.map((item, index) => (
              <CardListaPerguntaAdicionado key={item.id}>
                <div className="icon-livro">
                  <BlocoAzulIcon>
                    <span className="numero-flashcard">
                      {index + 1}
                    </span>
                  </BlocoAzulIcon>
                </div>

                <div className="conteudo">
                  <Tipografias.TextoSimples>
                    PERGUNTA
                  </Tipografias.TextoSimples>
                  <Tipografias.TextoSimples>
                    {item.pergunta}
                  </Tipografias.TextoSimples>

                  <Tipografias.TextoSimples className="respostaTextoDois">
                    RESPOSTA
                  </Tipografias.TextoSimples>
                  <Tipografias.TextoSimples className="respostaTexto">
                    {item.resposta}
                  </Tipografias.TextoSimples>
                </div>

                <div className="acoes">
                  <Pencil
                    size={20}
                    color="#432dd7"
                    onClick={() => iniciarEdicao(item, index)}
                  />

                  <Trash2
                    size={20}
                    color="#ee124d"
                    onClick={() => {
                      remove(index);
                      if (editIndex === index) {
                        setEditIndex(null);
                        resetFlashcardTemp();
                      }
                    }}
                  />
                </div>
              </CardListaPerguntaAdicionado>
            ))
          )}

        </CardPerguntasERespostas>
      </InputContainer>
    </CardsContainerFlashcards>
  );
};