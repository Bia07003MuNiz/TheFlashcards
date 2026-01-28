import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { CreateInstituicaoDto } from "./dtos/create.dto";
import { UpdateInstituicaoDto } from "./dtos/update.dto";

class InstituicaoValidator extends BaseValidator {
    public create: RequestHandler = (req, _res, next) => {
        this.validateSchema(req, next, "body", CreateInstituicaoDto);
    };

    public update: RequestHandler = (req, _res, next) => {
        this.validateSchema(req, next, "body", UpdateInstituicaoDto);
    };

    public params: RequestHandler = this.pathParams;
}

export default new InstituicaoValidator();
