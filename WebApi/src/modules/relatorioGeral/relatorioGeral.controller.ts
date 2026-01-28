
import { Request, Response } from "express";
import Service from "./relatorioGeral.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class RelatorioGeralController {

  @TryCatch()
  async create(req: Request, res: Response) {
    const result = await Service.create(req.body);
    res.status(201).json(result);
  }

  @TryCatch()
  public async readBySalaId(req: Request, res: Response) {
    const { sala_id } = req.params;
    const relatorio = await Service.readBySalaId(+sala_id);
    res.status(200).json(relatorio);
  }
}

export default new RelatorioGeralController();
