import { httpClient } from '@services/httpClient';

export interface ResponderFlashcards {
  aluno_id: number;
  sala_id: number;
  respostas: {
    flashcard_id: number;
    resposta: "CERTO" | "ERRADO";
  }[];
}

export interface ResponderFlashcardsResponse {
  relatorio_aluno_id: number;
  tentativa_numero: number;
  total_flashcards: number;
  total_acertos: number;
  respostas: {
    id: number;
    relatorio_aluno_id: number;
    flashcard_id: number;
    resposta: "CERTO" | "ERRADO";
    created_at: string;
  }[];
}

class ResponderFlashcardsService {
  httpClient;
  path: string;

  constructor() {
    this.httpClient = httpClient;
    this.path = '/resposta-flashcard';
  }

  async criar(dto: ResponderFlashcards): Promise<ResponderFlashcardsResponse> {
    const { data } = await this.httpClient.post<ResponderFlashcardsResponse>(`${this.path}`, dto);
    return data;
  }

}

export default new ResponderFlashcardsService();
