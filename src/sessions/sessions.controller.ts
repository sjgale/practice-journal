import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { Session } from './session.entity';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  async findAll(): Promise<Session[]> {
    return await this.sessionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Session> {
    return await this.sessionsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionsService.delete(id);
  }

  @Post()
  create(@Body() sessionStub: Partial<Session>) {
    return this.sessionsService.add(sessionStub);
  }
}
