import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { MenuNavegacao } from '@features/navegacao';
import { LoginPagina } from '@features/login/pages';
import { SalaPagina } from '@features/CriarSala/pages';
import { NovaSala } from '@features/CriarSala/components/novo';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<LoginPagina />} />
        </Route>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<MenuNavegacao />}>

            <Route path="/sala" element={<SalaPagina />} />
            <Route path="/sala/novo" element={<NovaSala />} />
            <Route path="/sala/editar/:id" element={<SalaPagina />} />


          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
