import { useParams } from 'react-router-dom';

import { BoxGrafico, CardBrancoConteudo, ConteinerAcerto, ConteinerAcertosErros, ConteinerData, ConteinerDireito, ConteinerErro, ConteinerPontuacao, ConteinerTextoGrafico, Conteudo, Divider } from './styles';
import { Tipografias } from '@shared/components/tipografias';
import { Box } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useRelatorioAlunoBuscar } from '@features/relatorioAluno/hooks/queryes';
import { Calendar, CircleCheck, CircleX } from 'lucide-react';

export const Grafico = () => {
  const { idTentativa } = useParams();
  const tentativaId = Number(idTentativa);
  const { tentativas} = useRelatorioAlunoBuscar(undefined, tentativaId);

  if (!tentativas) return null;
  const total = tentativas.total_flashcards;
  const acertos = tentativas.total_acertos;
  const erros = total - acertos;

  const data = [
    { name: 'Acertos', value: acertos, fill: '#22c55e' },
    { name: 'Erros', value: erros, fill: '#ef4444' },
  ];
  const COLORS = ['#22c55e', '#ef4444'];

  return (
    <>
    <CardBrancoConteudo>
      <Conteudo>
        <BoxGrafico>
          <ConteinerTextoGrafico>
            <Tipografias.LegendaMedio>Distribuição de Acertos</Tipografias.LegendaMedio>
          </ConteinerTextoGrafico>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend
                iconType="circle"
                formatter={(value) => {
                  if (value === 'Acertos') return `Corretas`;
                  if (value === 'Erros') return `Incorretas`;
                  return value;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </BoxGrafico>

        <ConteinerDireito>
          <ConteinerPontuacao>
            <Tipografias.Legenda className='pontuacao'>Pontuação Final</Tipografias.Legenda>
            <Tipografias.Titulo>{((acertos / total) * 100).toFixed(0)}%</Tipografias.Titulo>
          </ConteinerPontuacao>

          <ConteinerAcertosErros>
            <ConteinerAcerto>
              <div className='cabecalho'>
                <CircleCheck size={20} color='#22c55e'/>
                <Tipografias.TextoSimples className='texto-corretas'>Corretas</Tipografias.TextoSimples>
              </div>
              <Tipografias.Titulo  className='texto-corretas'>{acertos}</Tipografias.Titulo>
            </ConteinerAcerto>

            <ConteinerErro>
              <div className='cabecalho'>
                <CircleX size={20} color='#ef4444'/>
                <Tipografias.TextoSimples className='texto-incorretas'>Incorretas</Tipografias.TextoSimples>
              </div>
              <Tipografias.Titulo className='texto-incorretas'>{erros}</Tipografias.Titulo>
            </ConteinerErro>
          </ConteinerAcertosErros>
          <Divider />
          <ConteinerData>
            <Calendar size={18} color='#64748b'/>
            <Tipografias.Legenda className='pontuacao'>12/05/2025</Tipografias.Legenda>
          </ConteinerData>
        </ConteinerDireito>
      </Conteudo>
    </CardBrancoConteudo>
    </>

  );
};