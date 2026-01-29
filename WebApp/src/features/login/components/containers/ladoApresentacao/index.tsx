import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, Form } from './styles';
import { LogoPrincipal } from '@features/navegacao/barraLateral/components/icons';
import { InputCustomizado } from '@shared/components/input';
import { BotaoCustomizado } from '@shared/components/botao';
import { useLoginController } from '@features/login/hooks/formulario';
import { BackDropCustomizado } from '@shared/components/backDrop';

export const LadoApresentacao = () => {
  const { register, errors, handleLogar, estaLogando } = useLoginController();

  return (
    <Container>
      <LogoPrincipal/>
      <Conteudo>
        <div className="areaTexto">
          <Tipografias.Titulo>Login</Tipografias.Titulo>
          <Tipografias.Legenda>Bem vindo(a) de volta! Por favor, insira suas credenciais.</Tipografias.Legenda>
        </div>
        <Form>
          <InputCustomizado.InputComum
            label="Usuário ou E-mail"
            placeholder={'Usuário ou E-mail'}
            type='email'
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <InputCustomizado.InputComum
            label="Senha"
            placeholder={'Senha'}
            {...register('senha')}
            error={!!errors.senha}
            type='password'
            helperText={errors.senha?.message}
          />
          <div className="recuperarSenha">
            <InputCustomizado.InputCheckBox
              label='Lembrar de mim'
            />
            <Tipografias.Legenda className='esqueci_minha_senha'>Esqueci minha senha</Tipografias.Legenda>
          </div>
          <BotaoCustomizado.BotaoPrimario titulo='Entrar' onClick={handleLogar} />
        </Form>
        <BackDropCustomizado aberto={estaLogando}/>
      </Conteudo>
    </Container>
  );
};
