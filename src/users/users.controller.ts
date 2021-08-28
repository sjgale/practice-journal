import { Controller, Get, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.getAll();
  }

  @Get(':id')
  async find(@Param(':id') id): Promise<User> {
    return await this.usersService.find(id);
  }
}
