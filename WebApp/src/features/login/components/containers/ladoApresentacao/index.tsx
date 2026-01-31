import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, Divider, Form } from './styles';
import { InputCustomizado } from '@shared/components/input';
import { BotaoCustomizado } from '@shared/components/botao';
import { useLoginController } from '@features/login/hooks/formulario';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { Mail, Lock, MoveRight } from 'lucide-react';

export const LadoApresentacao = () => {
  const { register, errors, handleLogar, estaLogando } = useLoginController();

  return (
    <Container>
      <Conteudo>
        <div className="areaTexto">
          <Tipografias.Titulo>Plataforma de Estudo</Tipografias.Titulo>
          <Tipografias.Legenda>Acesse sua conta para continuar</Tipografias.Legenda>
        </div>
        <Form>
          <InputCustomizado.InputComum
            label="E-MAIL"
            placeholder={'exemplo@email.com'}
            type='email'
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            startAdornment={<Mail color='#94a3b8' size={16} />}
          />

          <InputCustomizado.InputComum
            label="SENHA"
            placeholder="••••••••"
            type="password"
            {...register('senha')}
            error={!!errors.senha}
            helperText={errors.senha?.message}
            startAdornment={<Lock color='#94a3b8' size={16} />}
          />

          <div className="recuperarSenha">

            <Tipografias.Legenda className='esqueci_minha_senha'>Esqueci minha senha</Tipografias.Legenda>
          </div>
          <BotaoCustomizado.BotaoPrimario titulo='Entrar' onClick={handleLogar} />
          <Divider />
          <div className="areaCadastro">
            <Tipografias.Legenda className='nao_tem_conta'>Não tem conta?</Tipografias.Legenda>
            <Tipografias.Legenda className='criar_conta'>Criar conta</Tipografias.Legenda>
          </div>
        </Form>
        <BackDropCustomizado aberto={estaLogando} />
      </Conteudo>
    </Container>
  );
};
