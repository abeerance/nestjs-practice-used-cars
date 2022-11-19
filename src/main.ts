import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // implement ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      // Makes sure that incoming requests has only the defined DTO properties
      // and ignores all other manual created properties
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
