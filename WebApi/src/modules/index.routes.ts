import { Router } from "express";

import InstituicaoRoutes from "./instituicao/instituicao.routes";
import UsuarioRoutes from "./usuario/usuario.routes";
import SalaRoutes from "./sala/sala.routes";
import RelatorioGeralRoutes from "./relatorioGeral/relatorioGeral.routes";
import RespostaFlashcardRoutes from "./respostaFlashcard/respostaFlashcard.routes";
import RelatorioAlunoRoutes from "./relatorioAluno/relatorioAluno.routes";

const router = Router();

router.use("/instituicao", InstituicaoRoutes);
router.use("/usuario", UsuarioRoutes);
router.use("/sala", SalaRoutes);
router.use("/relatorio-geral", RelatorioGeralRoutes);
router.use("/relatorio-aluno", RelatorioAlunoRoutes);
router.use("/resposta-flashcard", RespostaFlashcardRoutes);

export default router;
