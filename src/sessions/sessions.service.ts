import { randomUUID } from 'crypto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
  ) {}

  findAll(): Promise<Session[]> {
    return this.sessionRepository.find();
  }

  findOne(id?: string): Promise<Session> {
    return this.sessionRepository.findOne(id);
  }

  async delete(id: string): Promise<void | Error> {
    const result = await this.sessionRepository.delete(id);
    if (result.affected !== 1) {
      return new Error(`Failed to delete session: ${id}`);
    }
  }

  add(sessionStub: Partial<Session>): Promise<Session> {
    const newSession = {
      id: randomUUID(),
      summary: '',
      length: 0,
      date: new Date(),
      ...sessionStub,
    };

    return this.sessionRepository.save(newSession);
  }
}
