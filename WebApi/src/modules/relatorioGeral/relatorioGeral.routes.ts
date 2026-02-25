import { Router } from "express";
import Controller from "./relatorioGeral.controller";
import Validator from "./relatorioGeral.validator";

const router = Router();

router
  .route("/")
  .post(Validator.create, Controller.create);


router.get("/sala/:sala_id", Controller.getResumoSala);

router.get(
  "/sala/:sala_id/aluno/:aluno_id",
  Controller.getTentativasAluno
);

router.get(
  "/tentativa/:relatorio_id",
  Controller.getDetalheTentativa
);

export default router;