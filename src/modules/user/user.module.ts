import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UpdateUserService } from "./update-user/update-user.service";
import { UserService } from "./user.service";

@Module({
  exports: [UserService],
  imports: [DatabaseModule],
  providers: [UserService, UpdateUserService],
})
export class UserModule {}
