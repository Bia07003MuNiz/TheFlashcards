
import { z } from "zod";

export const ReadRelatorioAlunoSchema = z.object({});

export type ReadRelatorioAlunoDto = z.infer<typeof ReadRelatorioAlunoSchema>;
