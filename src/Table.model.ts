import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Table')
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: false })
  content: string;
}
