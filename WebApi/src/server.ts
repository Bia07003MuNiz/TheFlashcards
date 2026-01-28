import express, { Request, Response, NextFunction } from "express";
import routes from "./modules/index.routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Erro interno",
    errors: err.errors || []
  });
});

app.listen(3000, () => {
  console.log("🔥 API rodando em http://localhost:3000");
});
