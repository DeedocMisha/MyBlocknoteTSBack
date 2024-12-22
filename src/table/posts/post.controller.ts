import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';

@Controller('post') // Путь пост в домене
export class PostsController {
  constructor(private postService: PostService) {}

  @Post() // POST запрос
  async createPost(@Body() dto: CreatePostDto) {
    return await this.postService.postMessage(dto); // Передаем DTO в сервис
  }
}
