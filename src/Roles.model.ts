import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement
} from "sequelize-typescript";
import { Users } from './Users.model';
import { UserRoles } from "./userroles.model";

@Table({ tableName: 'roles' })
export class Roles extends Model<Roles> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false })
  role: string;

  @BelongsToMany(() => Users, () => UserRoles)
  users: Users[];
}
