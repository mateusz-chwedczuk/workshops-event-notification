import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../../../database/database.service";
import { InsuranceService } from "../../../insurance/insurance.service";
import { UpdateUserDto } from "./update-user.dto";

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly database: DatabaseService,
    private readonly insuranceService: InsuranceService
  ) {}

  async update(id: string, dto: UpdateUserDto) {
    const index = this.database.users.findIndex((u) => u.id === id);
    this.database.users[index].city = dto.city;
    await this.insuranceService.calculateInsurance(id);
  }
}
