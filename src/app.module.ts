import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { User } from './users/user.entity';
import { Session } from './sessions/session.entity';

@Module({
  imports: [
    UsersModule,
    SessionsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'practice',
      password: 'password',
      database: 'practice_journal',
      entities: [Session, User],
      retryAttempts: 5,
      retryDelay: 3000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
