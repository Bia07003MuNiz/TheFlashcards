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
  created_at: string;
}

export interface InstituicaoCriar {
  nome: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
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

  async criar(payload: InstituicaoCriar): Promise<InstituicaoListagem> {
    const { data } = await this.httpClient.post<InstituicaoListagem>(`${this.path}`, payload);
    return data;
  }

  async buscarPorId(id: number): Promise<InstituicaoListagem> {
    const { data } = await this.httpClient.get<InstituicaoListagem>(`${this.path}/${id}`);
    return data;
  }

  async atualizar(id: number, payload: InstituicaoCriar): Promise<InstituicaoListagem> {
    const { data } = await this.httpClient.put<InstituicaoListagem>(`${this.path}/${id}`, payload);
    return data;
  }

  async deletar(id: number): Promise<void> {
    await this.httpClient.delete(`${this.path}/${id}`);
  }

  async buscarTodos(): Promise<InstituicaoListagem[]> {
    const { data } = await this.httpClient.get<InstituicaoListagem[]>(`${this.path}/todos`);
    return data;
  }
}

export default new InstituicaoService();
