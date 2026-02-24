import { z } from "zod";

export const CreateFlashcardSchema = z.object({
  pergunta: z.string(),
  resposta: z.string(),
  imagem_url: z.string().optional(),
  sala_id: z.number(),
});

export type CreateFlashcardDto = z.infer<typeof CreateFlashcardSchema>;