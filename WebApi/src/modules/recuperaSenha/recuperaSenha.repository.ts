import DataSource from "@database/data-source";
import { CriarCodigoDto } from "./dtos/criar-codigo.dto";
import UsuarioRepository from "@modules/usuario/usuario.repository";

class RecuperaSenhaRepository {
  private readonly repository;

  constructor() {
    this.repository = DataSource.recuperaSenha;
  }

  async enviarCodigo(data: CriarCodigoDto) {
    return this.repository.create({ data });
  }

  async buscarCodigo(email: string, codigo: string) {
    return this.repository.findFirst({
      where: { email, codigo },
      orderBy: { created_at: "desc" },
    });
  }

  async marcarComoUsado(id: number) {
    return this.repository.update({
      where: { id },
      data: { usado: true },
    });
  }

  async verificarEmailExiste(email: string): Promise<boolean> {
    const usuario = await UsuarioRepository.findByEmail(email);
    return !!usuario;
  }
}

export default new RecuperaSenhaRepository();