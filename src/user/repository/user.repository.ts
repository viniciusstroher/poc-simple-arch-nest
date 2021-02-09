import { Module } from '@nestjs/common';
import { UserRepositoryDto } from '../dto/user.dto';
import { IUserRepository } from './user.repository.interface';

@Module({})
export class UserRepository implements IUserRepository{
    findById(id: string): Promise<UserRepositoryDto> {
        throw new Error('Method not implemented.');
    }
    findByEmail(email: string): Promise<UserRepositoryDto> {
        throw new Error('Method not implemented.');
    }
    save(model: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    exists(model: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
 
}
