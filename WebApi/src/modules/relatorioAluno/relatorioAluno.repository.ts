import DataSource from "@database/data-source";
import { CreateRelatorioAlunoDto } from "./dtos/create.dto";
import RelatorioGeralRepository from "../relatorioGeral/relatorioGeral.repository";

class RelatorioAlunoRepository {
  private readonly repository;
  private readonly relatorioGeral;

  constructor() {
    this.repository = DataSource.relatorioAluno;
    this.relatorioGeral = RelatorioGeralRepository;
  }

  public async create(data: CreateRelatorioAlunoDto) {
    const { respostas, ...relatorioData } = data;
    return this.repository.create({
      data: {
        ...relatorioData,
        respostas: respostas?.length ? { create: respostas } : undefined,
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

  public async delete(id: number) {
    return this.repository.delete({ where: { id } });
  }

  // ─── Rota 1: GET /relatorios/sala/:sala_id ───────────────────────────────
  public async gerarRelatorioSala(sala_id: number) {
    const relatorioGeral = await this.relatorioGeral.readBySalaId(sala_id);
    if (!relatorioGeral) throw new Error("Relatório geral da sala não existe");
    if (!relatorioGeral.sala) throw new Error("Sala não encontrada no relatório geral");

    const todasTentativas = await this.repository.findMany({
      where: { relatorio_geral_id: relatorioGeral.id },
      orderBy: { tentativa_numero: "asc" },
      include: { aluno: true },
    });

    // Agrupa por aluno
    const alunosMap = new Map<number, any>();

    for (const t of todasTentativas) {
      if (!alunosMap.has(t.aluno_id)) {
        alunosMap.set(t.aluno_id, {
          aluno_id: t.aluno_id,
          nome_aluno: t.aluno.nome,
          historico: [],
        });
      }

      const porcentagem = t.total_flashcards > 0
        ? Math.round((t.total_acertos / t.total_flashcards) * 100)
        : 0;

      alunosMap.get(t.aluno_id).historico.push({
          id: t.id,
        porcentagem_acertos: porcentagem,
        total_acertos: t.total_acertos,
        total_erros: t.total_flashcards - t.total_acertos,
        total_flashcards: t.total_flashcards,
        criado_em: t.created_at,
      });
    }

    const alunos = Array.from(alunosMap.values()).map((a) => {
      const porcentagens = a.historico.map((h: any) => h.porcentagem_acertos);
      const media = porcentagens.reduce((acc: number, v: number) => acc + v, 0) / porcentagens.length;

      return {
        aluno_id: a.aluno_id,
        nome_aluno: a.nome_aluno,
        melhor_pontuacao: `${Math.max(...porcentagens)}%`,
        media_geral: `${Math.round(media)}%`,
        total_tentativas: a.historico.length,
        historico: a.historico,
      };
    });

    return {
      sala_id,
      nome_sala: relatorioGeral.sala.nome,
      alunos,
    };
  }

  // ─── Rota 2: GET /relatorios/sala/:sala_id/aluno/:aluno_id ───────────────
 public async buscarTentativaDetalhada(
  tentativa_id: number,
  usuario_id?: number
) {
  return this.repository.findFirst({
    where: {
      id: tentativa_id,
      ...(usuario_id && { aluno_id: usuario_id }), // 🔒 segurança
    },
    include: {
      respostas: {
        include: {
          flashcard: true,
        },
      },
      aluno: true,
    },
  });
}
}

export default new RelatorioAlunoRepository();