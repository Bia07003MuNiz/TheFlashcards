
import Repository from "./flashcard.repository";
import { CreateFlashcardDto } from "./dtos/create.dto";
import { UpdateFlashcardDto } from "./dtos/update.dto";

class FlashcardService {

  private readonly repository;

  constructor() {
    this.repository = Repository;
  }

  async create(data: CreateFlashcardDto) {
    return this.repository.create(data);
  }

  async read() {
    return this.repository.read();
  }

  async readById(id: number) {
    return this.repository.readById(id);
  }

  async update(id: number, data: UpdateFlashcardDto) {
    return this.repository.update(id, data);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}

export default new FlashcardService();
