import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schema/user.schema";
import { Model } from "mongoose"; // Import Model from mongoose
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UserService {
  // Use Model<User> for the type annotation
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

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
