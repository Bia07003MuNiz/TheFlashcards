
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { CreateRespostaFlashcardSchema } from "./dtos/create.dto";

class RespostaFlashcardValidator extends BaseValidator {

  create: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", CreateRespostaFlashcardSchema);
  };
}

export default new RespostaFlashcardValidator();
