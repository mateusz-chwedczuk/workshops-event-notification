import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { InsuranceModule } from "../insurance/insurance.module";
import { UpdateUserService } from "./commands/update-user/update-user.service";
import { UserService } from "./user.service";

@Module({
  exports: [UserService],
  providers: [UserService, UpdateUserService],
  imports: [DatabaseModule, InsuranceModule],
})
export class UserModule {}
