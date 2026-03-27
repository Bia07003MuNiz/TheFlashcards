import { Router } from "express";
import Controller from "./sala.controller";
import Validator from "./sala.validator";
import { AuthMiddleware } from "@modules/auth/auth.middleware";

const router = Router();

router.use(AuthMiddleware);
router
  .route("/")
  .post(Validator.create, Controller.create)
  .get(Controller.read);

router
  .route("/:id")
  .get(Validator.pathParams, Controller.readById)
  .put(Validator.pathParams, Validator.update, Controller.update)
  .delete(Validator.pathParams, Controller.delete);

export default router;