import { Injectable } from '@nestjs/common';
import { Session } from './session.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class SessionsService {
  private sessions: Session[] = [
    {
      id: '999ae687-9c6f-40f3-8380-0cd369341d01',
      summary: 'I practiced the A, C, and D chords.',
      length: 15,
    },
    {
      id: '58d7f1b3-2e48-4ed1-9610-4f7ab715892a',
      summary:
        'I practiced major and minor pentatonic scales over a simple chord progression.',
      length: 20,
    },
  ];

  findAll(): Session[] {
    return this.sessions;
  }

  findOne(id?: string): Session {
    return this.sessions.find((session) => session.id === id);
  }

  delete(id: string): void {
    this.sessions = this.sessions.filter((session) => session.id !== id);
  }

  add(sessionStub: Partial<Session>): string {
    const id = randomUUID();
    const baseSession = {
      id,
      summary: '',
      length: 0,
    };

    this.sessions.push({
      ...baseSession,
      ...sessionStub,
    });

    return id;
  }
}
