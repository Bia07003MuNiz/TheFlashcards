import { z } from "zod";

export const EnviarCodigoDtoSchema = z.object({
  email: z.string().email("Email inválido"),
});

export type EnviarCodigoDto = z.infer<typeof EnviarCodigoDtoSchema>;