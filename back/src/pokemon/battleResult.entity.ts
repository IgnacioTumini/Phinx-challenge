import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BattleResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  winner: string;

  @Column()
  loser: string;

  @Column()
  date: string;
}
