import { Module } from '@nestjs/common';
import { PostsController } from './post.controller';
import { PostService } from './post.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Table } from '../../Table.model';

@Module({
  imports: [SequelizeModule.forFeature([Table])], // Импортируем модель
  controllers: [PostsController],
  providers: [PostService],
})
export class PostsModule {}
