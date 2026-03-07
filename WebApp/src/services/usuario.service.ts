import { httpClient } from './httpClient';

export interface IUsuario {
  nome: string;
  email: string;
  role: string;
}

class UsuarioService {
  httpClient;
  path: string;

  constructor() {
    this.httpClient = httpClient;
    this.path = '/usuario';
  }

  async buscarMeuPerfil() {
    return await this.httpClient.get<IUsuario>(
      `${this.path}/buscar-meu-perfil`,
    );
  }
}

export default new UsuarioService();
