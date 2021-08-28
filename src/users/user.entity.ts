import { Session } from '../sessions/session.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  email: string;

  @Column({
    name: 'created_at',
    type: 'timestamptz',
  })
  createdAt: Date;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];
}
