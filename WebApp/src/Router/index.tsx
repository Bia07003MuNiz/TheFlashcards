import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { MenuNavegacao } from '@features/navegacao';
import { LoginPagina } from '@features/login/pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<LoginPagina />} />
        </Route>
        {/* <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<MenuNavegacao />}>
            <Route path="/" element={<ContaPagarPrincipal />} />

          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
