import { createContext, FC, useCallback, useContext, useState } from 'react';

interface IComumContextoValue {
  abreModalDePolitica: boolean;
  setAbreModalDePolitica: React.Dispatch<React.SetStateAction<boolean>>
  handleFechaModalPolitica: ()=> void
  handleAbreModalPolitica: ()=> void
  politicaAtual: string
  handleAlteraPoliticaAtual: (politicaAtual: string)=> void
  abreModalComoFunciona: boolean
  handleFechaModalComoFunciona: ()=> void
  handleAbreModalComoFunciona: ()=> void
}

const ComumContexto = createContext({} as IComumContextoValue);

export const ComumProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const [abreModalDePolitica, setAbreModalDePolitica] = useState(false);
  const [abreModalComoFunciona, setAbreModalComoFunciona] = useState(false);
  const [politicaAtual, setPoliticaAtual] = useState('introducao');

  const handleFechaModalPolitica = useCallback(() => {
    setAbreModalDePolitica(false);
  }, []);

  const handleAbreModalPolitica = useCallback(() => {
    setAbreModalDePolitica(true);
  }, []);

  const handleAlteraPoliticaAtual = useCallback((politicaAtual: string) => {
    setPoliticaAtual(politicaAtual);
  }, []);

  const handleFechaModalComoFunciona = useCallback(() => {
    setAbreModalComoFunciona(false);
  }, []);

  const handleAbreModalComoFunciona = useCallback(() => {
    setAbreModalComoFunciona(true);
  }, []);

  return (
    <ComumContexto.Provider value={{ handleAbreModalPolitica, handleFechaModalPolitica, abreModalDePolitica, setAbreModalDePolitica, handleAlteraPoliticaAtual, politicaAtual, handleAbreModalComoFunciona, handleFechaModalComoFunciona, abreModalComoFunciona }}>
      {children}
    </ComumContexto.Provider>
  );
};

const useComum = () => {
  const context = useContext(ComumContexto);

  if (!context) {
    throw new Error('useComum must be used within an AuthProvider');
  }

  return context;
};

export default useComum;
