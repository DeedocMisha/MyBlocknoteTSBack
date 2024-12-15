import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';

@Controller('post') //Путь пост в домене
export class PostsController {
  constructor(private postService: PostService) {}

  @Post() //Пост запрос
  createPost(@Body() dto: CreatePostDto) {
    // Декоратор @UploadedFile извлекает файл, загруженный с помощью FileInterceptor
    return this.postService.postMessage(dto); //Передаем в постсервис изображение и ДТО
  }
}
