import * as React from 'react';
import { CardsTentativasDetalhes } from './corpo';
import { Cabecalho } from './cabecalho';
import { Corpo } from './styles';

export const TentativasDetalhes = () => {
  return (
    <Corpo>
      <Cabecalho />
      <CardsTentativasDetalhes />
    </Corpo>
  )
};
