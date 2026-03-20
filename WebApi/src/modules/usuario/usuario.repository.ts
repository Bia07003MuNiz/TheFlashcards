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
  if (data.role === "ALUNO" && data.instituicoes.length > 1) {
    throw new Error("Aluno pode ter apenas uma instituição");
  }

  const senhaHash = await bcrypt.hash(data.senha, 10);

  return await this.repository.create({
    data: {
      nome: data.nome,
      email: data.email,
      senha: senhaHash,
      role: data.role,
      status: data.status,
      data_nascimento: data.data_nascimento,
      celular: data.celular,

      instituicoes: {
        create: data.instituicoes.map((id) => ({
          instituicaoId: id,
        })),
      },
    },
     include: {
      instituicoes: {
        include: {
          instituicao: true,
        },
      },
    },
  });
}

  public async read() {
  return await this.repository.findMany({
    include: {
      instituicoes: {
        include: {
          instituicao: true,
        },
      },
    },
    orderBy: { created_at: "desc" },
  });
}

  public async readById(id: number) {
  return await this.repository.findUnique({
    where: { id },
    include: {
      instituicoes: {
        include: {
          instituicao: true,
        },
      },
    },
  });
}

public async update(id: number, data: UpdateUsuarioDto) {
  return await this.repository.update({
    where: { id },
    data: {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      role: data.role,
      status: data.status,
      data_nascimento: data.data_nascimento,
      celular: data.celular,

      instituicoes: data.instituicoes
        ? {
            deleteMany: {},
            create: data.instituicoes.map((id) => ({
              instituicaoId: id,
            })),
          }
        : undefined,
    },
    include: {
      instituicoes: {
        include: {
          instituicao: true,
        },
      },
    },
  });
}

  public async delete(id: number) {
    return await this.repository.delete({
      where: { id },
    });
  }

  public async BuscarMeuPerfil(id: number) {
  return await this.repository.findUnique({
    where: { id },
    select: {
      id: true,
      nome: true,
      email: true,
      role: true,
      data_nascimento: true,
      created_at: true,
      instituicoes: {
        include: {
          instituicao: true,
        },
      },
    },
  });
}
}

export default new UsuarioRepository();