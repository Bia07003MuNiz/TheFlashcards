import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { MenuNavegacao } from '@features/navegacao';
import { LoginPagina } from '@features/login/pages';
import { SalaPagina } from '@features/sala/pages';
import { NovaSala } from '@features/sala/components/novo';
import { SalaEditar } from '@features/sala/components/editar/pages';
import { RelatoriosProfessorPagina } from '@features/relatorioProfessor/pages';
import { ListaTentativasAluno } from '@features/relatorioProfessor/components/CardsTentativas';
import { TentativasDetalhes } from '@features/relatorioProfessor/components/CardsTentativasDetalhes';
import { ListaAluno } from '@features/relatorioProfessor/components/cardsListaAluno';
import { NotasPagina } from '@features/notas/pages';
import { MeuPerfilPagina } from '@features/perfil/pages';
import { ResponderSalaPagina } from '@features/responderFlashcards/pages';
import { ResponderFlashcards } from '@features/responderFlashcards/components/responderFlashcards';
import { RelatorioResposta } from '@features/responderFlashcards/components/responderFlashcards/relatorioResposta';
import { RelatorioAlunoPagina } from '@features/relatorioAluno/pages';
import { ListaTentativas } from '@features/relatorioAluno/components/CardsTentativas';
import { TentativasDetalhesAluno } from '@features/relatorioAluno/components/CardsTentativasDetalhes';
import { CriarContaPagina } from '@features/criarConta/pages';
import { InserirCodigoPagina, RecuperarSenhaPagina, RedefinirSenhaPagina } from '@features/recuperarSenha/pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sala" replace />} />

        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<LoginPagina />} />
          <Route path="/criar-conta" element={<CriarContaPagina />} />
          <Route path="/recuperar-senha" element={<RecuperarSenhaPagina />} />
          <Route path="/enviar-codigo" element={<InserirCodigoPagina />} />
          <Route path="/redefinir-senha" element={<RedefinirSenhaPagina />} />

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

            <Route path="/notas" element={<NotasPagina />} />

            <Route path="/perfil" element={<MeuPerfilPagina />} />

            <Route path="/responder-sala" element={<ResponderSalaPagina />} />
            <Route path="/responder-sala/:id" element={<ResponderFlashcards />} />
            <Route path="/responder-sala/:id/relatorio" element={<RelatorioResposta />} />

            <Route path="/relatorios-aluno/" element={<RelatorioAlunoPagina />} />
            <Route path="/relatorios-aluno/:idSala" element={<ListaTentativas />} />
            <Route path="/relatorios-aluno/tentativa/:idTentativa" element={<TentativasDetalhesAluno />} />



          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};