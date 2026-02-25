import { CreateRelatorioGeralDto } from "./dtos/create.dto";
import RelatoriosRepository from "./relatorioGeral.repository";

class RelatoriosService {
  private readonly repository;

  constructor() {
    this.repository = RelatoriosRepository;
  }

  public async create(data: CreateRelatorioGeralDto) {
    return this.repository.create(data);
  }

  async getResumoSala(salaId: number) {
    const dados = await this.repository.getResumoSala(salaId);

    const alunosIds = dados.map(d => d.aluno_id);

    const alunos = await this.repository.findAlunosByIds(alunosIds);

    return dados.map((item) => {
      const aluno = alunos.find(a => a.id === item.aluno_id);

      const totalAcertos = item._sum.total_acertos ?? 0;
      const totalFlashcards = item._sum.total_flashcards ?? 0;
      const erros = totalFlashcards - totalAcertos;

      return {
        aluno_id: item.aluno_id,
        nome: aluno?.nome ?? "",
        email: aluno?.email ?? "",
        tentativas: item._count.id,
        total_acertos: totalAcertos,
        total_erros: erros,
        porcentagem:
          totalFlashcards > 0
            ? Number(((totalAcertos / totalFlashcards) * 100).toFixed(2))
            : 0,
      };
    });
  }
  async getTentativasAluno(salaId: number, alunoId: number) {
    const tentativas = await this.repository.getTentativasAluno(
      salaId,
      alunoId
    );

    return tentativas.map((t) => ({
      id: t.id,
      tentativa: t.tentativa_numero,
      acertos: t.total_acertos,
      erros: t.total_flashcards - t.total_acertos,
      data: t.created_at,
    }));
  }

  async getDetalheTentativa(relatorioId: number) {
    return this.repository.getDetalheTentativa(relatorioId);
  }
}

export default new RelatoriosService();