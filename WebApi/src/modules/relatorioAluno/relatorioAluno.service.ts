import RelatorioAlunoRepository from "./relatorioAluno.repository";
import { CreateRelatorioAlunoDto } from "./dtos/create.dto";

class RelatorioAlunoService {
  private readonly repository;

  constructor() {
    this.repository = RelatorioAlunoRepository;
  }

  public async create(data: CreateRelatorioAlunoDto) {
    return this.repository.create(data);
  }

  public async readById(id: number) {
    return this.repository.readById(id);
  }

  public async readByRelatorioGeral(relatorio_geral_id: number) {
    return this.repository.readByRelatorioGeral(relatorio_geral_id);
  }

  public async delete(id: number) {
    return this.repository.delete(id);
  }

  public async gerarRelatorioSala(sala_id: number) {
    return this.repository.gerarRelatorioSala(sala_id);
  }

 public async buscarTentativaDetalhada(
  tentativa_id: number,
  usuario_id?: number
) {
  return this.repository.buscarTentativaDetalhada(
    tentativa_id,
    usuario_id
  );
}
}

export default new RelatorioAlunoService();