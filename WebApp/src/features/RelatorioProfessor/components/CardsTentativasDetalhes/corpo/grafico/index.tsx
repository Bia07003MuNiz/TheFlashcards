import { useParams } from 'react-router-dom';

import { CardBrancoConteudo, CardGrafico, Container, Conteudo } from './styles';
import { BackDropCustomizado } from '@shared/components/backDrop';
import { Tipografias } from '@shared/components/tipografias';
import { Chip } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useRelatorioBuscar } from '@features/RelatorioProfessor/hooks/queryes';

export const Grafico = () => {
  const { id } = useParams();

  const tentativaId = Number(id);

  const { detalhe, loadingDetalhe } =
    useRelatorioBuscar(undefined, undefined, tentativaId);

  if (!detalhe) return null;
  const total = detalhe.total_flashcards;
  const acertos = detalhe.total_acertos;
  const erros = total - acertos;

  const data = [
    { name: 'Acertos', value: acertos, fill: '#22c55e' },
    { name: 'Erros', value: erros, fill: '#ef4444' },
  ];
  const COLORS = ['#22c55e', '#ef4444'];
  return (

    <>

      <CardGrafico>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              labelLine={false}
              outerRadius={90}
              label={(props) => {
                const { name, percent } = props;

                return `${name ?? ''}: ${((percent ?? 0) * 100).toFixed(0)}%`;
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </CardGrafico>

    </>

  );
};