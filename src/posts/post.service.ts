import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/createPost.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from "../Table.model";


@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Table)
    private postRepository: Repository<Table>, // Исправлено название переменной
  ) {}

  async postMessage(createPostDto: CreatePostDto): Promise<Table> {
    // Указан тип возвращаемого значения
    const post = this.postRepository.create(createPostDto); // Исправлено название переменной
    return this.postRepository.save(post); // Сохраняем пост в базе данных
  }
}
