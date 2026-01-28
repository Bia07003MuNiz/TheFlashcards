
import { Router } from "express";
import Controller from "./usuario.controller";
import Validator from "./usuario.validator";

const router = Router();

router.post("/", Validator.create, Controller.create);
router.get("/", Controller.read);
router.get("/:id", Validator.pathParams, Controller.readById);
router.put("/:id", Validator.update, Controller.update);
router.delete("/:id", Controller.delete);

export default router;
