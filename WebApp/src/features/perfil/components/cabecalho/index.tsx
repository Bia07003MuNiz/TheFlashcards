import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';

export const Cabecalho = () => {

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div className="textos">
            <Tipografias.Titulo>Meu Perfil</Tipografias.Titulo>
            <Tipografias.Legenda>Gerencie e atualize suas informações pessoais</Tipografias.Legenda>
          </div>
        </ConteudoInical>
      </Conteudo>
    </Container>
  );
};
