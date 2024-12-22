import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { Users } from './Users.model';

@Table({ tableName: 'auth_tokens' })
export class AuthTokens extends Model<AuthTokens> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Users)
  @Column
  userId: number;

  @BelongsTo(() => Users)
  user: Users;
}
