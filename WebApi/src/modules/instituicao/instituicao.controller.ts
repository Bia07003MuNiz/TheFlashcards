import { Request, Response } from "express";
import Service from "./instituicao.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class InstituicaoController {
    @TryCatch()
    async create(req: Request, res: Response) {
        const result = await Service.create(req.body);
        res.status(201).json(result);
    }

    @TryCatch()
    async read(req: Request, res: Response) {
        const user = (req as any).user;
        const result = await Service.read(user.id, user.role);
        res.status(200).json(result);
    }

    @TryCatch()
    async readById(req: Request, res: Response) {
        const result = await Service.readById(+req.params.id);
        res.status(200).json(result);
    }

    @TryCatch()
    async update(req: Request, res: Response) {
        const result = await Service.update(+req.params.id, req.body);
        res.status(200).json(result);
    }

    @TryCatch()
    async delete(req: Request, res: Response) {
        const result = await Service.delete(+req.params.id);
        res.status(200).json(result);
    }
}

export default new InstituicaoController();
