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
    this.middlewares();
    this.routes();
    this.errors();
  }

  private middlewares() {
    this.app.use(cors({
      origin: "http://localhost:5173",
      credentials: true,
    }));
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(compression());
    this.app.use(helmet());
  }

  private routes() {
    this.app.use("/", routes);
  }

  private errors() {
    this.app.use((err: any, _req: any, res: any, _next: any) => {
      if (err instanceof AppException) {
        return res.status(err.status).json({ error: err.message });
      }

      return res.status(500).json({ error: "Erro interno do servidor" });
    });
  }
}

export default new App().app;
