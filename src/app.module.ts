import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { BankModule } from "./bank/bank.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("DATABASE_URI"),
        dbName: configService.get<string>("DATABASE_NAME"),
        auth: {
          username: configService.get<string>("DATABASE_USER"),
          password: configService.get<string>("DATABASE_PASS"),
        },
      }),
      inject: [ConfigService],
    }),
    UserModule,
    BankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
