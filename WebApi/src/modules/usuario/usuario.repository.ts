import bcrypt from "bcryptjs";
import DataSource from '@database/data-source';
import { CreateUsuarioDto } from "./dtos/create.dto";
import { UpdateUsuarioDto } from "./dtos/update.dto";

class UsuarioRepository {

  private readonly repository;

  constructor() {
    this.repository = DataSource.usuario;
  }

  public async create(data: CreateUsuarioDto) {
    const senhaHash = await bcrypt.hash(data.senha, 10);

    return await this.repository.create({
      data: {
        ...data,
        senha: senhaHash,
      },
    });
  }

  public async read() {
    return await this.repository.findMany({
      orderBy: { created_at: "desc" },
    });
  }

  public async readById(id: number) {
    return await this.repository.findUnique({
      where: { id },
    });
  }

  public async update(id: number, data: UpdateUsuarioDto) {
    return await this.repository.update({
      where: { id },
      data,
    });
  }

  public async delete(id: number) {
    return await this.repository.delete({
      where: { id },
    });
  }
}

export default new UsuarioRepository();