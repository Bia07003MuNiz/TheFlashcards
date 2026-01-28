
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { CreateUsuarioSchema } from "./dtos/create.dto";
import { UpdateUsuarioSchema } from "./dtos/update.dto";

class Validator extends BaseValidator {

  create: RequestHandler = (req, _, next) =>
    this.validateSchema(req, next, "body", CreateUsuarioSchema);

  update: RequestHandler = (req, _, next) =>
    this.validateSchema(req, next, "body", UpdateUsuarioSchema);

  s
}

export default new Validator();
