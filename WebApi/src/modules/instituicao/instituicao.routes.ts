import { Router } from "express";
import Controller from "./instituicao.controller";
import Validator from "./instituicao.validator";

const router = Router();

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
