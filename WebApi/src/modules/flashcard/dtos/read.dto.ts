
import { z } from "zod";

export const ReadFlashcardSchema = z.object({});

export type ReadFlashcardDto = z.infer<typeof ReadFlashcardSchema>;
