import * as React from 'react';
import { CorpoNovaSala } from './components/corpo';
import { CabecalhoNovaSala } from './components/cabecalho';
import { Corpo } from './styles';
import { SalaProvider } from './hooks/salaContext';
export const NovaSala = () => {

  return (
    <SalaProvider>
    <Corpo>
      <CabecalhoNovaSala />
      <CorpoNovaSala />
    </Corpo>
    </SalaProvider>
  )
};
