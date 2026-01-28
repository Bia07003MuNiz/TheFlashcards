import { Router } from "express";
import Controller from "./respostaFlashcard.controller";

const router = Router();

router.post("/", Controller.responder);

export default router;
