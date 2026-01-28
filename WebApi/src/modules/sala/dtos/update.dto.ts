// dtos/update.dto.ts
import { z } from "zod";

export const UpdateFlashcardSchema = z.object({
  pergunta: z.string(),
  resposta: z.string(),
  imagem_url: z.string().optional(),
});

export const UpdateSalaSchema = z.object({
  nome: z.string().optional(),
  descricao: z.string().optional(),
  turma: z.string().optional(),
  ativa: z.boolean().optional(),
  instituicao_id: z.number().optional(),
  professor_id: z.number().optional(),
  flashcards: z.array(UpdateFlashcardSchema).optional(),
});

export type UpdateSalaDto = z.infer<typeof UpdateSalaSchema>;
