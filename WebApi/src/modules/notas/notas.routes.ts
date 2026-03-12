import { Router } from "express";
import Controller from "./notas.controller";
import Validator from "./notas.validator";
import { AuthMiddleware } from "@modules/auth/auth.middleware";

const router = Router();

router.use(AuthMiddleware);
router
  .route("/")
  .post(Validator.create, Controller.create)
  .get(Controller.read);

router
  .route("/inativar/:id")
  .put(Validator.inativar, Controller.inativar);


router
  .route("/:id")
  .get(Controller.readById)
  .put(Validator.update, Controller.update);

export default router;