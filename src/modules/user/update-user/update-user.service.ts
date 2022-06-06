import { Injectable } from "@nestjs/common";
import { CalculateInsuranceService } from "src/modules/insurance/calculate-insurance/calculate-insurance.service";
import { DatabaseService } from "../../database/database.service";
import { UpdateUserDto } from "./update-user.dto";

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly database: DatabaseService,
    private readonly calculateInsuranceService: CalculateInsuranceService
  ) {}

  async execute(id: string, dto: UpdateUserDto) {
    const index = this.database.users.findIndex((u) => u.id === id);
    this.database.users[index].city = dto.city;
    await this.calculateInsuranceService.execute(id);
  }
}
