import * as React from 'react';
import { CardsTentativas } from './corpo';
import { Cabecalho } from './cabecalho';
import { Corpo } from './styles';

export const ListaTentativas = () => {

  return (
    <Corpo>
      <Cabecalho />
      <CardsTentativas />
    </Corpo>
  )
};
