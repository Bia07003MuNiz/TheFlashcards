import * as React from 'react';
import { useSalaController } from './index';

type SalaContextType = ReturnType<typeof useSalaController>;

const SalaContext = React.createContext<SalaContextType | null>(null);

export const SalaProvider = ({ children }: { children: React.ReactNode }) => {
  const controller = useSalaController();
  return (
    <SalaContext.Provider value={controller}>
      {children}
    </SalaContext.Provider>
  );
};

export const useSalaContext = () => {
  const ctx = React.useContext(SalaContext);
  if (!ctx) throw new Error('useSalaContext deve ser usado dentro de SalaProvider');
  return ctx;
};