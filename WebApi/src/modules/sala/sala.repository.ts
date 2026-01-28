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

  public async read() {
    return this.repository.findMany({
      orderBy: { created_at: "desc" },
      include: { flashcards: true },
    });
  }

  public async readById(id: number) {
    return this.repository.findUnique({
      where: { id },
      include: { flashcards: true },
    });
  }

  public async update(id: number, data: UpdateSalaDto) {
    const { flashcards, ...salaData } = data;
    return this.repository.update({
      where: { id },
      data: {
        ...salaData,
        flashcards: flashcards?.length
          ? { deleteMany: {}, create: flashcards }
          : undefined,
      },
      include: { flashcards: true },
    });
  }

  public async delete(id: number) {
    return this.repository.delete({
      where: { id },
    });
  }
}

export default new SalaRepository();
