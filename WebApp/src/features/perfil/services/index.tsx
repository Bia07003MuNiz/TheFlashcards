import { httpClient } from '@services/httpClient';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  role: 'PROFESSOR' | 'ALUNO' | 'ADMIN';
  data_nascimento: string;
  created_at: string;
  instituicao_id: number;
}

export interface EditarUsuarioDto {
  nome: string;
  email: string;
  role: 'PROFESSOR' | 'ALUNO' | 'ADMIN';
  data_nascimento: string;
  created_at: string;
  instituicao_id: number;
}

class UsuarioService {
  httpClient;
  path: string;

  constructor() {
    this.httpClient = httpClient;
    this.path = '/usuario';
  }

  async editar(id: number, dto: EditarUsuarioDto): Promise<EditarUsuarioDto> {
      const { data } = await this.httpClient.put<EditarUsuarioDto>(`${this.path}/${id}`, dto);
      return data;
    }

  async buscarMeuPerfil() {
    return await this.httpClient.get<Usuario>(
      `${this.path}/buscar-meu-perfil`,
    );
  }

}

export default new UsuarioService();
