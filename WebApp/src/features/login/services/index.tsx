import type { LoginDto } from '../hooks/formulario';
import { httpClient } from '@services/httpClient';

class LoginService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = httpClient;
    this.path = '/autenticacao';
  }
  async login(dto: LoginDto) {
    return await this.httpClient.post<{ token: string }>(`${this.path}/login`, dto);
  }
}
export default new LoginService();
