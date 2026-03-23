
import { Request, Response } from "express";
import Service from "./recuperaSenha.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class RecuperaSenhaController {

  @TryCatch()
  async enviarCodigo(req: Request, res: Response) {
    const result = await Service.enviarCodigo(req.body);
    res.status(201).json(result);
  }

  @TryCatch()
  async validarCodigo(req: Request, res: Response) {
    const result = await Service.validarCodigo(req.body);
    res.json(result);
  }

  @TryCatch()
  async redefinirSenha(req: Request, res: Response) {
    const result = await Service.redefinirSenha(+req.params.id, req.body);
    res.json(result);
  }
}

export default new RecuperaSenhaController();
