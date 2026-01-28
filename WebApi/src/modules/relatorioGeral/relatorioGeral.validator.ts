
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { CreateRelatorioGeralSchema } from "./dtos/create.dto";

class RelatorioGeralValidator extends BaseValidator {

  create: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", CreateRelatorioGeralSchema);
  };

}

export default new RelatorioGeralValidator();
