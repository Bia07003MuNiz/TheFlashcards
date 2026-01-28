import { ResponderDto } from "./dtos/responde.dto";
import RespostaFlashcardRepository from "./respostaFlashcard.repository";

class RespostaFlashcardService {
  private readonly repository = RespostaFlashcardRepository;

  public async responder(data: ResponderDto) {
    return this.repository.responder(data);
  }
}

export default new RespostaFlashcardService();
