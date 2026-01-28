import { z } from "zod";

export const CreateRespostaFlashcardSchema = z.object({
  relatorio_aluno_id: z.number().int().positive(),
  flashcard_id: z.number().int().positive(),
  resposta: z.enum(["CERTO", "ERRADO"]),
});

export type CreateRespostaFlashcardDto = z.infer<typeof CreateRespostaFlashcardSchema>;
