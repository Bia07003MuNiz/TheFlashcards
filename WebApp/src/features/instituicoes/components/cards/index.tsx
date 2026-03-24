import { Container, Conteudo } from './styles';
import { useMemo } from 'react';
import { data, useNavigate } from 'react-router-dom';

import { BackDropCustomizado } from '@shared/components/backDrop';
import { CardsComponent } from '@shared/components/cards';
import { BotaoCustomizado } from '@shared/components/botao';
import { Tipografias } from '@shared/components/tipografias';
import { Chip } from '@mui/material';

import { BookOpen, Pencil } from 'lucide-react';
import { useInstituicoes } from '../novo/hooks/queryes';

export const Cards = () => {
  const { instituicoes = [], estaCarregandoInstituicoes, buscaInstituicoesNovamente } = useInstituicoes();
  const navigate = useNavigate();

  const cards = useMemo(
    () =>
      instituicoes.map((item) => ({
        label: `${item.label}`,
        icon: <BookOpen size={16} color="#76869c" />,
        legenda: (
          <Tipografias.LegendaSimples>
            {item.value}
          </Tipografias.LegendaSimples>
        ),
        // chip: (
        //   <Chip
        //     label={item.ativa ? 'Ativo' : 'Inativo'}
        //     color={item.ativa ? 'success' : 'error'}
        //     size="small"
        //   />
        // ),
        botao: (
          <BotaoCustomizado.BotaoPrimario
            titulo="Editar"
            startIcon={<Pencil size={18} />}
            onClick={() => navigate(`/sala/editar/${item.value}`)}
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

      <BackDropCustomizado aberto={estaCarregandoInstituicoes} />
    </Container>
  );
};
