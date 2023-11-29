import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";

export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<User>;

@Schema()
export class User {
  @Prop({ index: true, unique: true })
  uid: string;

  @Prop({ default: 0 })
  balance?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
