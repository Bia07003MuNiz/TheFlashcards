import {
  BlocoAzulIcon,
  CardListaPerguntaAdicionado,
  CardPerguntasERespostas,
  CardsContainerFlashcards,
  CardVisualizarFlashcards,
  InputContainer,
} from './styles';
import { Tipografias } from '@shared/components/tipografias';
import { InputCustomizado } from '@shared/components/input';
import { BookOpen, Pencil, Plus, Trash2 } from 'lucide-react';
import { BotaoCustomizado } from '@shared/components/botao';
import type { FC } from 'react';
import React from 'react';
import { ModalCustomizado } from '@shared/components/modal';
import { useFlashcardController } from './hooks';
import { Controller } from 'react-hook-form';

type Props = {
  salaId: number;
  flashcards: any[];
};

export const PerguntasERespostas: FC<Props> = ({ salaId, flashcards }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const {
    register,
    salvar,
    iniciarEdicao,
    reset,
    watch,
    errors,
    control,
  } = useFlashcardController(salaId);

  const fecharModal = () => {
    setOpenModal(false);
    reset();
  };

  return (
    <>
      <CardsContainerFlashcards>
        <div className="textos">
          <BlocoAzulIcon>
            <BookOpen size={20} color="#432dd7" />
          </BlocoAzulIcon>
          <Tipografias.LegendaMedio>Flashcards</Tipografias.LegendaMedio>
        </div>
        <div style={{ marginTop: 24 }}>
          <BotaoCustomizado.BotaoPrimario
            startIcon={<Plus size={20} />}
            titulo={'Adicionar Flashcard'}
            onClick={() => setOpenModal(true)}
          />
        </div>

        <InputContainer>
          <CardPerguntasERespostas>
            {flashcards.length === 0 ? (
              <CardVisualizarFlashcards>
                <BookOpen size={32} color="#c7d0dc" />
                <span className="titulo">
                  Nenhum flashcard criado ainda
                </span>
                <span className="descricao">
                  Adicione flashcards para começar
                </span>
              </CardVisualizarFlashcards>
            ) : (
              flashcards.map((item) => (
                <CardListaPerguntaAdicionado key={item.id}>
                  <div className="icon-livro">
                    <BlocoAzulIcon>
                      <span className="numero-flashcard">
                        {item.id}
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
                      onClick={() => {
                        console.log('flashcard clicado para editar:', {
                          id: item.id,
                          pergunta: item.pergunta,
                          resposta: item.resposta,
                        });

                        iniciarEdicao({
                          id: item.id,
                          pergunta: item.pergunta,
                          resposta: item.resposta,
                        });

                        setOpenModal(true);
                      }}
                    />

                    <Trash2
                      size={20}
                      color="#ee124d"
                    // onClick={() => onRemover(item.id)}
                    />
                  </div>
                </CardListaPerguntaAdicionado>
              ))
            )}
          </CardPerguntasERespostas>
        </InputContainer>
      </CardsContainerFlashcards>

      <ModalCustomizado
        open={openModal}
        onClose={fecharModal}
        title={watch('id') ? 'Editar Flashcard' : 'Novo Flashcard'}
        width={500}
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await salvar();
            fecharModal();
          }}
        >
          <Controller
            name="pergunta"
            control={control}
            render={({ field }) => (
              <InputCustomizado.InputComum
                label="Pergunta"
                placeholder="Digite a pergunta"
                {...field}
                error={!!errors.pergunta}
                helperText={errors.pergunta?.message}
              />
            )}
          />


          <div style={{ marginTop: 16 }}>

            <Controller
              name="resposta"
              control={control}
              render={({ field }) => (
                <InputCustomizado.InputTexto
                  label="Resposta"
                  placeholder="Digite a resposta"
                  {...field}
                  value={field.value || ''}
                  error={!!errors.resposta}
                  helperText={errors.resposta?.message}
                />
              )}
            />
          </div>

          <div style={{ marginTop: 24 }}>
            <BotaoCustomizado.BotaoPrimario
              startIcon={<Pencil size={20} />}
              titulo={watch('id') ? 'Editar' : 'Adicionar'}
              onClick={salvar}
            />
          </div>
        </form>
      </ModalCustomizado>
    </>
  );
};