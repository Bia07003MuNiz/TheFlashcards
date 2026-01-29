import { LoginDto } from '../hooks/formulario';
import { httpClientSeguranca } from '@services/httpClientSeguranca';

class LoginService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = httpClientSeguranca;
    this.path = '/autenticacao';
  }
  async login(dto: LoginDto) {
    return await this.httpClient.post<string>(`${this.path}/login`, dto);
  }
}
export default new LoginService();
