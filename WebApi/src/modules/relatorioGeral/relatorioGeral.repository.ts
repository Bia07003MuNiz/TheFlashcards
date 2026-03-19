import DataSource from "@database/data-source";
import { CreateRelatorioGeralDto } from "./dtos/create.dto";

class RelatoriosRepository {
  private readonly repository;

  constructor() {
    this.repository = DataSource.relatorioGeral;
  }

  public async create(data: CreateRelatorioGeralDto) {
    return this.repository.create({
      data,
      include: {
        sala: true,
      },
    });
  }

  async findAlunosByIds(ids: number[]) {
    return DataSource.usuario.findMany({
      where: {
        id: { in: ids },
      },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });
  }

  // relatorioGeral.repository.ts
public async readBySalaId(sala_id: number) {
  return this.repository.findFirst({
    where: { sala_id },
    include: { sala: true }, // ✅ obrigatório para acessar .sala.nome
  });
}

  async getResumoSala(salaId: number) {
    return DataSource.relatorioAluno.groupBy({
      by: ["aluno_id"],
      where: {
        relatorio_geral: {
          sala_id: salaId,
        },
      },
      _count: {
        id: true,
      },
      _sum: {
        total_acertos: true,
        total_flashcards: true,
      },
    });
  }

  async getTentativasAluno(salaId: number, alunoId: number) {
    return DataSource.relatorioAluno.findMany({
      where: {
        aluno_id: alunoId,
        relatorio_geral: {
          sala_id: salaId,
        },
      },
      orderBy: {
        tentativa_numero: "asc",
      },
    });
  }

  async getDetalheTentativa(relatorioId: number) {
    return DataSource.relatorioAluno.findUnique({
      where: { id: relatorioId },
      include: {
        aluno: true,
        respostas: {
          include: {
            flashcard: true,
          },
        },
      },
    });
  }
}

export default new RelatoriosRepository();