import { Logger, ValidationPipe } from "@nestjs/common";
import { NestApplication, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const port = 4010;
  await app.listen(port);
  Logger.log(
    `🚀 App is running at http://localhost:${port} 🚀`,
    NestApplication.name
  );
}
bootstrap();
