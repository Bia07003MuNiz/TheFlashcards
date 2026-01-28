import { Request, Response } from "express";
import { TryCatch } from "@decorators/try-catch.decorator";
import RespostaFlashcardService from "./respostaFlashcard.service";

class Controller {
  @TryCatch()
  public async responder(req: Request, res: Response) {
    const result = await RespostaFlashcardService.responder(req.body);
    res.status(200).json(result);
  }
}

export default new Controller();
