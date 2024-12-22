import {
  Column,
  ForeignKey,
  Model,
  Table
} from "sequelize-typescript";
import { Users } from './Users.model';
import { Roles } from './Roles.model';

@Table({ tableName: 'userroles' })
export class UserRoles extends Model<UserRoles> {
  @ForeignKey(() => Users)
  @Column
  userId: number;

  @ForeignKey(() => Roles)
  @Column
  roleId: number;
}
