import { Container, Conteudo } from './styles';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { BackDropCustomizado } from '@shared/components/backDrop';
import { CardsComponent } from '@shared/components/cards';
import { BotaoCustomizado } from '@shared/components/botao';
import { Tipografias } from '@shared/components/tipografias';
import { Chip } from '@mui/material';

import { BookOpen, Pencil } from 'lucide-react';
import { useInstituicoesBuscar } from '../../hooks/queryes';

export const Cards = () => {
  const { data = [], isLoading, isPending } = useInstituicoesBuscar();
  const navigate = useNavigate();

  const cards = useMemo(
    () =>
      data.map((item) => ({
        label: `${item.nome}`,
        icon: <BookOpen size={16} color="#76869c" />,
        legenda: (
          <Tipografias.LegendaSimples>
            {item.rua}, {item.numero} - {item.bairro} - {item.cidade} - {item.estado}
          </Tipografias.LegendaSimples>
        ),
        chip: (
          <Chip
            label={item.cep}
            color={'primary'}
            size="small"
          />
        ),
        botao: (
          <BotaoCustomizado.BotaoPrimario
            titulo="Editar"
            startIcon={<Pencil size={18} />}
            onClick={() => navigate(`/instituicao/editar/${item.id}`)}
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
              Nenhuma instituição encontrada
            </Tipografias.LegendaSimples>
          }
        />
      </Conteudo>

      <BackDropCustomizado aberto={isLoading || isPending} />
    </Container>
  );
};
