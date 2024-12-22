import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UsersController } from './user.controller';
import { Users } from '../Users.model';
import { RolesModule } from '../roles/roles.module';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '60s' },
    }),
    RolesModule,
  ],
  providers: [UserService, RolesGuard],
  controllers: [UsersController],
})
export class UsersModule {}
