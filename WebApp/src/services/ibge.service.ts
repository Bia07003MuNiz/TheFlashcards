import axios from 'axios';

interface IbgeDto{
      cep: string,
      logradouro: string,
      complemento: string,
      unidade: string,
      bairro: string,
      localidade: string,
      uf: string,
      estado: string,
      regiao: string,
      ibge: string,
      gia: string,
      ddd: string,
      siafi: string
      erro?: string
}

class IbgeService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = axios.create();
    this.path = 'https://viacep.com.br/ws/';
  }

  async buscar(cep: string) {
    return await this.httpClient.get<IbgeDto>(
      `${this.path}${cep}/json/`,
    );
  }
}
export default new IbgeService();
