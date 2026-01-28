
import { Request, Response } from "express";
import Service from "./sala.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class SalaController {

  @TryCatch()
  async create(req: Request, res: Response) {
    const result = await Service.create(req.body);
    res.status(201).json(result);
  }

  @TryCatch()
  async read(req: Request, res: Response) {
    const result = await Service.read();
    res.json(result);
  }

  @TryCatch()
  async readById(req: Request, res: Response) {
    const result = await Service.readById(+req.params.id);
    res.json(result);
  }

  @TryCatch()
  async update(req: Request, res: Response) {
    const result = await Service.update(+req.params.id, req.body);
    res.json(result);
  }

  @TryCatch()
  async delete(req: Request, res: Response) {
    await Service.delete(+req.params.id);
    res.status(204).send();
  }
}

export default new SalaController();
