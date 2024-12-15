import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

// Загружаем переменные окружения из .env файла
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // Разрешаем только этот источник
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
  });

  const port = process.env.PORT || 3000; // Если PORT не задан, используем 3000 по умолчанию
  await app.listen(port); // Запуск приложения на указанном порту
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
