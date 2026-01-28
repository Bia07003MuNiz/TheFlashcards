import { z } from "zod";

export const ResponderSchema = z.object({
  aluno_id: z.number().int().positive(),
  sala_id: z.number().int().positive(),
  respostas: z
    .array(
      z.object({
        flashcard_id: z.number().int().positive(),
        resposta: z.enum(["CERTO", "ERRADO"]),
      })
    )
    .nonempty(),
});

export type ResponderDto = z.infer<typeof ResponderSchema>;
