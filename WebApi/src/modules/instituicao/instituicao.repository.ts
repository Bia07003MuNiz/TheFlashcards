import DataSource from '@database/data-source';
import { CreateInstituicaoDto } from "./dtos/create.dto";
import { UpdateInstituicaoDto } from "./dtos/update.dto";

class InstituicaoRepository {
    private readonly repository;

    constructor() {
        this.repository = DataSource.instituicao;
    }


    public async create(data: CreateInstituicaoDto) {
        return await this.repository.create({
            data,
        });
    }

   public async read(userId: number, role: string) {
    if (role === 'ADMIN') {
      return this.repository.findMany({
        orderBy: { created_at: "desc" },
        include: { usuarios: true },
      });
    }

    const usuario = await DataSource.usuario.findUnique({
      where: { id: userId },
      include: { instituicoes: true },
    });

    const instituicoesIds =
      usuario?.instituicoes.map(i => i.instituicaoId) || [];

    return this.repository.findMany({
      where: {
        id: {
          in: instituicoesIds,
        },
      },
      orderBy: { created_at: "desc" },
      include: { usuarios: true },
    });
  }

    public async readById(id: number) {
        return await this.repository.findUnique({
            where: { id },
        });
    }

    public async update(id: number, data: UpdateInstituicaoDto) {
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

export default new InstituicaoRepository();
