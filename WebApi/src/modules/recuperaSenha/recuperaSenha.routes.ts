
import { Router } from "express";
import Controller from "./recuperaSenha.controller";
import Validator from "./recuperaSenha.validator";

const router = Router();

router.post("/", Validator.create, Controller.enviarCodigo); 
router.post("/validar", Validator.validarCodigo, Controller.validarCodigo);
router.put("/", Validator.update, Controller.redefinirSenha);

export default router;
