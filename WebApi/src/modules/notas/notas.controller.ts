import { Request, Response } from "express";
import Service from "./notas.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class NotasController {

  @TryCatch()
  async create(req: Request, res: Response) {
    const usuarioId = (req as any).user.id;
    const result = await Service.create(usuarioId, req.body);
    res.status(201).json(result);
  }

  @TryCatch()
  async read(req: Request, res: Response) {
    const usuarioId = (req as any).user.id;
    const result = await Service.read(usuarioId);
    res.json(result);
  }

  @TryCatch()
  async readById(req: Request, res: Response) {
    const usuarioId = (req as any).user.id;
    const result = await Service.readById(+req.params.id, usuarioId);
    res.json(result);
  }

  @TryCatch()
  async update(req: Request, res: Response) {
    const usuarioId = (req as any).user.id;
    const result = await Service.update(+req.params.id, usuarioId, req.body);
    res.json(result);
  }

  @TryCatch()
  async inativar(req: Request, res: Response) {
    const usuarioId = (req as any).user.id;
    const result = await Service.inativar(+req.params.id, usuarioId, req.body);
    res.json(result);
  }

  @TryCatch()
  async delete(req: Request, res: Response) {
    const usuarioId = (req as any).user.id;
    await Service.delete(+req.params.id, usuarioId);
    res.status(204).send();
  }
}

export default new NotasController();