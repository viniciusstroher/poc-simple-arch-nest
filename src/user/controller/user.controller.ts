import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserIdDto, UserInsertDto, UserRepositoryDto, UserUpdateDto } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findUser(@Param() userIdDto: UserIdDto): Promise<UserRepositoryDto> {
    return await this.userService.findUser(userIdDto.id);
  }

  @Post()
  async createUser(@Param() userInsertDto: UserInsertDto): Promise<void> {
    return await this.userService.createUser(userInsertDto);
  }

  @Patch()
  async updateUser(@Param() userUpdateDto: UserUpdateDto): Promise<void> {
    return await this.userService.updateUser(userUpdateDto);
  }
}
