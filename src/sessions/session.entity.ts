import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('sessions')
export class Session {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  summary: string;

  @Column()
  length: number;

  @Column('timestamptz')
  date: Date;

  @ManyToOne(() => User, (user) => user.sessions)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
