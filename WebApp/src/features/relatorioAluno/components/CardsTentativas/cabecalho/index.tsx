import { Tipografias } from '@shared/components/tipografias';
import { Container, Conteudo, ConteudoInical } from './styles';
import { BotaoCustomizado } from '@shared/components/botao';
import { ChevronLeft, ListFilter, PlusIcon } from 'lucide-react';
import useQueryParams from '@hooks/useQueryParams';
import { rotas } from '@constants/rotas';
import { useRelatorioAlunoBuscar } from '@features/relatorioAluno/hooks/queryes';
import { useNavigate, useParams } from 'react-router-dom';

export const Cabecalho = () => {
    const { idSala } = useParams();
    const navigate = useNavigate();
    const sala = Number(idSala);
    const { resumo } = useRelatorioAlunoBuscar(sala);

  return (
    <Container>
      <Conteudo>
        <ConteudoInical>
          <div className='voltar'> 
            <ChevronLeft size={30} color='#64748b' onClick={() => navigate(rotas.RELATORIOS_ALUNO)}/>
            <div>
              <Tipografias.Titulo>Histórico de Tentativas</Tipografias.Titulo>
              <Tipografias.Legenda>Todas as tentativas em {resumo?.nome_sala}</Tipografias.Legenda>
            </div>
          </div>
        </ConteudoInical>
      </Conteudo>
    </Container>
  );
};
