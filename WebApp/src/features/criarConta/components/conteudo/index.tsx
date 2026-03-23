import { BookOpen } from 'lucide-react';
import { Container, Conteudo, BlocoAzul, BoxTexto, BoxBlocoAzul } from './styles';
import { Tipografias } from '@shared/components/tipografias';

export const ConteudoPrincipal = () => {
  return (
    <Container>
      <Conteudo>
        <BlocoAzul>
          <BookOpen size={64} color="#fff" />
        </BlocoAzul>
        <BoxTexto>
          <Tipografias.Titulo className='titulo-apresentacao'>Sua jornada de aprendizado começa aqui</Tipografias.Titulo>
          <Tipografias.Legenda className='legenda-apresentacao'>Acesse a plataforma mais completa para potencializar seus estudos e gerenciar suas aulas com facilidade</Tipografias.Legenda>
        </BoxTexto>
        <BoxBlocoAzul>
          <BlocoAzul className='blocoAzulCustomizado'>
            <Tipografias.Legenda className='titulo-apresentacao'>+50K</Tipografias.Legenda>
            <Tipografias.Legenda className='legenda-apresentacao'>Alunos Ativos</Tipografias.Legenda>

          </BlocoAzul>
          <BlocoAzul className='blocoAzulCustomizado'>
            <Tipografias.Legenda className='titulo-apresentacao'>+2K</Tipografias.Legenda>
            <Tipografias.Legenda className='legenda-apresentacao'>Cursos Online</Tipografias.Legenda>
          </BlocoAzul>
        </BoxBlocoAzul>
      </Conteudo>
    </Container>
  );
};
