import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UserModule } from "../user/user.module";
import { CalculateInsuranceService } from "./calculate-insurance/calculate-insurance.service";
import { InsuranceService } from "./insurance.service";
import { UserUpdatedListener } from "./listeners/user-updated.listener";

@Module({
  exports: [InsuranceService],
  imports: [DatabaseModule, UserModule],
  providers: [InsuranceService, UserUpdatedListener, CalculateInsuranceService],
})
export class InsuranceModule {}
