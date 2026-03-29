import { httpClient } from '@services/httpClient';

export interface ResumoGeralSala {
  aluno_id: number;
  nome: string;
  email: string;
  tentativas: number;
  total_acertos: number;
  total_erros: number;
  porcentagem: number;
}
export interface TentativaAluno {
  id: number;
  tentativa: number;
  acertos: number;
  erros: number;
  data: string;
}

export interface DetalheTentativaResponse {
  id: number;
  relatorio_geral_id: number;
  aluno_id: number;
  tentativa_numero: number;
  total_flashcards: number;
  total_acertos: number;
  created_at: string;

  aluno: {
    id: number;
    nome: string;
    email: string;
    senha: string;
    role: "PROFESSOR" | "ALUNO";
    status: "ATIVO" | "INATIVO";
    data_nascimento: string;
    celular: string | null;
    instituicao_id: number;
    created_at: string;
  };

  respostas: {
    id: number;
    relatorio_aluno_id: number;
    flashcard_id: number;
    resposta: "CERTO" | "ERRADO";
    created_at: string;

    flashcard: {
      id: number;
      pergunta: string;
      resposta: string;
      imagem_url: string | null;
      ativo: boolean;
      sala_id: number;
      created_at: string;
      updated_at: string;
    };
  }[];
}


class RelatorioService {
  httpClient;
  path: string;

  constructor() {
    this.httpClient = httpClient;
    this.path = '/relatorios';
  }

  async relatorioGeral(id: number): Promise<ResumoGeralSala[]> {
    const { data } = await this.httpClient.get<ResumoGeralSala[]>(`${this.path}/sala/${id}`);
    return data;
  }

  async relatorioTentativa(
    idSala: number,
    idAluno: number
  ): Promise<TentativaAluno[]> {
    const { data } = await this.httpClient.get<TentativaAluno[]>(
      `${this.path}/sala/${idSala}/aluno/${idAluno}`
    );
    return data;
  }

  async relatorioTentativaDetalhado(id: number): Promise<DetalheTentativaResponse> {
    const { data } = await this.httpClient.get<DetalheTentativaResponse>(`${this.path}/tentativa/${id}`);
    return data;
  }

}

export default new RelatorioService();
