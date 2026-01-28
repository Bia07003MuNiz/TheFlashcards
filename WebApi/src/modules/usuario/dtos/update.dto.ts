import { z } from "zod";

export const UpdateUsuarioSchema = z.object({
  nome: z.string().min(1).optional(),
  email: z.string().email().optional(),
  senha: z.string().min(6).optional(),
  role: z.enum(["ADMIN", "PROFESSOR", "ALUNO"]).optional(),
  status: z.enum(["ATIVO", "INATIVO"]).optional(),
  data_nascimento: z.coerce.date().optional(),
  celular: z.string().optional(),
  instituicao_id: z.number().int().positive().optional(),
});

export type UpdateUsuarioDto = z.infer<typeof UpdateUsuarioSchema>;
