import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserModel } from "./schema/user.schema";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {}

  async createUser(): Promise<string> {
    const uid = uuidv4();
    const user = new this.userModel({ uid });

    await user.save();

    return user.uid;
  }

  async getUser(uid: string) {
    const user = await this.userModel.findOne({ uid });
    return user;
  }
}
