import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt'; // Импортируйте JwtModule
import { Recovery } from '../Recovery.model';
import { RecoveryController } from './recovery.controller';
import { RecoveryService } from './recovery.service';
import { Users } from '../Users.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Recovery, Users]),
    JwtModule.register({
      secret: 'your_secret_key', // Замените на ваш секретный ключ
      signOptions: { expiresIn: '1h' }, // Настройте параметры токена
    }),
  ],
  controllers: [RecoveryController],
  providers: [RecoveryService],
})
export class RecoveryModule {}
