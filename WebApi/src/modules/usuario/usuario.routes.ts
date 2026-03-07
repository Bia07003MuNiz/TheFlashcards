
import { Router } from "express";
import Controller from "./usuario.controller";
import Validator from "./usuario.validator";
import { AuthMiddleware } from "@modules/auth/auth.middleware";

const router = Router();

router.post("/", Validator.create, Controller.create);
router.get("/", Controller.read);

router.route('/buscar-meu-perfil').get(AuthMiddleware, Controller.BuscarMeuPerfil);

router.get("/:id", Validator.pathParams, Controller.readById);
router.put("/:id", Validator.update, Controller.update);
router.delete("/:id", Controller.delete);

export default router;
