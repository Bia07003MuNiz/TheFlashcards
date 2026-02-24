
import DataSource from "@database/data-source";
import { CreateFlashcardDto } from "./dtos/create.dto";
import { UpdateFlashcardDto } from "./dtos/update.dto";

class FlashcardRepository {

  private readonly repository;

  constructor() {
    this.repository = DataSource.flashcard;
  }

  async create(data: CreateFlashcardDto) {
    return this.repository.create({ data });
  }

  async read() {
    return this.repository.findMany({
      orderBy: { created_at: "desc" },
    });
  }

  async readById(id: number) {
    return this.repository.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateFlashcardDto) {
    return this.repository.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return this.repository.delete({
      where: { id },
    });
  }
}

export default new FlashcardRepository();
