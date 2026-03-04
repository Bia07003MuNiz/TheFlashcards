import { Request, Response } from "express";
import Service from "./auth.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class AuthController {

  @TryCatch()
  async login(req: Request, res: Response) {
    const result = await Service.login(req.body);
    res.json(result);
  }
}

export default new AuthController();