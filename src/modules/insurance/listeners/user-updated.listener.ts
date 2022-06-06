import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { UserUpdatedEvent } from "../../user/events/user-updated.event";
import { CalculateInsuranceService } from "../calculate-insurance/calculate-insurance.service";

@Injectable()
export class UserUpdatedListener {
  constructor(
    private readonly calculateInsuranceService: CalculateInsuranceService
  ) {}

  @OnEvent(UserUpdatedEvent.name)
  async handleUserUpdatedEvent(event: UserUpdatedEvent) {
    await this.calculateInsuranceService.execute(event.userId);
  }
}
