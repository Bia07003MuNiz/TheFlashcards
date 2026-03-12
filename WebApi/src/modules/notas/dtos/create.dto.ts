import { z } from "zod";

export const CreateNotaSchema = z.object({
  titulo: z.string().min(1),
  descricao: z.string().optional(),
  prioridade: z.enum(["ALTA", "MEDIA", "BAIXA"]),
  ativo: z.boolean().default(true),
});

export type CreateNotasDto = z.infer<typeof CreateNotaSchema>;