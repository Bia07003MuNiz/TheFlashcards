import { httpClient } from '@services/httpClient';

export interface CriarFlashcardDto {
    pergunta: string;
    resposta: string;
    sala_id: number;
}

export interface EditarFlashcardDto {
    pergunta: string;
    resposta: string;
}

class FlashcardService {
    httpClient;
    path: string;

    constructor() {
        this.httpClient = httpClient;
        this.path = '/flashcard';
    }

    async criar(dto: CriarFlashcardDto): Promise<CriarFlashcardDto> {
        const { data } = await this.httpClient.post<CriarFlashcardDto>(`${this.path}`, dto);
        return data;
    }

    async editar(id: number, dto: EditarFlashcardDto): Promise<EditarFlashcardDto> {
        const { data } = await this.httpClient.put<EditarFlashcardDto>(`${this.path}/${id}`, dto);
        return data;
    }
}

export default new FlashcardService();
