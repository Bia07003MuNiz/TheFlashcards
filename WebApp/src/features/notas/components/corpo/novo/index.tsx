import { ContainerBotao, InputContainer, Label, PrioridadesContainer } from './styles';
import { InputCustomizado } from '@shared/components/input';
import { Plus } from 'lucide-react';
import { Controller } from 'react-hook-form';
import { useNotasController } from './hooks';
import { BotaoCustomizado } from '@shared/components/botao';

interface NotasNovoProps {
  onFechar: () => void;
}

export const NotasNovo = ({ onFechar }: NotasNovoProps) => {
  const { register, control, errors, handleNotas } = useNotasController(onFechar);

  return (
    <div>
      <InputContainer>
        <InputCustomizado.InputComum
          label="Título da Nota * "
          placeholder={'Ex: Resumo de Biologia'}
          {...register('titulo')}
          error={!!errors.titulo}
          helperText={errors.titulo?.message}
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

        <PrioridadesContainer>
          <Label>Prioridade</Label>
          <Controller
            control={control}
            name="prioridade"
            render={({ field }) => (
              <div className="prioridades">
                <button
                  type="button"
                  className={`prioridade alta ${field.value === "ALTA" ? "ativa" : ""}`}
                  onClick={() => field.onChange("ALTA")}
                >
                  Alta
                </button>

                <button
                  type="button"
                  className={`prioridade media ${field.value === "MEDIA" ? "ativa" : ""}`}
                  onClick={() => field.onChange("MEDIA")}
                >
                  Média
                </button>

                <button
                  type="button"
                  className={`prioridade baixa ${field.value === "BAIXA" ? "ativa" : ""}`}
                  onClick={() => field.onChange("BAIXA")}
                >
                  Baixa
                </button>
              </div>
            )}
          />
        </PrioridadesContainer>

        <ContainerBotao className='botaoCustomizado'>
          <BotaoCustomizado.BotaoSecundario className='botaoCustomizado' titulo='Cancelar' onClick={onFechar} />
          <BotaoCustomizado.BotaoPrimario className='botaoCustomizado' titulo='Criar Sala' startIcon={<Plus size={20} />} onClick={handleNotas} />
        </ContainerBotao>

      </InputContainer>
    </div>
  )
};
