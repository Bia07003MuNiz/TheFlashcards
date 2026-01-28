import { z } from "zod";

export const CreateRelatorioGeralSchema = z.object({
  sala_id: z.number(),
});

export type CreateRelatorioGeralDto = z.infer<typeof CreateRelatorioGeralSchema>;
