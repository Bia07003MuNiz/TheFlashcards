import { Router } from "express";
import Controller from "./relatorioGeral.controller";
import Validator from "./relatorioGeral.validator";

const router = Router();

router
  .route("/")
  .post(Validator.create, Controller.create);

router
  .route("/sala/:sala_id")
  .get(Controller.readBySalaId);

export default router;
