import { httpClient } from '@services/httpClient';

export interface CriarFlashcardDto {
  pergunta: string;
  resposta: string;
}

export interface CriarSalaComFlashcardsDto {
  nome: string;
  descricao: string;
  turma: string;
  instituicao_id: number;
  professor_id: number;
  flashcards: CriarFlashcardDto[];
}

export interface FlashcardListagem {
  id: number;
  pergunta: string;
  resposta: string;
  imagem_url: string | null;
  ativo: boolean;
  sala_id: number;
  created_at: string;
  updated_at: string;
}

export interface SalaListagem {
  id: number;
  nome: string;
  descricao: string;
  turma: string;
  ativa: boolean;
  instituicao_id: number;
  professor_id: number;
  created_at: string;
  flashcards: FlashcardListagem[];
}

export interface EditarSalaComFlashcardsDto {
  nome: string;
  descricao: string;
  turma: string;
  instituicao_id: number;
  professor_id: number;
  flashcards: CriarFlashcardDto[];
}

class SalaService {
  httpClient;
  path: string;

  constructor() {
    this.httpClient = httpClient;
    this.path = '/sala';
  }

  async criar(dto: CriarSalaComFlashcardsDto): Promise<CriarSalaComFlashcardsDto> {
    const { data } = await this.httpClient.post<CriarSalaComFlashcardsDto>(`${this.path}`, dto);
    return data;
  }

  async editar(id: number, dto: EditarSalaComFlashcardsDto): Promise<EditarSalaComFlashcardsDto> {
    const { data } = await this.httpClient.patch<EditarSalaComFlashcardsDto>(`${this.path}/${id}`, dto);
    return data;
  }

  async buscar(params?: string): Promise<SalaListagem> {
    const { data } = await this.httpClient.get<SalaListagem>(`${this.path}`);
    return data;
  }

}

export default new SalaService();
