import { z } from "zod";

export const RedefinirSenhaSchema = z.object({
  email: z.string().email("Email inválido"),
  codigo: z.string().length(6, "Código deve ter 6 dígitos"),
  novaSenha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type RedefinirSenhaDto = z.infer<typeof RedefinirSenhaSchema>;