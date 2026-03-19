import * as React from 'react';
import { CardsTentativasDetalhes } from './corpo';
import { Cabecalho } from './cabecalho';
import { Corpo } from './styles';

export const TentativasDetalhesAluno = () => {
  return (
    <Corpo>
      <Cabecalho />
      <CardsTentativasDetalhes />
    </Corpo>
  )
};
