import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BankController } from "./bank.controller";
import { BankService } from "./bank.service";
import { Log, LogSchema } from "../logger/log.schema";

@Module({
  imports: [
    // MongooseModule을 사용하여 MongoDB에 연결
    // 'Log' 스키마를 사용하여 로그 모델을 등록
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
  ],
  controllers: [BankController], // 컨트롤러 등록
  providers: [BankService], // 서비스(프로바이더) 등록
})
export class BankModule {}
