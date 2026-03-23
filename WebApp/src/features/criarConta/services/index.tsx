import { httpClient } from '@services/httpClient';

export interface CreateUserDTO {
  nome: string;
  email: string;
  senha: string;
  role: "ALUNO" | "PROFESSOR" | "ADMIN";
  status: "ATIVO" | "INATIVO";
  data_nascimento: string;
  celular: string;
  instituicoes: number[];
}

export interface UserResponseDTO {
  id: number;
  nome: string;
  email: string;
  senha: string;
  role: "ALUNO" | "PROFESSOR" | "ADMIN";
  status: "ATIVO" | "INATIVO";
  data_nascimento: string;
  celular: string;
  created_at: string;
  instituicoes: {
    id: number;
    usuarioId: number;
    instituicaoId: number;
    instituicao: {
      id: number;
      nome: string;
      cep: string;
      rua: string;
      numero: string;
      bairro: string;
      cidade: string;
      estado: string;
      created_at: string;
    };
  }[];
}

class CriarContaService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = httpClient;
    this.path = '/usuario';
  }

  async criar(dto: CreateUserDTO): Promise<CreateUserDTO> {
    const { data } = await this.httpClient.post<CreateUserDTO>(`${this.path}`, dto);
    return data;
  }

}
export default new CriarContaService();
