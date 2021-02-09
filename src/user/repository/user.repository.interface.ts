import { Repository } from "src/common/repository.interface";
import { UserDto } from "../dto/user.dto";

export interface IUserRepository extends Repository {
    findById(id:string): Promise<UserDto>
    findByEmail(email:string): Promise<UserDto>
}
