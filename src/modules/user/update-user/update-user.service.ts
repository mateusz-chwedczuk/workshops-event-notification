import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { DatabaseService } from "../../database/database.service";
import { UserUpdatedEvent } from "../events/user-updated.event";
import { UpdateUserDto } from "./update-user.dto";

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly database: DatabaseService,
    private readonly eventBus: EventEmitter2
  ) {}

  async execute(id: string, dto: UpdateUserDto) {
    const index = this.database.users.findIndex((u) => u.id === id);
    this.database.users[index].city = dto.city;
    this.eventBus.emit(
      UserUpdatedEvent.name,
      new UserUpdatedEvent({ userId: id })
    );
  }
}
