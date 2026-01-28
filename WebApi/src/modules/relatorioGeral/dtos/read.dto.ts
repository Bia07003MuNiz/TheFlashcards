import { z } from "zod";

export const ReadRelatorioGeralSchema = z.object({
    sala_id: z.number().optional(),
});

export type ReadRelatorioGeralDto = z.infer<typeof ReadRelatorioGeralSchema>;
