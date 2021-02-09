import { Repository } from "src/common/repository.interface";
import { UserRepositoryDto } from "../dto/user.dto";

export interface IUserRepository extends Repository {
    findById(id:string): Promise<UserRepositoryDto>
    findByEmail(email:string): Promise<UserRepositoryDto>
}
