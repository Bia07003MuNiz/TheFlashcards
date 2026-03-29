import * as React from 'react';
import { CardsListaAluno } from './corpo';
import { Cabecalho } from './cabecalho';
import { Corpo } from './styles';

export const ListaAluno = () => {

  return (
    <Corpo>
      <Cabecalho />
      <CardsListaAluno />
    </Corpo>
  )
};
