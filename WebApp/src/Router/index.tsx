import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { MenuNavegacao } from '@features/navegacao';
import { LoginPagina } from '@features/login/pages';
import { SalaPagina } from '@features/CriarSala/pages';
import { NovaSala } from '@features/CriarSala/components/novo';
import { SalaEditar } from '@features/CriarSala/components/editar/pages';
import { RelatoriosProfessorPagina } from '@features/RelatorioProfessor/pages';
import { ListaTentativasAluno } from '@features/RelatorioProfessor/components/CardsTentativas';
import { TentativasDetalhes } from '@features/RelatorioProfessor/components/CardsTentativasDetalhes';
import { ListaAluno } from '@features/RelatorioProfessor/components/cardsListaAluno';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sala" replace />} />

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<LoginPagina />} />
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<MenuNavegacao />}>

            <Route path="/sala" element={<SalaPagina />} />
            <Route path="/sala/novo" element={<NovaSala />} />
            <Route path="/sala/editar/:id" element={<SalaEditar />} />

            <Route path="/relatorios-professor" element={<RelatoriosProfessorPagina />} />
            <Route path="/relatorios-professor/:id" element={<ListaAluno />} />
            <Route path="/relatorios-professor/:idSala/aluno/:idAluno" element={<ListaTentativasAluno />} />
            <Route path="/relatorios-professor/tentativa/:id" element={<TentativasDetalhes />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};