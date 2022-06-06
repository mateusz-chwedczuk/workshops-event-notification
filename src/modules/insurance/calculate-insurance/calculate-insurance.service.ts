import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/modules/database/database.service";
import { UserService } from "../../user/user.service";
import { InsuranceService } from "../insurance.service";

@Injectable()
export class CalculateInsuranceService {
  constructor(
    private readonly database: DatabaseService,
    private readonly insuranceService: InsuranceService,
    private readonly userService: UserService
  ) {}

  async execute(userId: string) {
    const insurance = await this.insuranceService.getByUserId(userId);
    const user = await this.userService.get(userId);

    if (user.city === "a") {
      // insurance
    }

    // do other stuff
  }
}
