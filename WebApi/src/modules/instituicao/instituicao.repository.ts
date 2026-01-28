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
