import * as React from 'react';
import {
  BlocoAzulIcon,
  CardListaPerguntaAdicionado,
  CardPerguntasERespostas,
  CardsContainerConfiguracoes,
  CardsContainerFlashcards,
  CardsContainerInformacaoGeral,
  CardsInformacoesAdicionais,
  CardVisualizarFlashcards,
  ColunaDireita,
  ColunaEsquerda,
  ContainerBotao,
  ContainerConfiguracoesTextos,
  ContainerConfiguracoesTextosLinha,
  ContainerLayout,
  Divider,
  InputContainer,
  TextoInformacoesAdicionais,
} from './styles';
import { Tipografias } from '@shared/components/tipografias';
import { InputCustomizado } from '@shared/components/input';
import { BookOpen, Info, Pencil, Plus, SlidersHorizontal, Trash2 } from 'lucide-react';
import { BotaoCustomizado } from '@shared/components/botao';
import { Controller } from 'react-hook-form';
import type { FC } from 'react';
import type { useSalaController } from '../../hooks';
import { useSalas } from '../../hooks/queryes';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { turmas } from '@utils/ListaTurma';

type Props = ReturnType<typeof useSalaController>;

export const CorpoEditarSala: FC<Props> = ({
  register,
  control,
  errors,
  watch,
  append,
  remove,
  fields,
  handleSala,
  setValue,
}) => {
  const [permitirTentativas, setPermitirTentativas] = React.useState(false);
  const [salaAtiva, setSalaAtiva] = React.useState(false);
  const { instituicoes, estaCarregandoInstituicoes } = useSalas();

  const pergunta = watch('flashcardTemp.pergunta');
  const resposta = watch('flashcardTemp.resposta');

  const botaoDesabilitado = !pergunta || !resposta;

  const adicionarFlashcard = () => {
    if (!pergunta || !resposta) return;

    append({ pergunta, resposta });

    setValue('flashcardTemp.pergunta', '');
    setValue('flashcardTemp.resposta', '');
  };

  return (

    <ContainerLayout>
      <ColunaEsquerda>
        <CardsContainerInformacaoGeral>
          <div className="textos">
            <BlocoAzulIcon>
              <Info size={20} color="#4f39f6" />
            </BlocoAzulIcon>

            <Tipografias.LegendaMedio>Informações Gerais</Tipografias.LegendaMedio>
          </div>

          <Divider className='divider' />

          <div>
            <InputContainer>
              <InputCustomizado.InputComum
                label="Nome da Sala * "
                placeholder={'Ex: Sala de Matemática'}
                {...register('nome')}
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
            </InputContainer>

            <InputContainer>
              <InputCustomizado.InputTexto
                label="Descrição"
                placeholder={'Breve descrição dos objetivos desta sala'}
                {...register('descricao')}
                error={!!errors.descricao}
                helperText={errors.descricao?.message}
              />
              <Controller
                name="instituicao_id"
                control={control}
                render={({ field }) => (
                  <InputCustomizado.AutoComplete
                    label="Instituição *"
                    options={instituicoes || []}
                    value={instituicoes?.find(i => i.value === field.value) || null}
                    handleChangeState={(novo) => field.onChange(novo?.value ?? null)}
                    error={!!errors.instituicao_id}
                    helperText={errors.instituicao_id?.message}
                    placeholder="Selecione a instituição"
                    loading={estaCarregandoInstituicoes}
                  />
                )}
              />

              <Controller
                name="turma"
                control={control}
                render={({ field }) => (
                  <InputCustomizado.AutoComplete
                    label="Turma *"
                    options={turmas}
                    value={turmas.find(t => t.value === field.value) || null}
                    handleChangeState={(opcao) =>
                      field.onChange(opcao?.value ?? null)
                    }
                    error={!!errors.turma}
                    helperText={errors.turma?.message}
                    placeholder="Selecione a turma"
                  />
                )}
              />

            </InputContainer>
          </div>
        </CardsContainerInformacaoGeral>

        <CardsContainerFlashcards>
          <div className="textos">
            <BlocoAzulIcon>
              <BookOpen size={20} color="#4f39f6" />
            </BlocoAzulIcon>

            <Tipografias.LegendaMedio>Flashcards</Tipografias.LegendaMedio>
          </div>

          <div>
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
                    render={({ field }) => (
                      <InputCustomizado.InputTexto
                        label="Resposta"
                        placeholder="Digite a resposta do flashcard"
                        {...register('flashcardTemp.resposta')}
                        error={!!errors.flashcardTemp?.resposta}
                        helperText={errors.flashcardTemp?.resposta?.message}
                      />
                    )}
                  />

                </div>

                <ContainerBotao>
                  <BotaoCustomizado.BotaoPrimario
                    startIcon={<Plus size={20} />}
                    disabled={botaoDesabilitado}
                    onClick={adicionarFlashcard}
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
                          <span className="numero-flashcard">{index + 1}</span>
                        </BlocoAzulIcon>
                      </div>

                      <div className="conteudo">
                        <Tipografias.TextoSimples>PERGUNTA</Tipografias.TextoSimples>
                        <Tipografias.TextoSimples>{item.pergunta}</Tipografias.TextoSimples>

                        <Tipografias.TextoSimples className="respostaTextoDois">
                          RESPOSTA
                        </Tipografias.TextoSimples>
                        <Tipografias.TextoSimples className="respostaTexto">
                          {item.resposta}
                        </Tipografias.TextoSimples>
                      </div>

                      <div className="acoes">
                        <Pencil size={20} color="#4f39f6" />
                        <Trash2
                          size={20}
                          color="#ee124d"
                          onClick={() => remove(index)}
                        />
                      </div>
                    </CardListaPerguntaAdicionado>
                  ))
                )}


              </CardPerguntasERespostas>
            </InputContainer>
          </div>
        </CardsContainerFlashcards>
      </ColunaEsquerda>

      <ColunaDireita>
        <CardsContainerConfiguracoes>
          <div className="textos">
            <BlocoAzulIcon>
              <SlidersHorizontal size={20} color="#4f39f6" />
            </BlocoAzulIcon>

            <Tipografias.LegendaMedio>Configurações</Tipografias.LegendaMedio>
          </div>

          <div>
            <InputContainer>

              <ContainerConfiguracoesTextosLinha>
                <ContainerConfiguracoesTextos>
                  <Tipografias.TextoSimples>Sala ativa?</Tipografias.TextoSimples>
                  <Tipografias.LegendaSimples>
                    Alunos poderão visualizá-la
                  </Tipografias.LegendaSimples>
                </ContainerConfiguracoesTextos>

                <Controller
                  name="ativa"
                  control={control}
                  render={({ field }) => (
                    <InputCustomizado.InputSwitche
                      label=''
                      checked={field.value}
                      handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        field.onChange(e.target.checked)
                      }
                    />
                  )}
                />
              </ContainerConfiguracoesTextosLinha>

              <ContainerConfiguracoesTextosLinha>
                <ContainerConfiguracoesTextos>
                  <Tipografias.TextoSimples>Permitir novas tentativas?</Tipografias.TextoSimples>
                  <Tipografias.LegendaSimples>
                    Após concluir um ciclo
                  </Tipografias.LegendaSimples>
                </ContainerConfiguracoesTextos>

                <Controller
                  name="permitir_tentativas"
                  control={control}
                  render={({ field }) => (
                    <InputCustomizado.InputSwitche
                      label=''
                      checked={field.value}
                      handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        field.onChange(e.target.checked)
                      }
                    />
                  )}
                />
              </ContainerConfiguracoesTextosLinha>
              <div className='input'>
                <Controller
                  name="limite_tentativas"
                  control={control}
                  render={({ field }) => (
                    <InputCustomizado.InputComum
                      label="Limite de tentativas por sessão"
                      placeholder="Sem limite"
                      type="number"
                      value={field.value ?? ''}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === '' ? null : Number(e.target.value)
                        )
                      }
                      disabled={!watch('permitir_tentativas')}
                      error={!!errors.limite_tentativas}
                      helperText={errors.limite_tentativas?.message}
                    />
                  )}
                />
              </div>
              <CardsInformacoesAdicionais>
                <TextoInformacoesAdicionais>
                  Mudanças nestas configurações<strong> não afetarão</strong>{' '}
                  tentativas ou ciclos que já foram iniciados por alunos.
                </TextoInformacoesAdicionais>
              </CardsInformacoesAdicionais>

            </InputContainer>
          </div >
        </CardsContainerConfiguracoes >
        <ContainerBotao className='botaoCustomizado'>
          <BotaoCustomizado.BotaoSecundario className='botaoCustomizado' titulo='Cancelar' />
          <BotaoCustomizado.BotaoPrimario className='botaoCustomizado' titulo='Criar Sala' startIcon={<Plus size={20} />} onClick={handleSala} />

        </ContainerBotao>
      </ColunaDireita>
      <BackDropCustomizado aberto={estaCarregandoInstituicoes} />
    </ContainerLayout>
  )
};

