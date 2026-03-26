import { ContainerCards, ContainerBotao, ContainerLayout, CardsContainerGeral, InputContainer, LinhaInputs } from './styles';
import { BotaoCustomizado } from '@shared/components/botao';
import { Plus } from 'lucide-react';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';
import { InputCustomizado } from '@shared/components/input';
import { useInstituicaoController } from '../../hooks';
import ibgeService from '@services/ibge.service';
import { formatarCep } from '@utils/Mascara';

export const CorpoNovaInstituicao = () => {
  const { handleInstituicao, register, errors, setValue, isLoading } = useInstituicaoController();
  const navigate = useNavigate();

  const ProcuraCep = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length !== 8) return;

    try {
      const { data } = await ibgeService.buscar(cep);
      if (data.erro) return;

      setValue('bairro', data.bairro);
      setValue('rua', data.logradouro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
    } catch {
      console.error('Erro ao buscar CEP');
    }
  };

  return (
    <ContainerLayout>
      <ContainerCards>
        <CardsContainerGeral>
          <div>
            <LinhaInputs>
              <InputContainer>
                <InputCustomizado.InputComum
                  label="Nome da Instituição *"
                  placeholder="Ex: Colégio Exemplo"
                  {...register('nome')}
                  error={!!errors.nome}
                  helperText={errors.nome?.message}
                />
              </InputContainer>
              <InputContainer>
                <InputCustomizado.InputComum
                  label="CEP *"
                  placeholder="Ex: 12345-678"
                  {...register('cep', { onChange: (e) => setValue('cep', formatarCep(e.target.value)) })}
                  onBlur={ProcuraCep}
                  error={!!errors.cep}
                  helperText={errors.cep?.message}
                />
              </InputContainer>
            </LinhaInputs>

            <LinhaInputs>
              <InputContainer>
                <InputCustomizado.InputComum
                  label="Cidade *"
                  placeholder="Ex: São Paulo"
                  {...register('cidade')}
                  error={!!errors.cidade}
                  helperText={errors.cidade?.message}
                />
              </InputContainer>

              <InputContainer>
                <InputCustomizado.InputComum
                  label="Bairro *"
                  placeholder="Ex: Centro"
                  {...register('bairro')}
                  error={!!errors.bairro}
                  helperText={errors.bairro?.message}
                />
              </InputContainer>
            </LinhaInputs>

            <LinhaInputs>
              <InputContainer>
                <InputCustomizado.InputComum
                  label="Rua *"
                  placeholder="Ex: Rua das Flores"
                  {...register('rua')}
                  error={!!errors.rua}
                  helperText={errors.rua?.message}
                />
              </InputContainer>
              <InputContainer>
                <InputCustomizado.InputComum
                  label="Estado *"
                  placeholder="Ex: SP"
                  {...register('estado')}
                  error={!!errors.estado}
                  helperText={errors.estado?.message}
                />
              </InputContainer>
            </LinhaInputs>

            <LinhaInputs>
              <InputContainer>
                <InputCustomizado.InputComum
                  label="Número *"
                  placeholder="Ex: 123"
                  {...register('numero')}
                  error={!!errors.numero}
                  helperText={errors.numero?.message}
                />
              </InputContainer>
            </LinhaInputs>
          </div>
        </CardsContainerGeral>

        <ContainerBotao className='botaoCustomizado'>
          <BotaoCustomizado.BotaoSecundario className='botaoCustomizado' titulo='Cancelar' onClick={() => navigate(rotas.SALA)} />
          <BotaoCustomizado.BotaoPrimario className='botaoCustomizado' titulo='Criar Instituição' startIcon={<Plus size={20} />} onClick={handleInstituicao} />
        </ContainerBotao>
      </ContainerCards>
      <BackDropCustomizado aberto={isLoading} />
    </ContainerLayout>
  );
};