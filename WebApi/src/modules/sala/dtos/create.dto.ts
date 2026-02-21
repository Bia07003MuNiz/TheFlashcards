import { z } from "zod";

export const createSalaSchema = z.object({
  nome: z.string().min(3),
  descricao: z.string().optional(),
  turma: z.string().min(1),
  professor_id: z.number(),
  instituicao_id: z.number(),

  ativa: z.boolean(),

  permitir_tentativas: z.boolean(),
  limite_tentativas: z.number().nullable().optional(),

  flashcards: z.array(
    z.object({
      pergunta: z.string().min(1),
      resposta: z.string().min(1),
      imagem_url: z.string().url().optional(),
    })
  ).optional(),
});

export type CreateSalaDto = z.infer<typeof createSalaSchema>;
