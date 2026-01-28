
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { createSalaSchema } from "./dtos/create.dto";
import { UpdateSalaSchema } from "./dtos/update.dto";

class SalaValidator extends BaseValidator {

  create: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", createSalaSchema);
  };

  update: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", UpdateSalaSchema);
  };
}

export default new SalaValidator();
