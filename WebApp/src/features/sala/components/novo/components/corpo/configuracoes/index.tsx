import * as React from 'react';
import { BlocoAzulIcon, CardsContainerConfiguracoes, CardsInformacoesAdicionais, ContainerBotao, ContainerConfiguracoesTextos, ContainerConfiguracoesTextosLinha, InputContainer, TextoInformacoesAdicionais } from './styles';
import { Tipografias } from '@shared/components/tipografias';
import { InputCustomizado } from '@shared/components/input';
import { Plus, SlidersHorizontal } from 'lucide-react';
import { BotaoCustomizado } from '@shared/components/botao';
import { useSalaController } from '../../../hooks/index';
import { Controller } from 'react-hook-form';

export const Configuracoes = () => {
  const { control, errors, watch } = useSalaController();

  return (
    <>
      <CardsContainerConfiguracoes>
        <div className="textos">
          <BlocoAzulIcon>
            <SlidersHorizontal size={20} color="#432dd7" />
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
                Se a opção <strong>“Permitir tentativas”</strong> estiver ativada e nenhum limite for informado, basta deixar o campo em branco para permitir tentativas ilimitadas.
              </TextoInformacoesAdicionais>
            </CardsInformacoesAdicionais>
            <CardsInformacoesAdicionais>
              <TextoInformacoesAdicionais>
                Mudanças nestas configurações<strong> não afetarão</strong>{' '}
                tentativas ou ciclos que já foram iniciados por alunos.
              </TextoInformacoesAdicionais>
            </CardsInformacoesAdicionais>
          </InputContainer>
        </div >
      </CardsContainerConfiguracoes >
    </ >

  )
};
