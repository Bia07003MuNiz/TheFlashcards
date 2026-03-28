import { CardBrancoConteudo, ContainerBotao, InputContainer, LinhaInputs } from './styles';
import { Pencil } from 'lucide-react';
import { InputCustomizado } from '@shared/components/input';
import { useMeuUsuarioController } from '@features/perfil/hooks';
import { BotaoCustomizado } from '@shared/components/botao';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { useMeuPerfil } from '@features/perfil/hooks/queryes';
import { Tipografias } from '@shared/components/tipografias';

export const CorpoMeuPerfil = () => {
  const { register, errors, control, handleEditar } = useMeuUsuarioController();
    const { instituicoes, estaCarregandoInstituicoes, meuPerfil } = useMeuPerfil();
  const isAluno = meuPerfil?.role === 'ALUNO';
    return (
      <CardBrancoConteudo>
        <InputContainer>
          <InputCustomizado.InputComum
            label="Nome"
            placeholder={'Ex: Resumo de Biologia'}
            {...register('nome')}
            error={!!errors.nome}
            helperText={errors.nome?.message}
          />
        </InputContainer>

        <InputContainer>
          <InputCustomizado.InputComum
            label="Email"
            placeholder={'Ex: [EMAIL_ADDRESS]'}
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </InputContainer>
      
        <LinhaInputs>
          <InputContainer>
            <InputCustomizado.InputComum
              label="Status"
              placeholder="Ex: ALUNO"
              {...register('role')}
              error={!!errors.role}
              helperText={errors.role?.message}
              disabled={true}
            />
          </InputContainer>

          <InputContainer>
            <Controller
              name="data_nascimento"
              control={control}
              render={({ field }) => (
                <InputCustomizado.InputData
                  label="Data de Nascimento"
                  placeholder="Ex: 01/01/2000"
                  value={field.value ? dayjs(field.value) : null}
                  onChange={(date) =>
                    field.onChange(date ? dayjs(date).toISOString() : null)
                  }
                  onBlur={field.onBlur}
                  error={!!errors.data_nascimento}
                  helperText={errors.data_nascimento?.message}
                />
              )}
            />
          </InputContainer>
        </LinhaInputs>
        
        <InputContainer>
            <Controller
            name="instituicoes"
            control={control}
            render={({ field }) => (
              <InputCustomizado.AutoCompleteMultiplo
                label="Instituição *"
                options={instituicoes || []}
                value={
                  instituicoes?.filter(i =>
                    field.value?.includes(Number(i.value))
                  ) || []
                }
                handleChangeState={(novo) => field.onChange(isAluno ? novo.slice(0, 1).map(i => i.value) : novo.map(i => i.value))}
                limitTags={2}
                error={!!errors.instituicoes}
                helperText={errors.instituicoes?.message}
                placeholder="Selecione a instituição"
                loading={estaCarregandoInstituicoes}
                multiple={!isAluno}
              />
            )}
          />
          {isAluno && ( 
            <Tipografias.LegendaSimples>
              ALUNO É VINCULADO A UMA INSTITUIÇÃO
            </Tipografias.LegendaSimples>
          )}
        </InputContainer>
        <InputContainer>
              
          <ContainerBotao className='botaoCustomizado'>
            <BotaoCustomizado.BotaoPrimario className='botaoCustomizado' titulo='Atualizar Perfil' startIcon={<Pencil size={20} />} onClick={handleEditar} />
          </ContainerBotao>
  
        </InputContainer>
      </CardBrancoConteudo>
  
  
  
  
    )
};
