import { Module } from '@nestjs/common';
import { GetService } from './get.service';
import { GetsController } from './get.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Table } from '../../Table.model'; // Убедитесь, что путь правильный

@Module({
  imports: [SequelizeModule.forFeature([Table])], // Измените на SequelizeModule
  controllers: [GetsController],
  providers: [GetService],
})
export class GetsModule {}
