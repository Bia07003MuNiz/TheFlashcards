import { ConteudoPrincipal } from './conteudo';
import { Corpo } from './styles';

export const RecuperarSenhaLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Corpo>
      <ConteudoPrincipal />
      <div className="lado-apresentacao-container">
        {children}
      </div>
    </Corpo>
  );
};