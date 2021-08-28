import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UserStub } from './userStub.interface';

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

  @Post()
  async create(@Body() userStub: UserStub): Promise<User> {
    return await this.usersService.create({
      firstName: userStub.firstName,
      lastName: userStub.lastName,
      email: userStub.email,
    });
  }
}
