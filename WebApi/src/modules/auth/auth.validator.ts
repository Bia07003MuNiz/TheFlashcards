import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { LoginSchema } from "./dtos/login.dto";

class AuthValidator extends BaseValidator {

  login: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", LoginSchema);
  };

}

export default new AuthValidator();