
import { z } from "zod";

export const ReadNotasSchema = z.object({});

export type ReadNotasDto = z.infer<typeof ReadNotasSchema>;
