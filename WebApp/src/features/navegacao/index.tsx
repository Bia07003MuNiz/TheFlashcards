import { Outlet } from 'react-router-dom';
import { BarraLateralComum } from './barraLateral';
import { Corpo, Pagina, PaginaCompleta } from './styles';
import { ComumProvider } from './context';
import { useRotas } from '@hooks/useRotas';
import { useTheme, useMediaQuery, Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';

export const MenuNavegacao = () => {
  const { localizacao } = useRotas();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);

  const ehTelaCompleta = localizacao.pathname.includes('/gerencial');

  if (ehTelaCompleta) {
    return (
      <ComumProvider>
        <PaginaCompleta>
          <Outlet />
        </PaginaCompleta>
      </ComumProvider>
    );
  }

  if (isMobile) {
    return (
      <ComumProvider>
        <PaginaCompleta>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
          >
            <BarraLateralComum />
          </Drawer>

          <Outlet />
        </PaginaCompleta>
      </ComumProvider>
    );
  }

  return (
    <ComumProvider>
      <Corpo>
        <BarraLateralComum />
        <Pagina>
          <Outlet />
        </Pagina>
      </Corpo>
    </ComumProvider>
  );
};