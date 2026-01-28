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
  public async readByAluno(req: Request, res: Response) {
    const aluno_id = +req.params.aluno_id;
    const sala_id = +req.params.sala_id;

    const result = await Service.gerarRelatorioPorAluno(aluno_id, sala_id);
    res.status(200).json(result);
  }

  @TryCatch()
  public async delete(req: Request, res: Response) {
    const result = await Service.delete(+req.params.id);
    res.status(200).json(result);
  }
}

export default new Controller();
