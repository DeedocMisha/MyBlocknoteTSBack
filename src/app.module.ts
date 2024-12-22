import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Table } from './Table.model';
import { Users } from './Users.model';
import { Recovery } from './Recovery.model';
import { Roles } from './Roles.model';
import { AuthTokens } from './authtokens.model';
import { PostsModule } from './table/posts/post.module';
import { GetsModule } from './table/gets/get.module';
import { RolesModule } from './roles/roles.module';
import { AuthTokensModule } from './authtokens/authtockens.module';
import { UserRoles } from './userroles.model';
import { UsersModule } from './users/user.module';
import { RecoveryModule } from './recovery/recovery.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'passw',
      database: 'postgres',
      models: [Table, Users, Recovery, AuthTokens, Roles, UserRoles], // Используйте 'models' вместо 'entities'
      synchronize: true,
      logging: console.log, // Включение логирования
    }),
    PostsModule,
    GetsModule,
    RolesModule,
    AuthTokensModule,
    UsersModule,
    RecoveryModule,
  ],
})
export class AppModule {}
