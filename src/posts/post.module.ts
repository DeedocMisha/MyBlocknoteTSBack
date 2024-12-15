import { Module } from '@nestjs/common';
import { PostsController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from '../Table.model';

@Module({
  imports: [TypeOrmModule.forFeature([Table])],
  controllers: [PostsController],
  providers: [PostService],
})
export class PostsModule {}
