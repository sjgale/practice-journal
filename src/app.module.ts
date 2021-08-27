import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionsController } from './sessions/sessions.controller';
import { SessionsService } from './sessions/sessions.service';

@Module({
  imports: [],
  controllers: [AppController, SessionsController],
  providers: [AppService, SessionsService],
})
export class AppModule {}
