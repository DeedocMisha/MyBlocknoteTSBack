import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GetService } from './get.service';
import { GetsController } from './get.controller';
import { Table } from '../Table.model'; // Убедитесь, что путь правильный

@Module({
  imports: [TypeOrmModule.forFeature([Table])], // Подключите сущность
  controllers: [GetsController],
  providers: [GetService],
})
export class GetsModule {}
