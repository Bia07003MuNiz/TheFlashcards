// respostaFlashcard.repository.ts
import DataSource from "@database/data-source";
import { CreateRespostaFlashcardDto, CreateRespostaFlashcardSchema } from "./dtos/create.dto";
import RelatorioAlunoRepository from "@modules/relatorioAluno/relatorioAluno.repository";
import RelatorioGeralRepository from "@modules/relatorioGeral/relatorioGeral.repository";
import { ResponderDto } from "./dtos/responde.dto";


class RespostaFlashcardRepository {
  private readonly repository;
  private readonly relatorioAluno;
  private readonly relatorioGeral;

  constructor() {
    this.repository = DataSource.respostaFlashcard;
    this.relatorioAluno = RelatorioAlunoRepository;
    this.relatorioGeral = RelatorioGeralRepository;
  }

  public async findByRelatorioAlunoId(relatorio_aluno_id: number) {
    return this.repository.findMany({
      where: { relatorio_aluno_id },
    });
  }

  public async create(data: CreateRespostaFlashcardDto) {
    const validatedData = CreateRespostaFlashcardSchema.parse(data);
    return this.repository.create({ data: validatedData });
  }

  public async responder({ aluno_id, sala_id, respostas }: ResponderDto) {
    const relatorioGeral = await this.relatorioGeral.readBySalaId(sala_id);
    if (!relatorioGeral) throw new Error("Relatório geral da sala não existe");

    const sala = await DataSource.sala.findUnique({
      where: { id: sala_id },
    });

    if (!sala) throw new Error("Sala não encontrada");

    // 🔹 Se sala não permite novas tentativas
    if (!sala.permitir_tentativas) {
      const tentativasExistentes = await this.relatorioAluno.readByAlunoAndGeral(
        aluno_id,
        relatorioGeral.id
      );

      if (tentativasExistentes.length > 0) {
        throw new Error("Esta sala não permite novas tentativas");
      }
    }

    // 🔹 Se tem limite definido
    if (sala.limite_tentativas) {
      const tentativasExistentes = await this.relatorioAluno.readByAlunoAndGeral(
        aluno_id,
        relatorioGeral.id
      );

      if (tentativasExistentes.length >= sala.limite_tentativas) {
        throw new Error("Limite de tentativas atingido");
      }
    }

    const tentativas = await this.relatorioAluno.readByAlunoAndGeral(
      aluno_id,
      relatorioGeral.id
    );

    const tentativa_numero = tentativas.length + 1;

    const relatorioAluno = await this.relatorioAluno.create({
      relatorio_geral_id: relatorioGeral.id,
      aluno_id,
      tentativa_numero,
      total_flashcards: respostas.length,
      total_acertos: respostas.filter(r => r.resposta === "CERTO").length,
      respostas: respostas.map(r => ({
        flashcard_id: r.flashcard_id,
        resposta: r.resposta
      })),
    });

    return {
      relatorio_aluno_id: relatorioAluno.id,
      tentativa_numero: relatorioAluno.tentativa_numero,
      total_flashcards: relatorioAluno.total_flashcards,
      total_acertos: relatorioAluno.total_acertos,
      respostas: relatorioAluno.respostas,
    };
  }

}

export default new RespostaFlashcardRepository();
