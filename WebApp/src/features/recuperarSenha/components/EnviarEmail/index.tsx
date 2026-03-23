import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, Form } from './styles';
import { InputCustomizado } from '@shared/components/input';
import { BotaoCustomizado } from '@shared/components/botao';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { Mail, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';
import { useRecuperarSenhaController } from '@features/recuperarSenha/hooks';

export const EnviarEmail = () => {
  const { registerEnviar, errorsEnviar, EnviarCodigo, isPending } = useRecuperarSenhaController();
  const navigate = useNavigate();

  return (
    <Container>
      <Conteudo>
        <div className="areaTexto">
          <Tipografias.Titulo>Recuperar Senha</Tipografias.Titulo>
          <Tipografias.Legenda>Digite seu e-mail para recuperar sua senha</Tipografias.Legenda>
        </div>
        <Form>
          <InputCustomizado.InputComum
            label="E-mail"
            placeholder={'exemplo@email.com'}
            type='email'
            {...registerEnviar('email')}
            error={!!errorsEnviar.email}
            helperText={errorsEnviar.email?.message}
            startAdornment={<Mail color='#94a3b8' size={16} />}
          />
          <BotaoCustomizado.BotaoPrimario titulo='Enviar Link de Recuperação' onClick={EnviarCodigo} />
          <div className="voltar" onClick={() => navigate(rotas.LOGIN)}>
            <ChevronLeft size={18} color='#64748b' />
            <Tipografias.TextoSimples>Voltar para Login</Tipografias.TextoSimples>
          </div>
        </Form>
        <BackDropCustomizado aberto={isPending} />
      </Conteudo>
    </Container>
  );
};
