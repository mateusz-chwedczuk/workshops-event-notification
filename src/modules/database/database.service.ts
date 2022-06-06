import { Injectable } from "@nestjs/common";
import { InsuranceEntity } from "./entities/insurance.entity";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class DatabaseService {
  users: UserEntity[] = [];
  insurances: InsuranceEntity[] = [];
}
