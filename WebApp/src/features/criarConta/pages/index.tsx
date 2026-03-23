import { ConteudoPrincipal } from '../components/conteudo';
import { LadoApresentacao } from '../components/ladoApresentacao';
import { Corpo } from './styles';


export const CriarContaPagina = () => {
  return (
    <Corpo>
      <ConteudoPrincipal />
      <div className="lado-apresentacao-container">
        <LadoApresentacao />
      </div>
    </Corpo>
  );
};
