import { z } from "zod";

export const ReadUsuarioSchema = z.object({
    id: z.coerce.number().int().positive().optional(),
    nome: z.string().optional(),
    email: z.string().optional(),
    role: z.enum(["ADMIN", "PROFESSOR", "ALUNO"]).optional(),
    status: z.enum(["ATIVO", "INATIVO"]).optional(),
    instituicao_id: z.coerce.number().int().positive().optional(),
});

export type ReadUsuarioDto = z.infer<typeof ReadUsuarioSchema>;
