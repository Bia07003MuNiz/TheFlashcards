import { Router } from "express";
import Controller from "./auth.controller";
import Validator from "./auth.validator";

const router = Router();

router.post("/login", Validator.login, Controller.login);

export default router;