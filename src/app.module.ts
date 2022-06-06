import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AppController } from "./app.controller";
import { DatabaseModule } from "./modules/database/database.module";
import { InsuranceModule } from "./modules/insurance/insurance.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    InsuranceModule,
    UserModule,
    DatabaseModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
