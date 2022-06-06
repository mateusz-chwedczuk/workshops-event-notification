import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";

@Injectable()
export class InsuranceService {
  constructor(private readonly userService: UserService) {}

  async calculateInsurance(userId: string) {
    const user = await this.userService.get(userId);

    if (user.city === "aaaa") {
      // do stuff
    }

    // do other stuff
  }
}
