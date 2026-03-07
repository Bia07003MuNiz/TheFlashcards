import { Container, Conteudo } from './styles';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { BackDropCustomizado } from '@shared/components/backDrop';
import { CardsComponent } from '@shared/components/cards';
import { BotaoCustomizado } from '@shared/components/botao';
import { Tipografias } from '@shared/components/tipografias';
import { Chip } from '@mui/material';

import { BookOpen, Eye, Pencil } from 'lucide-react';
import { useSalas } from '@features/criarSala/components/novo/hooks/queryes';

export const Cards = () => {
  const { data = [], isLoading, isPending } = useSalas();
  const navigate = useNavigate();

  const cards = useMemo(
    () =>
      data.map((item) => ({
        label: `${item.nome} - ${item.turma}`,
        icon: <BookOpen size={16} color="#76869c" />,
        legenda: (
          <Tipografias.LegendaSimples>
            {item.descricao}
          </Tipografias.LegendaSimples>
        ),
        botao: (
          <BotaoCustomizado.BotaoPrimario
            titulo="Ver Relatório"
            startIcon={<Eye size={18} />}
            onClick={() => navigate(`/relatorios-professor/${item.id}`)}
          />
        ),
      })),
    [data]
  );

  return (
    <Container>
      <Conteudo>
        <CardsComponent
          items={cards}
          emptyState={
            <Tipografias.LegendaSimples>
              Nenhum registro encontrado
            </Tipografias.LegendaSimples>
          }
        />
      </Conteudo>

      <BackDropCustomizado aberto={isLoading || isPending} />
    </Container>
  );
};
