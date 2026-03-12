import Repository from "./notas.repository";
import { CreateNotasDto } from "./dtos/create.dto";
import { InativarNotasDto, UpdateNotasDto } from "./dtos/update.dto";

class NotasService {

  private readonly repository;

  constructor() {
    this.repository = Repository;
  }

  create(usuarioId: number, data: CreateNotasDto) {
    return this.repository.create(usuarioId, data);
  }

  read(usuarioId: number) {
    return this.repository.read(usuarioId);
  }

  readById(id: number, usuarioId: number) {
    return this.repository.readById(id, usuarioId);
  }

  update(id: number, usuarioId: number, data: UpdateNotasDto) {
    return this.repository.update(id, usuarioId, data);
  }

  inativar(id: number, usuarioId: number, data: InativarNotasDto) {
    return this.repository.update(id, usuarioId, data);
  }

  delete(id: number, usuarioId: number) {
    return this.repository.delete(id, usuarioId);
  }
}

export default new NotasService();