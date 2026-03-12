import DataSource from "@database/data-source";
import { CreateNotasDto } from "./dtos/create.dto";
import { UpdateNotasDto } from "./dtos/update.dto";

class NotasRepository {
  private readonly repository;

  constructor() {
    this.repository = DataSource.nota;
  }

  async create(usuarioId: number, data: CreateNotasDto) {
    return this.repository.create({
      data: { ...data, usuario_id: usuarioId },
    });
  }

  async read(usuarioId: number) {
    return this.repository.findMany({
      where: { usuario_id: usuarioId },
      orderBy: { created_at: "desc" },
    });
  }

  async readById(id: number, usuarioId: number) {
    return this.repository.findFirst({
      where: { id, usuario_id: usuarioId },
    });
  }

  async update(id: number, usuarioId: number, data: UpdateNotasDto) {
    const nota = await this.readById(id, usuarioId);
    if (!nota) throw new Error("Nota não encontrada ou não pertence ao usuário");
    return this.repository.update({
      where: { id },
      data,
    });
  }

  async delete(id: number, usuarioId: number) {
    const nota = await this.readById(id, usuarioId);
    if (!nota) throw new Error("Nota não encontrada ou não pertence ao usuário");
    return this.repository.delete({
      where: { id },
    });
  }

  async inativar(id: number, usuarioId: number, ativo: boolean) {
    const nota = await this.readById(id, usuarioId);
    if (!nota) throw new Error("Nota não encontrada ou não pertence ao usuário");
    return this.repository.update({
      where: { id },
      data: { ativo },
    });
  }
}

export default new NotasRepository();