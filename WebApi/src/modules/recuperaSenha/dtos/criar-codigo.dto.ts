import { z } from "zod";

export const CriarCodigoDtoSchema = z.object({
  email: z.string().email(),
  codigo: z.string().length(6),
  expira_em: z.date(),
  usado: z.boolean(),
});

export type CriarCodigoDto = z.infer<typeof CriarCodigoDtoSchema>;