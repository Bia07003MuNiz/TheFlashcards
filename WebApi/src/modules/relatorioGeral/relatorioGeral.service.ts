import RelatorioGeralRepository from "./relatorioGeral.repository";
import { CreateRelatorioGeralDto } from "./dtos/create.dto";

class RelatorioGeralService {
  private readonly repository;

  constructor() {
    this.repository = RelatorioGeralRepository;
  }

  public async create(data: CreateRelatorioGeralDto) {
    return this.repository.create(data);
  }

  public async readBySalaId(sala_id: number) {
    return this.repository.readBySalaId(sala_id);
  }
}

export default new RelatorioGeralService();
