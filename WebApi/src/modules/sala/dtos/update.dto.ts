import { z } from "zod";

export const UpdateSalaSchema = z.object({
  nome: z.string().optional(),
  descricao: z.string().optional(),
  turma: z.string().optional(),
  ativa: z.boolean().optional(),
  instituicao_id: z.number().optional(),
  permitir_tentativas: z.boolean().optional(),
  limite_tentativas: z.number().nullable().optional(),
});

export type UpdateSalaDto = z.infer<typeof UpdateSalaSchema>;