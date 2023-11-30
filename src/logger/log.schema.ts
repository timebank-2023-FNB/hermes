// log.schema.ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Model } from "mongoose";

export type LogDocument = HydratedDocument<Log>;
export type LogModel = Model<Log>;

// createdAt 자동으로 추가
@Schema({ timestamps: true })
export class Log {
  @Prop({ required: true })
  op: string;

  @Prop()
  from?: string;

  @Prop()
  to?: string;

  @Prop()
  amount?: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
