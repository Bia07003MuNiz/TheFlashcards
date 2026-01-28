// relatorioAluno.routes.ts
import { Router } from "express";
import Controller from "./relatorioAluno.controller";

const router = Router();

router.post("/", Controller.create);
router.get("/:id", Controller.readById);
router.get("/geral/:relatorio_geral_id", Controller.readByRelatorioGeral);
router.get("/aluno/:aluno_id/sala/:sala_id", Controller.readByAluno);
router.delete("/:id", Controller.delete);

export default router;
