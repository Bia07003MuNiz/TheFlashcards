import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import DataSource from "@database/data-source";

class AuthService {

  async login({ email, senha }: any) {
    const usuario = await DataSource.usuario.findUnique({
      where: { email },
    });

    if (!usuario) {
      throw new Error("Usuário inválido");
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      throw new Error("Senha inválida");
    }

    const token = jwt.sign(
      { id: usuario.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return { token };
  }
}

export default new AuthService();