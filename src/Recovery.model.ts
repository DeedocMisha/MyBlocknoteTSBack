import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { Users } from './Users.model';

@Table({ tableName: 'recovery' })
export class Recovery extends Model<Recovery> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Users)
  @Column
  userId: number;

  @BelongsTo(() => Users)
  user: Users;

  @Column({ allowNull: false })
  token: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt: Date;
}
