import * as React from 'react';
import {
  BlocoAzulIcon,
  CardsContainerConfiguracoes,
  CardsInformacoesAdicionais,
  ContainerConfiguracoesTextos,
  ContainerConfiguracoesTextosLinha,
  InputContainer,
  TextoInformacoesAdicionais,
} from './styles';
import { Tipografias } from '@shared/components/tipografias';
import { InputCustomizado } from '@shared/components/input';
import { SlidersHorizontal } from 'lucide-react';
import { Controller } from 'react-hook-form';
import type { FC } from 'react';
import type { useSalaController } from '../../../hooks';

type Props = Pick<ReturnType<typeof useSalaController>, 'errors' | 'control' | 'watch'>;

export const Configuracoe: FC<Props> = ({ control, errors, watch }) => {
  return (
    <>
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

    </>
  )
};

