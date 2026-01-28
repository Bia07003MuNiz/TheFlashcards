// relatorioAluno.repository.ts
import DataSource from "@database/data-source";
import { CreateRelatorioAlunoDto } from "./dtos/create.dto";

class RelatorioAlunoRepository {
  private readonly repository;
  private readonly relatorioGeral;

  constructor() {
    this.repository = DataSource.relatorioAluno;
    this.relatorioGeral = DataSource.relatorioGeral;
  }

  public async create(data: CreateRelatorioAlunoDto) {
    const { respostas, ...relatorioData } = data;
    return this.repository.create({
      data: {
        ...relatorioData,
        respostas: respostas?.length
          ? { create: respostas }
          : undefined,
      },
      include: { respostas: true },
    });
  }

  public async readById(id: number) {
    return this.repository.findUnique({
      where: { id },
      include: { respostas: true, aluno: true },
    });
  }

  public async readByRelatorioGeral(relatorio_geral_id: number) {
    return this.repository.findMany({
      where: { relatorio_geral_id },
      include: { respostas: true, aluno: true },
    });
  }

  public async readByAlunoAndGeral(aluno_id: number, relatorio_geral_id: number) {
    return this.repository.findMany({
      where: {
        aluno_id,
        relatorio_geral_id,
      },
      orderBy: { tentativa_numero: "asc" },
      include: { respostas: true, aluno: true },
    });
  }

  public async delete(id: number) {
    return this.repository.delete({ where: { id } });
  }


  public async gerarRelatorioPorAluno(aluno_id: number, sala_id: number) {
    const relatorioGeral = await this.relatorioGeral.readBySalaId(sala_id);
    if (!relatorioGeral) throw new Error("Relatório geral da sala não existe");

    const tentativas = await this.repository.readByAlunoAndGeral(aluno_id, relatorioGeral.id);
    if (tentativas.length === 0) throw new Error("Aluno ainda não respondeu esta sala");

    const relatorioConsolidado = {
      aluno_id,
      nome_aluno: tentativas[0].aluno.nome,
      sala_id,
      nome_sala: relatorioGeral.sala.nome,
      tentativas: tentativas.map(t => ({
        tentativa_numero: t.tentativa_numero,
        total_flashcards: t.total_flashcards,
        total_acertos: t.total_acertos,
        respostas: t.respostas.map(r => ({
          flashcard_id: r.flashcard_id,
          resposta: r.resposta,
        })),
      })),
    };

    return relatorioConsolidado;
  }

}

export default new RelatorioAlunoRepository();
