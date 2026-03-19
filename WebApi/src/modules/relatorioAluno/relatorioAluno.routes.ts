import { Router } from "express";
import Controller from "./relatorioAluno.controller";
import { AuthMiddleware } from "@modules/auth/auth.middleware";

const router = Router();
router.use(AuthMiddleware);
router.post("/", Controller.create);
router.get("/:id", Controller.readById);
router.get("/geral/:relatorio_geral_id", Controller.readByRelatorioGeral);

// ✅ Rotas de relatório separadas
router.get("/sala/:sala_id", Controller.relatorioSala);
router.get("/tentativa/:tentativa_id", Controller.relatorioTentativaDetalhada);

router.delete("/:id", Controller.delete);

export default router;