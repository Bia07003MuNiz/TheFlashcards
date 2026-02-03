import * as React from 'react';
import { CorpoNovaSala } from './components/corpo';
import { CabecalhoNovaSala } from './components/cabecalho';
import { Corpo } from './styles';
export const NovaSala = () => {


  return (
    <Corpo>
      <CabecalhoNovaSala />
      <CorpoNovaSala />
    </Corpo>
  )
};
