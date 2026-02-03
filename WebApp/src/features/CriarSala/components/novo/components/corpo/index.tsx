import * as React from 'react';
import { BlocoAzulIcon, CardPerguntasERespostas, CardsContainerConfiguracoes, CardsContainerFlashcards, CardsContainerInformacaoGeral, CardsInformacoesAdicionais, CardVisualizarFlashcards, ColunaDireita, ColunaEsquerda, ContainerBotao, ContainerConfiguracoesTextos, ContainerConfiguracoesTextosLinha, ContainerLayout, Divider, InputContainer, TextoInformacoesAdicionais } from './styles';
import { Tipografias } from '@shared/components/tipografias';
import { InputCustomizado } from '@shared/components/input';
import { BookOpen, Info, Plus, SlidersHorizontal } from 'lucide-react';
import { BotaoCustomizado } from '@shared/components/botao';
import { useSalaController } from '../../hooks/index';
import { Controller } from 'react-hook-form';

export const CorpoNovaSala = () => {

  const { errors, register, handleSala, control } = useSalaController();
  const [permitirTentativas, setPermitirTentativas] = React.useState(false);
  const [salaAtiva, setSalaAtiva] = React.useState(false);
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
                    options={instituicoes}
                    value={instituicoes.find(i => i.id === field.value) || null}
                    handleChangeState={(novo) => field.onChange(novo?.id ?? null)}
                    error={!!errors.instituicao_id}
                    helperText={errors.instituicao_id?.message}
                    placeholder="Selecione a instituição"
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
                      field.onChange(opcao ? opcao.value : '')
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
                  {...register('flashcards.0.pergunta')}
                  error={!!errors.flashcards?.[0]?.pergunta}
                  helperText={errors.flashcards?.[0]?.pergunta?.message}
                />

                <div className="input">
                  <InputCustomizado.InputTexto
                    label="Resposta"
                    placeholder="Digite a resposta do flashcard"
                    {...register('flashcards.0.resposta')}
                    error={!!errors.flashcards?.[0]?.resposta}
                    helperText={errors.flashcards?.[0]?.resposta?.message}
                  />
                </div>

                <ContainerBotao>
                  <BotaoCustomizado.BotaoPrimario startIcon={<Plus size={20} />} />
                </ContainerBotao>
                <CardVisualizarFlashcards>
                  <BookOpen size={32} color="#c7d0dc" />
                  <span className="titulo">Nenhum flashcard criado ainda</span>
                  <span className="descricao">Preencha o formulário acima para adicionar</span>
                </CardVisualizarFlashcards>

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

                <InputCustomizado.InputSwitche
                  checked={salaAtiva}
                  label=""
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSalaAtiva(e.target.checked)
                  }
                />
              </ContainerConfiguracoesTextosLinha>

              <ContainerConfiguracoesTextosLinha>
                <ContainerConfiguracoesTextos>
                  <Tipografias.TextoSimples>Permitir novas tentativas?</Tipografias.TextoSimples>
                  <Tipografias.LegendaSimples>
                    Após concluir um ciclo
                  </Tipografias.LegendaSimples>
                </ContainerConfiguracoesTextos>

                <InputCustomizado.InputSwitche
                  checked={permitirTentativas}
                  label=""
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPermitirTentativas(e.target.checked)
                  }
                />
              </ContainerConfiguracoesTextosLinha>
              <div className='input'>
                <InputCustomizado.InputComum
                  label="Limite de tentativas por sessão"
                  placeholder={'Sem limite'}
                // {...register('email')}
                // error={!!errors.email}
                // helperText={errors.email?.message}
                // startAdornment={<Mail color='#94a3b8' size={16} />}
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

    </ContainerLayout>
  )
};

const instituicoes = [
  {
    label: 'Escola Estadual Dom Pedro II',
    id: 1,
  },
  {
    label: 'Colégio Objetivo',
    id: 2,
  },
  {
    label: 'Instituto Federal de São Paulo',
    id: 3,
  },
];


const turmas = [
  {
    label: '9º Ano A',
    value: '9A_2025_M',
    serie: '9º Ano',
    anoLetivo: 2025,
    turno: 'Manhã',
  },
  {
    label: '9º Ano B',
    value: '9B_2025_T',
    serie: '9º Ano',
    anoLetivo: 2025,
    turno: 'Tarde',
  },
  {
    label: '1º Ano Ensino Médio A',
    value: '1EM_A_2025_M',
    serie: '1º EM',
    anoLetivo: 2025,
    turno: 'Manhã',
  },
];
