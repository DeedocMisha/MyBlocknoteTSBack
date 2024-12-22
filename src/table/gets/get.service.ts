import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Table } from '../../Table.model'; // Убедитесь, что путь правильный

@Injectable()
export class GetService {
  constructor(
    @InjectModel(Table)
    private getModel: typeof Table, // Используйте Model вместо Repository
  ) {}

  // Метод для получения всех записей из таблицы Table
  async getService(): Promise<Table[]> {
    return await this.getModel.findAll(); // Используйте findAll для получения всех записей
  }
}
