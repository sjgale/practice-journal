import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Session } from './session.entity';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Session]), UsersModule],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [TypeOrmModule],
})
export class SessionsModule {}
