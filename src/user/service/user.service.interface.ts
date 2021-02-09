import { UserInsertDto, UserRepositoryDto, UserUpdateDto } from "../dto/user.dto";

export interface IUserService {
    createUser(userInsertDto:UserInsertDto): Promise<void>
    updateUser(user:UserUpdateDto): Promise<void>
    findUser(id:string): Promise<UserRepositoryDto>
    deleteUser(id:string): Promise<void>
}
