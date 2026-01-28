import { z } from "zod";

export const CreateInstituicaoDto = z.object({
    nome: z.string().min(1),
    cep: z.string().min(1),
    rua: z.string().min(1),
    numero: z.string().min(1),
    bairro: z.string().min(1),
    cidade: z.string().min(1),
    estado: z.string().min(1),
});

export type CreateInstituicaoDto = z.infer<typeof CreateInstituicaoDto>;
