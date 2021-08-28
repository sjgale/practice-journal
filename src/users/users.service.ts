import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserStub } from './userStub.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find({ select: ['firstName', 'lastName'] });
  }

  find(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  create(userStub: UserStub): Promise<User> {
    return this.userRepository.save({
      id: randomUUID(),
      firstName: userStub.firstName,
      lastName: userStub.lastName,
      email: userStub.email,
      createdAt: new Date(),
    });
  }
}
