import * as React from 'react';
import { ColunaDireita, ColunaEsquerda, ContainerBotao, ContainerLayout, BlocoAzulIcon, CardsContainerInformacaoGeral, Divider, InputContainer, LinhaInputs } from './styles';
import { BotaoCustomizado } from '@shared/components/botao';
import { Info, Plus } from 'lucide-react';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';
import { Tipografias } from '@shared/components/tipografias';
import { InputCustomizado } from '@shared/components/input';
import { useInstituicaoController } from '../../hooks';
import IbgeService from '@services/ibge.service';
import { formatarCep } from '@utils/Mascara';

export const CorpoNovaInstituicao = () => {
  const { handleInstituicao, register, control, errors, isPending, setValue, watch } = useInstituicaoController();
  const navigate = useNavigate();
  const cep = watch('cep');

  React.useEffect(() => {
    const cepLimpo = cep?.replace(/\D/g, '');
    if (cepLimpo?.length !== 8) return;

    (async () => {
      try {
        const { data } = await IbgeService.buscar(cepLimpo);
        const endereco = data.erro ? {} : {
          rua: data.logradouro || '',
          bairro: data.bairro || '',
          cidade: data.localidade || '',
          estado: data.uf || ''
        };
        setValue('rua', endereco.rua || '');
        setValue('bairro', endereco.bairro || '');
        setValue('cidade', endereco.cidade || '');
        setValue('estado', endereco.estado || '');
      } catch (err) {
        console.error('Erro ao buscar CEP', err);
      }
    })();
  }, [cep, setValue]);

  return (
    <ContainerLayout>
      <ColunaEsquerda>
        <CardsContainerInformacaoGeral>
          <div className="textos">
            <BlocoAzulIcon>
              <Info size={20} color="#432dd7" />
            </BlocoAzulIcon>

            <Tipografias.LegendaMedio>Informações </Tipografias.LegendaMedio>
          </div>

          <Divider className='divider' />

          <div>
          <LinhaInputs>
  <InputContainer>
    <InputCustomizado.InputComum
      label="Rua *"
      placeholder={'Ex: Rua das Flores'}
      {...register('rua')}
      error={!!errors.rua}
      helperText={errors.rua?.message}
    />
  </InputContainer>

  <InputContainer>
    <InputCustomizado.InputComum
      label="Número *"
      placeholder={'Ex: 123'}
      {...register('numero')}
      error={!!errors.numero}
      helperText={errors.numero?.message}
    />
  </InputContainer>
</LinhaInputs>

<LinhaInputs>
  <InputContainer>
    <InputCustomizado.InputComum
      label="Bairro *"
      placeholder={'Ex: Centro'}
      {...register('bairro')}
      error={!!errors.bairro}
      helperText={errors.bairro?.message}
    />
  </InputContainer>

  <InputContainer>
    <InputCustomizado.InputComum
      label="Cidade *"
      placeholder={'Ex: São Paulo'}
      {...register('cidade')}
      error={!!errors.cidade}
      helperText={errors.cidade?.message}
    />
  </InputContainer>
</LinhaInputs>

<LinhaInputs>
  <InputContainer>
    <InputCustomizado.InputComum
      label="CEP *"
      placeholder={'Ex: 00000-000'}
      {...register('cep', { onChange: (e) => setValue('cep', formatarCep(e.target.value)) })}
      error={!!errors.cep}
      helperText={errors.cep?.message}
    />
  </InputContainer>

  <InputContainer>
    <InputCustomizado.InputComum
      label="Estado *"
      placeholder={'Ex: SP'}
      {...register('estado')}
      error={!!errors.estado}
      helperText={errors.estado?.message}
    />
  </InputContainer>
</LinhaInputs>
          </div>
        </CardsContainerInformacaoGeral>
        <ContainerBotao className='botaoCustomizado'>
          <BotaoCustomizado.BotaoSecundario className='botaoCustomizado' titulo='Cancelar' onClick={() => navigate(rotas.INSTITUICAO)} />
          <BotaoCustomizado.BotaoPrimario className='botaoCustomizado' titulo='Criar Instituição' startIcon={<Plus size={20} />} onClick={handleInstituicao} />
        </ContainerBotao>
      </ColunaEsquerda>

      <BackDropCustomizado aberto={isPending} />
    </ContainerLayout>
  );
};