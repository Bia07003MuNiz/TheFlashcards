import { httpClient } from '@services/httpClient';

export interface RelatorioSala {
  sala_id: number;
  nome_sala: string;
  alunos: {
    aluno_id: number;
    nome_aluno: string;
    melhor_pontuacao: string;
    media_geral: string;
    total_tentativas: number;
    historico: {
      id: number;
      porcentagem_acertos: number;
      total_acertos: number;
      total_erros: number;
      total_flashcards: number;
      criado_em: string; // ISO date
    }[];
  }[];
}

export interface RelatorioTentativaDetalhada {
  id: number;
  relatorio_geral_id: number;
  aluno_id: number;
  tentativa_numero: number;
  total_flashcards: number;
  total_acertos: number;
  created_at: string;

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

  aluno: {
    id: number;
    nome: string;
    email: string;
    senha: string;
    role: "ALUNO" | "PROFESSOR";
    status: "ATIVO" | "INATIVO";
    data_nascimento: string;
    celular: string;
    instituicao_id: number;
    created_at: string;
  };
}

class RelatorioAlunoService {
  httpClient;
  path: string;

  constructor() {
    this.httpClient = httpClient;
    this.path = '/relatorio-aluno';
  }

  async relatorioAlunoTentativas(idSala: number): Promise<RelatorioSala> {
  const { data } = await this.httpClient.get<RelatorioSala>(`${this.path}/sala/${idSala}`);
  return data;
}

async relatorioAlunoTentativasDetalhada(idTentativa: number): Promise<RelatorioTentativaDetalhada> {
  const { data } = await this.httpClient.get<RelatorioTentativaDetalhada>(`${this.path}/tentativa/${idTentativa}`);
  return data;
}
}

export default new RelatorioAlunoService();
