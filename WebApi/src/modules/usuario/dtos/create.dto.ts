import { z } from "zod";

export const CreateUsuarioSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Senha mínima de 6 caracteres"),
  role: z.enum(["PROFESSOR", "ALUNO", "ADMIN"]),
  status: z.enum(["ATIVO", "INATIVO"]).optional(),
  data_nascimento: z.coerce.date().optional(),
  celular: z.string().optional(),
  instituicoes: z.array(z.number().int().positive()),
});

export type CreateUsuarioDto = z.infer<typeof CreateUsuarioSchema>;