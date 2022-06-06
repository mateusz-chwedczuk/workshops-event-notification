import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserModule } from "../user/user.module";
import { CalculateInsuranceService } from "./calculate-insurance/calculate-insurance.service";
import { InsuranceService } from "./insurance.service";

@Module({
  exports: [InsuranceService, CalculateInsuranceService],
  imports: [DatabaseModule, UserModule],
  providers: [InsuranceService, CalculateInsuranceService],
})
export class InsuranceModule {}
