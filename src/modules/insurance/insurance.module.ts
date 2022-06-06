import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { InsuranceService } from "./insurance.service";

@Module({
  exports: [InsuranceService],
  imports: [UserModule],
  providers: [InsuranceService],
})
export class InsuranceModule {}
