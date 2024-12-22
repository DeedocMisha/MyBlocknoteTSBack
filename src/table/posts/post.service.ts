import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { InjectModel } from '@nestjs/sequelize'; // Используйте InjectModel для Sequelize
import { Table } from "../../Table.model";

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Table)
    private postModel: typeof Table, // Используйте модель вместо Repository
  ) {}

  async postMessage(createPostDto: CreatePostDto): Promise<Table> {
    // Убедитесь, что userId передается в createPostDto
    if (!createPostDto.title) {
      throw new Error('userId is required');
    }

    // Создаем пост
    const post = await this.postModel.create(createPostDto); // Используйте create
    return post; // Возвращаем созданный пост
  }
}
