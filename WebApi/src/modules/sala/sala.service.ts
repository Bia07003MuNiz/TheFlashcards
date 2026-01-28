import SalaRepository from "./sala.repository";
import { CreateSalaDto } from "./dtos/create.dto";
import { UpdateSalaDto } from "./dtos/update.dto";
import RelatorioGeralRepository from "@modules/relatorioGeral/relatorioGeral.repository";

class SalaService {
  private readonly repository;
  private readonly relatorioRepository;

  constructor() {
    this.repository = SalaRepository;
    this.relatorioRepository = RelatorioGeralRepository;
  }

  public async create(data: CreateSalaDto) {
    const sala = await this.repository.create(data);
    await this.relatorioRepository.create({ sala_id: sala.id });
    return sala;
  }

  public async read() {
    return this.repository.read();
  }

  public async readById(id: number) {
    return this.repository.readById(id);
  }

  public async update(id: number, data: UpdateSalaDto) {
    return this.repository.update(id, data);
  }

  public async delete(id: number) {
    return this.repository.delete(id);
  }
}

export default new SalaService();
