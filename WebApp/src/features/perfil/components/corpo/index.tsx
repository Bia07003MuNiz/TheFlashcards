import { CardBrancoConteudo, ContainerBotao, InputContainer, LinhaInputs } from './styles';
import { Pencil } from 'lucide-react';
import { InputCustomizado } from '@shared/components/input';
import { useMeuUsuarioController } from '@features/perfil/hooks';
import { BotaoCustomizado } from '@shared/components/botao';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { useMeuPerfil } from '@features/perfil/hooks/queryes';

export const CorpoMeuPerfil = () => {
  const { register, errors, control, handleEditar } = useMeuUsuarioController();
    const { instituicoes, estaCarregandoInstituicoes } = useMeuPerfil();
  
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
                </InputContainer>
        <InputContainer>
              
          <ContainerBotao className='botaoCustomizado'>
            <BotaoCustomizado.BotaoPrimario className='botaoCustomizado' titulo='Atualizar Perfil' startIcon={<Pencil size={20} />} onClick={handleEditar} />
          </ContainerBotao>
  
        </InputContainer>
      </CardBrancoConteudo>
  
  
  
  
    )
};
