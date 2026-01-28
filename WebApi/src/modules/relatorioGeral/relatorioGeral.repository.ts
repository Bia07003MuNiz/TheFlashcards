import DataSource from "@database/data-source";
import { CreateRelatorioGeralDto } from "./dtos/create.dto";

class RelatorioGeralRepository {
  private readonly repository;

  constructor() {
    this.repository = DataSource.relatorioGeral;
  }

  public async create(data: CreateRelatorioGeralDto) {
    return this.repository.create({
      data,
      include: {
        sala: true,
      },
    });
  }

  public async readBySalaId(sala_id: number) {
    return this.repository.findUnique({
      where: { sala_id },
      include: { relatorios: true, sala: true },
    });
  }
}

export default new RelatorioGeralRepository();
