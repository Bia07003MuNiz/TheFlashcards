import DataSource from "@database/data-source";
import { CreateSalaDto } from "./dtos/create.dto";
import { UpdateSalaDto } from "./dtos/update.dto";

class SalaRepository {
  private readonly repository;

  constructor() {
    this.repository = DataSource.sala;
  }

  public async create(data: CreateSalaDto) {
    const { flashcards, ...salaData } = data;
    return this.repository.create({
      data: {
        ...salaData,
        flashcards: flashcards?.length
          ? { create: flashcards }
          : undefined,
      },
      include: { flashcards: true },
    });
  }

  public async read(userId: number, role: string) {
    if (role === "ADMIN") {
      return this.repository.findMany({
        orderBy: { created_at: "asc" },
        include: { flashcards: true },
      });
    }

    const usuario = await DataSource.usuario.findUnique({
      where: { id: userId },
      include: { instituicoes: true },
    });

    const instituicoesIds = usuario?.instituicoes.map((i) => i.instituicaoId) || [];

    return this.repository.findMany({
      where: {
        instituicao_id: {
          in: instituicoesIds,
        } 
      },
      orderBy: { created_at: "asc" },
      include: { flashcards: true },
    });
  }

  public async readById(id: number) {
    return this.repository.findUnique({
      where: { id },
      include: {
        flashcards: {
          orderBy: { id: "asc" },
        }
      },
    });
  }

  public async update(id: number, data: UpdateSalaDto) {
    return this.repository.update({
      where: { id },
      data,
    });
  }

  public async delete(id: number) {
    return this.repository.delete({
      where: { id },
    });
  }
}

export default new SalaRepository();
