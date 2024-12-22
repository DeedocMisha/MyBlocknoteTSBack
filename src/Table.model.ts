import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table as SequelizeTable,
} from 'sequelize-typescript';
import { Users } from './Users.model';
@SequelizeTable({ tableName: 'table' })
export class Table extends Model<Table> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  title: string;

  @Column({ allowNull: false })
  content: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  timeCreate: Date;

  @ForeignKey(() => Users)
  @Column({ allowNull: false })
  userId: number;

  @BelongsTo(() => Users)
  user: Users;
}
