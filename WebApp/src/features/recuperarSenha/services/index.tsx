import { httpClient } from '@services/httpClient';

export interface EnviarCodigoDTO {
  email: string;
}

export interface ValidarCodigoDTO {
  email: string;
  codigo: string;
}

export interface RedefinirSenhaDTO {
  email?: string;
  codigo?: string;
  novaSenha?: string;
}

class RecuperarSenhaService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = httpClient;
    this.path = '/recupera-senha';
  }

  async enviarCodigo(dto: EnviarCodigoDTO): Promise<EnviarCodigoDTO> {
    const { data } = await this.httpClient.post<EnviarCodigoDTO>(`${this.path}`, dto);
    return data;
  }

   async validarCodigo(dto: ValidarCodigoDTO): Promise<ValidarCodigoDTO> {
    const { data } = await this.httpClient.post<ValidarCodigoDTO>(`${this.path}/validar`, dto);
    return data;
  }

  async redefinirSenha(dto: RedefinirSenhaDTO): Promise<RedefinirSenhaDTO> {
    const { data } = await this.httpClient.put<RedefinirSenhaDTO>(`${this.path}`, dto);
    return data;
  }
}
export default new RecuperarSenhaService();
