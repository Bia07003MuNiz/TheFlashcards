import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';

export const Cabecalho = () => {

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div className="textos">
            <Tipografias.Titulo>Minhas Notas</Tipografias.Titulo>
            <Tipografias.Legenda>Organize suas anotações e ideias</Tipografias.Legenda>
          </div>
        </ConteudoInical>
      </Conteudo>
    </Container>
  );
};
