import { Request, Response } from "express";
import Service from "./relatorioGeral.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class RelatoriosController {
  @TryCatch()
  async create(req: Request, res: Response) {
    const result = await Service.create(req.body);
    res.status(201).json(result);
  }

  @TryCatch()
  async getResumoSala(req: Request, res: Response) {
    const { sala_id } = req.params;
    const result = await Service.getResumoSala(+sala_id);
    res.status(200).json(result);
  }

  @TryCatch()
  async getTentativasAluno(req: Request, res: Response) {
    const { sala_id, aluno_id } = req.params;
    const result = await Service.getTentativasAluno(+sala_id, +aluno_id);
    res.status(200).json(result);
  }

  @TryCatch()
  async getDetalheTentativa(req: Request, res: Response) {
    const { relatorio_id } = req.params;
    const result = await Service.getDetalheTentativa(+relatorio_id);
    res.status(200).json(result);
  }
}

export default new RelatoriosController();