// relatorioAluno.controller.ts
import { Request, Response } from "express";
import Service from "./relatorioAluno.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class Controller {
  @TryCatch()
  public async create(req: Request, res: Response) {
    const result = await Service.create(req.body);
    res.status(201).json(result);
  }

  @TryCatch()
  public async readById(req: Request, res: Response) {
    const result = await Service.readById(+req.params.id);
    res.status(200).json(result);
  }

  @TryCatch()
  public async readByRelatorioGeral(req: Request, res: Response) {
    const result = await Service.readByRelatorioGeral(+req.params.relatorio_geral_id);
    res.status(200).json(result);
  }

  @TryCatch()
  public async relatorioSala(req: Request, res: Response) {  // ✅ novo
    const result = await Service.gerarRelatorioSala(+req.params.sala_id);
    res.status(200).json(result);
  }

  @TryCatch()
public async relatorioTentativaDetalhada(req: Request, res: Response) {
  const tentativaId = +req.params.tentativa_id;

  // se quiser usar usuário do token 👇
 const usuarioId = (req as any).user.id;
  const result = await Service.buscarTentativaDetalhada(
    tentativaId,
    usuarioId
  );

  res.status(200).json(result);
}

  @TryCatch()
  public async delete(req: Request, res: Response) {
    const result = await Service.delete(+req.params.id);
    res.status(200).json(result);
  }
}

export default new Controller();