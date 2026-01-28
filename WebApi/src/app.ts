import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";

import routes from "./modules/index.routes";

import AppException from "@errors/app-exception";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.registerMiddlewares();
    this.registerRoutes();
    this.registerGlobalErrorHandlerRoute();
  }

  private registerMiddlewares() {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(compression());
    this.app.use(helmet());
  }

  private registerRoutes() {
    this.app.use("/api", routes);
  }

  private registerGlobalErrorHandlerRoute() {
    this.app.use(
      (
        err: any,
        _req: express.Request,
        res: express.Response,
        _next: express.NextFunction
      ) => {
        if (err instanceof AppException) {
          res.status(err.status).json({ error: err.message });
        }

        return res.status(500).json({
          error: "Erro interno do servidor"
        });
      }
    );
  }
}

export default new App().app;
