import Repository from "./instituicao.repository";
import { CreateInstituicaoDto } from "./dtos/create.dto";
import { UpdateInstituicaoDto } from "./dtos/update.dto";

class InstituicaoService {

    private readonly repository;

    constructor() {
        this.repository = Repository;
    }

    public async create(data: CreateInstituicaoDto) {
        return await this.repository.create(data);
    }

    public async read(userId: number, role: string) {
        return await this.repository.read(userId, role);
    }

    public async readTodos() {
        return await this.repository.readTodos();
    }

    public async readById(id: number) {
        return await this.repository.readById(id);
    }

    public async update(id: number, data: UpdateInstituicaoDto) {
        return await this.repository.update(id, data);
    }

    public async delete(id: number) {
        return await this.repository.delete(id);
    }
}

export default new InstituicaoService();
