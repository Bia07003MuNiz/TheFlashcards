
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { CreateFlashcardSchema } from "./dtos/create.dto";
import { UpdateFlashcardSchema } from "./dtos/update.dto";

class FlashcardValidator extends BaseValidator {

  create: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", CreateFlashcardSchema);
  };

  update: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", UpdateFlashcardSchema);
  };
}

export default new FlashcardValidator();
