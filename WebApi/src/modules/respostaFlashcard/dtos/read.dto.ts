
import { z } from "zod";

export const ReadRespostaFlashcardSchema = z.object({});

export type ReadRespostaFlashcardDto = z.infer<typeof ReadRespostaFlashcardSchema>;
