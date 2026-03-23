import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, Form } from './styles';
import { InputCustomizado } from '@shared/components/input';
import { BotaoCustomizado } from '@shared/components/botao';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { Mail, ChevronLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { rotas } from '@constants/rotas';
import { useRecuperarSenhaController } from '@features/recuperarSenha/hooks';
import { useEffect } from 'react';
import { useRedefinirSenha } from './hooks';

export const RedefinirSenha = () => {
const location = useLocation();
const email = location.state?.email || '';
const codigo = location.state?.codigo || '';
console.log(email, codigo);
const { RedefinirSenha, register, errors, isPendingPut } = useRedefinirSenha(email, codigo);
const navigate = useNavigate();
  return (
    <Container>
      <Conteudo>
        <div className="areaTexto">
          <Tipografias.Titulo>Redefinir Senha</Tipografias.Titulo>
        </div>
        <Form>
          <InputCustomizado.InputComum
            label="Senha"
            placeholder={'Digite sua nova senha'}
            type='novaSenha'
            {...register('novaSenha')}
            error={!!errors.novaSenha}
            helperText={errors.novaSenha?.message}
            startAdornment={<Mail color='#94a3b8' size={16} />}
          />
          <input type="hidden" {...register('email')} />
          <input type="hidden" {...register('codigo')} />
          <BotaoCustomizado.BotaoPrimario titulo='Alterar Senha' onClick={RedefinirSenha} />
          <div className="voltar" onClick={() => navigate(rotas.LOGIN)}>
            <ChevronLeft size={18} color='#64748b' />
            <Tipografias.TextoSimples>Voltar para Login</Tipografias.TextoSimples>
          </div>
        </Form>
        <BackDropCustomizado aberto={isPendingPut} />
      </Conteudo>
    </Container>
  );
};