import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement
} from "sequelize-typescript";
import { Roles } from './Roles.model';
import { UserRoles } from "./userroles.model";

@Table({ tableName: 'users' })
export class Users extends Model<Users> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ unique: true, allowNull: false })
  username: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ allowNull: false })
  firstname: string;

  @Column({ allowNull: false })
  lastname: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  createdAt: Date;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Roles[];
}
