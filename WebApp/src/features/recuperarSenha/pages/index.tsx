import { EnviarEmail } from '../components/EnviarEmail';
import { InserirCodigo } from '../components/InserirCodigo';
import { RedefinirSenha } from '../components/RedefinirSenha';
import { RecuperarSenhaLayout } from './RecuperarSenhaLayout/RecuperarSenhaLayout';

export const RecuperarSenhaPagina = () => (
  <RecuperarSenhaLayout>
    <EnviarEmail />
  </RecuperarSenhaLayout>
);

export const InserirCodigoPagina = () => (
  <RecuperarSenhaLayout>
    <InserirCodigo />
  </RecuperarSenhaLayout>
);

export const RedefinirSenhaPagina = () => (
  <RecuperarSenhaLayout>
    <RedefinirSenha />
  </RecuperarSenhaLayout>
);