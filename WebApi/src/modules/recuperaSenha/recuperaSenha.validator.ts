
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { EnviarCodigoDtoSchema } from "./dtos/enviar-codigo.dto";
import { RedefinirSenhaSchema } from "./dtos/redefinir-senha.dto";

class RecuperaSenhaValidator extends BaseValidator {

  create: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", EnviarCodigoDtoSchema);
  };

  update: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", RedefinirSenhaSchema);
  };
}

export default new RecuperaSenhaValidator();
