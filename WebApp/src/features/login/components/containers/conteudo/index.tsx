import { Container, Conteudo } from './styles';
import backgroundImg from './image.png';

export const ConteudoPrincipal = () => {
  return (
    <Container>
      <Conteudo>
        <img src={backgroundImg} className="logo_principal"/>
      </Conteudo>
    </Container>
  );
};
