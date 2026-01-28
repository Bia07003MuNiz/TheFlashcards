import { z } from "zod";

export const ReadSalaSchema = z.object({
    instituicao_id: z.coerce.number().int().positive().optional(),
    professor_id: z.coerce.number().int().positive().optional(),
    ativa: z.coerce.boolean().optional(),
});

export type ReadSalaDto = z.infer<typeof ReadSalaSchema>;
