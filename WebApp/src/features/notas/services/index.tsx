import { httpClient } from '@services/httpClient';


export interface CreateNotaDto {
  titulo: string;
  descricao?: string;
  prioridade: "ALTA" | "MEDIA" | "BAIXA";
  ativo?: boolean;
}

export interface EditarNotaDto {
  titulo: string;
  descricao?: string;
  prioridade: "ALTA" | "MEDIA" | "BAIXA";
}

export interface InativarNotaDto {
  id: number;
  ativo: boolean;
}

export interface Nota {
  id: number;
  titulo: string;
  descricao?: string;
  prioridade: "ALTA" | "MEDIA" | "BAIXA";
  ativo: boolean;
  created_at: string;
  updated_at: string;
  usuario_id: number;
}

class NotasService {
  httpClient;
  path: string;

  constructor() {
    this.httpClient = httpClient;
    this.path = '/notas';
  }

  async criar(dto: CreateNotaDto): Promise<CreateNotaDto> {
    const { data } = await this.httpClient.post<CreateNotaDto>(`${this.path}`, dto);
    return data;
  }

  async editar(id: number, dto: EditarNotaDto): Promise<EditarNotaDto> {
    const { data } = await this.httpClient.put<EditarNotaDto>(`${this.path}/${id}`, dto);
    return data;
  }

  async inativar(id: number, dto: InativarNotaDto): Promise<InativarNotaDto> {
    const { data } = await this.httpClient.put<InativarNotaDto>(`${this.path}/inativar/${id}`, dto);
    return data;
  }

  async buscar(params?: string): Promise<Nota[]> {
    const { data } = await this.httpClient.get<Nota[]>(`${this.path}`);
    return data;
  }
}

export default new NotasService();
