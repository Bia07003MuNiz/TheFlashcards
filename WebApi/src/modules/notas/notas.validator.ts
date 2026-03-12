
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { CreateNotaSchema } from "./dtos/create.dto";
import { InativarNotasSchema, UpdateNotasSchema } from "./dtos/update.dto";

class NotasValidator extends BaseValidator {

  create: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", CreateNotaSchema);
  };

  update: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", UpdateNotasSchema);
  };

  inativar: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", InativarNotasSchema);
  };
}

export default new NotasValidator();
