// relatorioAluno.service.ts
import RelatorioAlunoRepository from "./relatorioAluno.repository";
import { CreateRelatorioAlunoDto } from "./dtos/create.dto";
import RelatorioGeralRepository from "@modules/relatorioGeral/relatorioGeral.repository";

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

  public async gerarRelatorioPorAluno(aluno_id: number, sala_id: number) {
    return this.repository.gerarRelatorioPorAluno(aluno_id, sala_id);
  }
}

export default new RelatorioAlunoService();
