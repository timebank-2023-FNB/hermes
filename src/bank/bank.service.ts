import { Injectable } from "@nestjs/common";
import TransactionDto from "./dto/transaction.dto";
import axios from "axios";
import { API_BANK } from "src/config";
import { Model } from "mongoose";
import { Log, LogDocument } from "../logger/log.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class BankService {
  private constructor(
    @InjectModel(Log.name) private logModel: Model<LogDocument>,
  ) {}

  async log(
    op: string,
    detail?: { from?: string; to?: string; amount?: string },
  ) {
    const log = new this.logModel({ op, ...detail });
    await log.save();
  }

  async registerPayApp() {
    const response = await axios.post(`${API_BANK}/mock/pay/register`, {});
    console.log(response);
    return "123123";
  }
  async issueAccount(payId: string) {
    const response = await axios.post(`${API_BANK}/mock/issue/account`, {
      payId,
    });
    console.log(response);
    return "z0ajfm239";
  }
  async getBalance(payId: string, bankAccount: string) {
    const response = await axios.post(`${API_BANK}/mock/balance`, {
      payId,
      bankAccount,
    });
    console.log(response);
    return 10000;
  }

  async transfer(payId: string, transaction: TransactionDto) {
    const response = await axios.post(`${API_BANK}/mock/balance`, {
      ...transaction,
      payId,
    });
    console.log(response);
    return true;
  }
}
