
import Repository from "./usuario.repository";
import { CreateUsuarioDto } from "./dtos/create.dto";
import { UpdateUsuarioDto } from "./dtos/update.dto";

class UsuarioService {
  private readonly repository;

  constructor() {
    this.repository = Repository;
  }

  public async create(data: CreateUsuarioDto) {
    return await this.repository.create(data);
  }

  public async read() {
    return await this.repository.read();
  }

  public async readById(id: number) {
    return await this.repository.readById(id);
  }

  public async update(id: number, data: UpdateUsuarioDto) {
    return await this.repository.update(id, data);
  }

  public async delete(id: number) {
    return await this.repository.delete(id);
  }

  public async BuscarMeuPerfil(id: number) {
    return await this.repository.BuscarMeuPerfil(id);
  }
}

export default new UsuarioService();
