import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from './Table.model';
import { PostsModule } from './posts/post.module';
import { GetsModule } from './gets/get.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'passw',
      database: 'postgres',
      entities: [Table], // Убедитесь, что ваша сущность указана здесь
      synchronize: true, // Убедитесь, что эта опция включена
    }),
    PostsModule,
    GetsModule,
  ],
})
export class AppModule {}
