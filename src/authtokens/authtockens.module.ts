import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthTokensService } from './authtockens.service';
import { Users } from '../Users.model';
import { JwtModule } from '@nestjs/jwt';
import { AuthTokensController } from "./authtockens.controller";

@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthTokensController], // Добавьте контроллер сюда
  providers: [AuthTokensService],
  exports: [AuthTokensService],
})
export class AuthTokensModule {}
