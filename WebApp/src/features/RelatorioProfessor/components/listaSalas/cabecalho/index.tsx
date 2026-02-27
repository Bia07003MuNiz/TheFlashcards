import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';

export const Cabecalho = () => {
  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div className="textos">
            <Tipografias.Titulo>Salas Respondidas</Tipografias.Titulo>
            <Tipografias.Legenda>Visualize o desempenho da salas de todos os alunos</Tipografias.Legenda>
          </div>
        </ConteudoInical>
      </Conteudo>
    </Container>
  );
};
