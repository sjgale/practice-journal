import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { Session } from './session.interface';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  findAll(): Session[] {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Session {
    return this.sessionsService.findOne(id);
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
