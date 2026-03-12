import { z } from "zod";

export const UpdateNotasSchema = z.object({
  titulo: z.string().optional(),
  descricao: z.string().optional(),
  prioridade: z.enum(["ALTA", "MEDIA", "BAIXA"]).optional(),
});

export const InativarNotasSchema = z.object({
  ativo: z.boolean().optional(),
});

export type UpdateNotasDto = z.infer<typeof UpdateNotasSchema>;
export type InativarNotasDto = z.infer<typeof InativarNotasSchema>;