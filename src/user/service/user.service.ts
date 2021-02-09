import { Injectable } from '@nestjs/common';
import { UserRepositoryDto, UserInsertDto, UserUpdateDto } from '../dto/user.dto';
import { IUserService } from './user.service.interface';

@Injectable()
export class UserService implements IUserService{
  createUser(user:UserInsertDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateUser(user:UserUpdateDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findUser(id:string) :Promise<UserRepositoryDto> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
}
