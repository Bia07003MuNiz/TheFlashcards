import { z } from "zod";

export const ReadInstituicaoDto = z.object({
    nome: z.string().optional(),
});

export type ReadInstituicaoDto = z.infer<typeof ReadInstituicaoDto>;
