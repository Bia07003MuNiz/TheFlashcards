import { BlocoAzulIcon, CardsContainerInformacaoGeral, Divider, InputContainer } from './styles';
import { Tipografias } from '@shared/components/tipografias';
import { InputCustomizado } from '@shared/components/input';
import { Info } from 'lucide-react';
import { useSalaController } from '../../../hooks/index';
import { Controller } from 'react-hook-form';
import { useSalas } from '../../../hooks/queryes';
import { turmas } from '@utils/ListaTurma';

export const InformacoesGerais = () => {
  const { register, control, errors, } = useSalaController();
  const { instituicoes, estaCarregandoInstituicoes } = useSalas();

  return (
    <>
      <CardsContainerInformacaoGeral>
        <div className="textos">
          <BlocoAzulIcon>
            <Info size={20} color="#432dd7" />
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

    </>

  )
};
