import { z } from "zod";

export const ValidarCodigoDtoSchema = z.object({
  email: z.string().email("Email inválido"),
  codigo: z.string().length(6, "Código deve ter 6 dígitos"),
});

export type ValidarCodigoDto = z.infer<typeof ValidarCodigoDtoSchema>;