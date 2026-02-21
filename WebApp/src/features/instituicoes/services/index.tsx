import { httpClient } from '@services/httpClient';

export interface InstituicaoListagem {
  id: number;
  nome: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  created_at: string; // ISO date
}

class InstituicaoService {
  httpClient;
  path: string;

  constructor() {
    this.httpClient = httpClient;
    this.path = '/instituicao';
  }

  async buscar(): Promise<InstituicaoListagem[]> {
    const { data } = await this.httpClient.get<InstituicaoListagem[]>(`${this.path}`);
    return data;
  }
}

export default new InstituicaoService();
