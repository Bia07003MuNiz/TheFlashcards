import { z } from "zod";

export const UpdateInstituicaoDto = z.object({
    nome: z.string().optional(),
    cep: z.string().optional(),
    rua: z.string().optional(),
    numero: z.string().optional(),
    bairro: z.string().optional(),
    cidade: z.string().optional(),
    estado: z.string().optional(),
});

export type UpdateInstituicaoDto = z.infer<typeof UpdateInstituicaoDto>;
