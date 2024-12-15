import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from '../Table.model'; // Импортируйте вашу сущность

@Injectable()
export class GetService {
  constructor(
    @InjectRepository(Table)
    private getRepository: Repository<Table>, // Название переменной для репозитория
  ) {}

  // Метод для получения всех записей из таблицы Table
  async getService(): Promise<Table[]> {
    return await this.getRepository.find(); // Возвращает все записи из таблицы
  }
}
