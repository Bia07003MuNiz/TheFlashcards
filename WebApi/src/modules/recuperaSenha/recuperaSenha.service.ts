import Repository from "./recuperaSenha.repository";
import { EnviarCodigoDto } from "./dtos/enviar-codigo.dto";
import { enviarCodigoRecuperacao, TEMPO_EXPIRACAO_MINUTOS } from "@config/brevo";
import UsuarioRepository from "@modules/usuario/usuario.repository";
import bcrypt from "bcryptjs";
import { RedefinirSenhaDto } from "./dtos/redefinir-senha.dto";
import { ValidarCodigoDto } from "./dtos/validar-codigo.dto";

class RecuperaSenhaService {
  private readonly repository;

  constructor() {
    this.repository = Repository;
  }

  async enviarCodigo(data: EnviarCodigoDto) {
    const emailExiste = await this.repository.verificarEmailExiste(data.email);
    if (!emailExiste) throw new Error("E-mail não encontrado");

    const codigo = Math.floor(100000 + Math.random() * 900000).toString();
    const expira_em = new Date(Date.now() + TEMPO_EXPIRACAO_MINUTOS * 60 * 1000);

    await this.repository.enviarCodigo({ email: data.email, codigo, expira_em, usado: false });
    await enviarCodigoRecuperacao(data.email, codigo);

    return { message: "Código enviado" };
  }

  async validarCodigo(data: ValidarCodigoDto) {
    const registro = await this.repository.buscarCodigo(data.email, data.codigo);

    if (!registro) throw new Error("Código inválido");
    if (new Date() > registro.expira_em) throw new Error("Código expirado");

    return { message: "Código válido" };
  }

  async redefinirSenha(id: number, data: RedefinirSenhaDto) {
    const registro = await this.repository.buscarCodigo(data.email, data.codigo);

    if (!registro) throw new Error("Código inválido");
    if (registro.usado) throw new Error("Código já utilizado");
    if (new Date() > registro.expira_em) throw new Error("Código expirado");

    const senhaHash = await bcrypt.hash(data.novaSenha, 10);
    await UsuarioRepository.updateByEmail(data.email, { senha: senhaHash });
    await this.repository.marcarComoUsado(registro.id);

    return { message: "Senha alterada com sucesso" };
  }
}

export default new RecuperaSenhaService();