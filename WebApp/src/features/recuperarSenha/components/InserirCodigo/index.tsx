import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, Form } from './styles';
import { InputCustomizado } from '@shared/components/input';
import { BotaoCustomizado } from '@shared/components/botao';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { ChevronLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';
import { useRecuperarSenhaController } from '@features/recuperarSenha/hooks';
import { Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';

export const InserirCodigo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailDaEtapa1 = location.state?.email || '';
  const { errorsValidar, ValidarCodigo, isPendingValidar, controlValidar, registerValidar, watch, setValue } = useRecuperarSenhaController();

  useEffect(() => {
    if (emailDaEtapa1) {
      setValue('email', emailDaEtapa1);
    }
  }, [emailDaEtapa1, setValue]);

  const email = watch('email') || '';
  const codigo = watch('codigo') || '';  
  const habilitarBotao = email !== '' && codigo.length === 6;

  return (
    <Container>
      <Conteudo>
        <div className="areaTexto">
          <Tipografias.Titulo>Inserir Código</Tipografias.Titulo>
          <Tipografias.Legenda>Digite o código enviado para o seu e-mail</Tipografias.Legenda>
        </div>
        <Form>
          <input type="hidden" {...registerValidar('email')} />

          <Controller
            name="codigo"
            control={controlValidar}
            render={({ field }) => (
              <InputCustomizado.InputCodigo
                label="Código de Verificação"
                length={6}
                value={field.value || ''}
                onChange={field.onChange}
                error={!!errorsValidar.codigo}
                helperText={errorsValidar.codigo?.message}
              />
            )}
          />

          <BotaoCustomizado.BotaoPrimario
            titulo='Verificar Código'
            onClick={ValidarCodigo}
            disabled={!habilitarBotao}
          />

          <div className="voltar" onClick={() => navigate(rotas.RECUPERAR_SENHA)}>
            <ChevronLeft size={18} color='#64748b' />
            <Tipografias.TextoSimples>Voltar para Recuperação de Senha</Tipografias.TextoSimples>
          </div>
        </Form>
        <BackDropCustomizado aberto={isPendingValidar} />
      </Conteudo>
    </Container>
  );
};