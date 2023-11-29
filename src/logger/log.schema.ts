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

  @Prop({ required: true })
  from?: string;

  @Prop({ required: true })
  to?: string;

  @Prop({ required: true })
  amount?: string;
}

export const LogSchema = SchemaFactory.createForClass(Log);
