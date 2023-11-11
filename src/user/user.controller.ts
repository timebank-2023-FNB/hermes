import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser() {
    const uid = await this.userService.createUser();
    return { message: "success", uid };
  }

  @Get("/balance/:uid")
  async getUserBalance(@Param("uid") uid: string) {
    const user = await this.userService.getUser(uid);
    if (!user) {
      throw new NotFoundException();
    }
    return { message: "success", balance: user.balance };
  }
}
