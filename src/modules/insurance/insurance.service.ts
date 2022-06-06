import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { UserService } from "../user/user.service";

@Injectable()
export class InsuranceService {
  constructor(
    private readonly database: DatabaseService,
    private readonly userService: UserService
  ) {}

  async getByUserId(userId: string) {
    return this.database.insurances.find((i) => i.userId === userId);
  }
}
