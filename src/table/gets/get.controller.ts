import { Controller, Get } from '@nestjs/common';
import { GetService } from './get.service';
import { Table } from '../../Table.model'; // Импортируйте вашу сущность

@Controller('get') // Путь для получения данных
export class GetsController {
  constructor(private readonly getService: GetService) {}

  @Get() // GET запрос
  async createPost(): Promise<Table[]> { // Измените на async
    return this.getService.getService(); // Передаем в сервис запрос
  }
}
