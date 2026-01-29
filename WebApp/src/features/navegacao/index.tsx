import { Outlet } from 'react-router-dom';
import { BarraLateralComum } from './barraLateral';
import { Corpo, Pagina, PaginaCompleta } from './styles';
import { ComumProvider } from './context';
import { useRotas } from '@hooks/useRotas';

export const MenuNavegacao = () => {
  const { localizacao } = useRotas();

  const ehTelaCompleta = localizacao.pathname.includes('/gerencial') ? true : false;
  return (
    <ComumProvider>
      <Corpo>
        {!ehTelaCompleta ?
          <>
            <BarraLateralComum/>
            <Pagina >
              <Outlet />
            </Pagina>
          </>
          :
          <PaginaCompleta >
            <Outlet />
          </PaginaCompleta> }
      </Corpo>
    </ComumProvider>
  );
};
