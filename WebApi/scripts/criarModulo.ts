import * as fs from "fs/promises";
import * as path from "path";

const createModule = async (moduleName: string) => {
  const basePath = path.join(process.cwd(), "src", "modules", moduleName);
  const dtoPath = path.join(basePath, "dtos");

  try {
    await fs.access(basePath);
    console.error(`❌ Módulo "${moduleName}" já existe.`);
    return;
  } catch { }

  await fs.mkdir(dtoPath, { recursive: true });

  await fs.writeFile(
    path.join(basePath, `${moduleName}.controller.ts`),
    controller(moduleName)
  );

  await fs.writeFile(
    path.join(basePath, `${moduleName}.service.ts`),
    service(moduleName)
  );

  await fs.writeFile(
    path.join(basePath, `${moduleName}.repository.ts`),
    repository(moduleName)
  );

  await fs.writeFile(
    path.join(basePath, `${moduleName}.routes.ts`),
    routes(moduleName)
  );

  await fs.writeFile(
    path.join(basePath, `${moduleName}.validator.ts`),
    validator(moduleName)
  );

  await fs.writeFile(path.join(dtoPath, "create.dto.ts"), createDto(moduleName));
  await fs.writeFile(path.join(dtoPath, "read.dto.ts"), readDto(moduleName));
  await fs.writeFile(path.join(dtoPath, "update.dto.ts"), updateDto(moduleName));
  await fs.writeFile(path.join(dtoPath, "delete.dto.ts"), deleteDto());

  console.log(`✅ Módulo "${moduleName}" criado com sucesso`);
};

/* ================= CONTROLLER ================= */

const controller = (name: string) => `
import { Request, Response } from "express";
import Service from "./${name}.service";
import { TryCatch } from "@decorators/try-catch.decorator";

class ${capitalize(name)}Controller {

  @TryCatch()
  async create(req: Request, res: Response) {
    const result = await Service.create(req.body);
    res.status(201).json(result);
  }

  @TryCatch()
  async read(req: Request, res: Response) {
    const result = await Service.read();
    res.json(result);
  }

  @TryCatch()
  async readById(req: Request, res: Response) {
    const result = await Service.readById(+req.params.id);
    res.json(result);
  }

  @TryCatch()
  async update(req: Request, res: Response) {
    const result = await Service.update(+req.params.id, req.body);
    res.json(result);
  }

  @TryCatch()
  async delete(req: Request, res: Response) {
    await Service.delete(+req.params.id);
    res.status(204).send();
  }
}

export default new ${capitalize(name)}Controller();
`;

/* ================= SERVICE ================= */

const service = (name: string) => `
import Repository from "./${name}.repository";
import { Create${capitalize(name)}Dto } from "./dtos/create.dto";
import { Update${capitalize(name)}Dto } from "./dtos/update.dto";

class ${capitalize(name)}Service {

  private readonly repository;

  constructor() {
    this.repository = Repository;
  }

  async create(data: Create${capitalize(name)}Dto) {
    return this.repository.create(data);
  }

  async read() {
    return this.repository.read();
  }

  async readById(id: number) {
    return this.repository.readById(id);
  }

  async update(id: number, data: Update${capitalize(name)}Dto) {
    return this.repository.update(id, data);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}

export default new ${capitalize(name)}Service();
`;

/* ================= REPOSITORY ================= */

const repository = (name: string) => `
import DataSource from "@database/data-source";
import { Create${capitalize(name)}Dto } from "./dtos/create.dto";
import { Update${capitalize(name)}Dto } from "./dtos/update.dto";

class ${capitalize(name)}Repository {

  private readonly repository;

  constructor() {
    // ⛔ AQUI VOCÊ AJUSTA MANUALMENTE (usuario, instituicao, sala, etc)
    this.repository = DataSource.${name};
  }

  async create(data: Create${capitalize(name)}Dto) {
    return this.repository.create({ data });
  }

  async read() {
    return this.repository.findMany({
      orderBy: { created_at: "desc" },
    });
  }

  async readById(id: number) {
    return this.repository.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Update${capitalize(name)}Dto) {
    return this.repository.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.repository.delete({
      where: { id },
    });
  }
}

export default new ${capitalize(name)}Repository();
`;

/* ================= ROUTES ================= */

const routes = (name: string) => `
import { Router } from "express";
import Controller from "./${name}.controller";
import Validator from "./${name}.validator";

const router = Router();

router
  .route("/")
  .post(Validator.create, Controller.create)
  .get(Controller.read);

router
  .route("/:id")
  .get(Validator.pathParams, Controller.readById)
  .put(Validator.pathParams, Validator.update, Controller.update)
  .delete(Validator.pathParams, Controller.delete);

export default router;
`;

/* ================= VALIDATOR ================= */

const validator = (name: string) => `
import BaseValidator from "@abstracts/validator.abstract";
import { RequestHandler } from "express";
import { Create${capitalize(name)}Schema } from "./dtos/create.dto";
import { Update${capitalize(name)}Schema } from "./dtos/update.dto";

class ${capitalize(name)}Validator extends BaseValidator {

  create: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", Create${capitalize(name)}Schema);
  };

  update: RequestHandler = (req, _, next) => {
    this.validateSchema(req, next, "body", Update${capitalize(name)}Schema);
  };
}

export default new ${capitalize(name)}Validator();
`;

/* ================= DTOS ================= */

const createDto = (name: string) => `
import { z } from "zod";

export const Create${capitalize(name)}Schema = z.object({
  // campos obrigatórios
});

export type Create${capitalize(name)}Dto = z.infer<typeof Create${capitalize(name)}Schema>;
`;

const readDto = (name: string) => `
import { z } from "zod";

export const Read${capitalize(name)}Schema = z.object({});

export type Read${capitalize(name)}Dto = z.infer<typeof Read${capitalize(name)}Schema>;
`;

const updateDto = (name: string) => `
import { z } from "zod";

export const Update${capitalize(name)}Schema = z.object({
  // campos opcionais
});

export type Update${capitalize(name)}Dto = z.infer<typeof Update${capitalize(name)}Schema>;
`;

const deleteDto = () => `
export type DeleteDto = {
  id: number;
};
`;

/* ================= UTILS ================= */

const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

/* ================= EXEC ================= */

const [moduleName] = process.argv.slice(2);

if (!moduleName) {
  console.error("Uso: ts-node scripts/generate-module.ts <nome-do-modulo>");
  process.exit(1);
}

createModule(moduleName);
