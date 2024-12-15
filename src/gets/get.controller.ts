import { Controller, Get } from '@nestjs/common';
import { GetService } from './get.service';

@Controller('get') //Путь пост в домене
export class GetsController {
  constructor(private readonly getService: GetService) {}
  @Get() //Пост запрос
  createPost() {
    // Декоратор @UploadedFile извлекает файл, загруженный с помощью FileInterceptor
    return this.getService.getService(); //Передаем в постсервис изображение и ДТО
  }
}
