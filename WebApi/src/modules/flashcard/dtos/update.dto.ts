import { z } from "zod";

export const UpdateFlashcardSchema = z.object({
  pergunta: z.string().optional(),
  resposta: z.string().optional(),
  imagem_url: z.string().optional(),
});

export type UpdateFlashcardDto = z.infer<typeof UpdateFlashcardSchema>;