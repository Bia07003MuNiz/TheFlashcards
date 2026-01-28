// dtos/create.dto.ts
import { z } from "zod";

export const CreateRelatorioAlunoSchema = z.object({
  relatorio_geral_id: z.number(),
  aluno_id: z.number(),
  tentativa_numero: z.number(),
  total_flashcards: z.number(),
  total_acertos: z.number(),
  respostas: z.array(
    z.object({
      flashcard_id: z.number(),
      resposta: z.enum(["CERTO", "ERRADO"]),
    })
  ),
});

export type CreateRelatorioAlunoDto = z.infer<typeof CreateRelatorioAlunoSchema>;
