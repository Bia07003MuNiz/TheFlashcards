
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { CreateRelatorioAlunoSchema } from "./dtos/create.dto";

class RelatorioAlunoValidator extends BaseValidator {

  create: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", CreateRelatorioAlunoSchema);
  };
}

export default new RelatorioAlunoValidator();
